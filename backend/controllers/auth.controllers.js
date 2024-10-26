const User = require('../models/user.model');
const { createUserSchemaValidate } = require('../validates/user');
const { hashPassword, comparePassword } = require('../utils/password.Utils');

const { generateVerificationToken } = require('../utils/password.Utils');
const { sendEmailService } = require('../utils/sendEmailService');

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

        res.status(201).json({ message: 'Đăng ký thành công! Vui lòng kiểm tra email để xác thực tài khoản.' });
    } catch (err) {
        res.status(500).json({ error: 'Có lỗi xảy ra', details: err.message });
    }
};

const verifyEmail = async (req, res) => {
    const { token } = req.query;

    try {
        const decoded = verifyToken(token);
        const user = await User.findById(decoded.userId);

        if (!user) {
            return res.status(400).json({ message: 'Người dùng không tồn tại.' });
        }

        if (user.isVerified) {
            return res.status(400).json({ message: 'Tài khoản đã được xác thực trước đó.' });
        }

        // Kiểm tra thời gian đăng ký đã vượt quá 5 phút hay chưa
        const now = Date.now();
        const registrationTime = new Date(user.createdAt).getTime();
        const timeElapsed = (now - registrationTime) / (1000 * 60); // Tính theo phút

        if (timeElapsed > 5) {
            // Nếu đã quá 5 phút mà chưa xác thực, xóa tài khoản
            await User.deleteOne({ _id: user._id });
            return res.status(400).json({ message: 'Liên kết xác thực đã hết hạn. Tài khoản của bạn đã bị xóa.' });
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
            return res.status(404).json({ error: 'User not found' });
        }

        const isMatch = await comparePassword(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful', token });
    } catch (err) {
        res.status(500).json({ error: 'Error logging in user', details: err.message });
    }
};

module.exports =
{
    register,
    login,
    verifyEmail
};
