const User = require('../models/user.model');

const { createUserSchemaValidate } = require('../validates/user');
const { hashPassword, comparePassword, verifyToken } = require('../utils/password.Utils');

const { generateVerificationToken } = require('../utils/password.Utils');
const { sendEmailService } = require('../utils/emailService');

const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET;

require('dotenv').config();

const register = async (req, res, next) => {
    const { email, password } = req.body;

    const { error } = createUserSchemaValidate.validate({ email, password });
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email đã tồn tại!', details: existingUser.message });
        }

        const hashedPassword = await hashPassword(password);
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();

        const token = generateVerificationToken(newUser._id);

        await sendEmailService(email, token);

        res.status(201).json({
            message: `Đăng ký thành công!\n
             Vui lòng kiểm tra email để xác thực tài khoản.` });
    } catch (err) {
        res.status(500).json({ error: 'Có lỗi xảy ra', details: err.message });
    }
};

const verifyEmail = async (req, res) => {
    const { token } = req.query;

    if (!token) {
        return res.status(400).json({ message: 'Token không tồn tại.' });
    }

    try {
        const decoded = verifyToken(token);
        const user = await User.findById(decoded.userId);

        if (!user) {
            return res.status(400).json({ message: 'Người dùng không tồn tại.' });
        }

        const now = Date.now();
        const registrationTime = new Date(user.createdAt).getTime();
        const timeElapsed = (now - registrationTime) / (1000 * 60);

        if (timeElapsed > 5) {
            try {
                console.log('Attempting to delete user with ID:', user._id);
                await User.deleteOne({ _id: user._id });
            } catch (deleteError) {
                console.log('Lỗi khi xóa tài khoản:', deleteError);
                return res.status(500).json({ message: 'Đã xảy ra lỗi trong quá trình xóa tài khoản.' });
            }
        }

        user.isVerified = true;
        await user.save();
        res.status(200).json({ message: 'Xác thực email thành công.' });

    } catch (error) {
        res.status(400).json({ message: 'Liên kết xác thực không hợp lệ hoặc đã hết hạn.' });
    }
};


const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'Tài khoản không tồn tại!' });
        }

        if (!user.isVerified) {
            return res.status(403).json({ error: 'Tài khoản chưa được xác thực. Vui lòng xác thực email của bạn.' });
        }

        const isMatch = await comparePassword(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Mật khẩu đăng nhập không đúng!' });
        }

        const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: '5m' });
        res.status(200).json({ message: 'Đăng nhập thành công', token });
    } catch (err) {
        console.error("Lỗi đăng nhập:", err);
        res.status(500).json({ error: 'Có lỗi xảy ra trong quá trình đăng nhập!', details: err.message });
    }
};


module.exports =
{
    register,
    login,
    verifyEmail
};