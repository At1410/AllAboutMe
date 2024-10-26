const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmailService = async (email, token) => {

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const verificationLink = `${process.env.URL_FRONTEND}/verifyEmail?token=${token}`;

    const info = {
        from: '"At gửi xác thực cho bạn" <ahnthhu@gmail.com>',
        to: email,
        subject: "Gửi email xác thực đăng ký tài khoản",
        text: "Hello world?",
        html: `<p>Vui lòng xác thực tài khoản của bạn bằng cách nhấp vào liên kết bên dưới:</p><p><a href="${verificationLink}">${verificationLink}</a></p><p>Liên kết này sẽ hết hạn sau 5 phút.</p>`,
    };

    try {
        await transporter.sendMail(info);
        console.log('Email xác thực đã được gửi.');
    } catch (error) {
        console.error('Lỗi khi gửi email xác thực:', error);
        throw new Error('Không thể gửi email xác thực');
    }
}

module.exports = {
    sendEmailService
};