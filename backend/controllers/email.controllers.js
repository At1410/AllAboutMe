const { sendEmailService } = require("../utils/emailService.js");

const sendEmail = async (req, res) => {
    try {
        const { email } = req.body;

        if (email) {
            const response = await sendEmailService(email);
            return res.json(response);
        }
        return res.json({
            status: 'err',
            message: 'Email là bắt buộc'
        })
    } catch (error) {
        return res.json({
            status: 'err',
            message: error.message,
        });
    }
}

module.exports = {
    sendEmail
};