const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const generateVerificationToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '5m' });
};

const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
};

// Hàm mã hóa mật khẩu
const hashPassword = async (password) => {
    const saltRounds = 10;
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (err) {
        throw new Error('Lỗi sảy ra khi mã hóa mật khẩu');
    }
};

// Hàm so sánh mật khẩu
const comparePassword = async (inputPassword, hashedPassword) => {
    try {
        const isMatch = await bcrypt.compare(inputPassword, hashedPassword);
        return isMatch;
    } catch (err) {
        throw new Error('Lỗi sảy ra khi so sánh mật khẩu');
    }
};

module.exports = {
    hashPassword,
    comparePassword,
    generateVerificationToken,
    verifyToken
};
