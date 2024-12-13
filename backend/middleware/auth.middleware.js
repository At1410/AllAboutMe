const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).send('Không có token nào được cung cấp.');
    }

    // Xác thực token
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(500).send('Không thể xác thực token.');
        }
        req.userId = decoded.id;
        next();
    });
};

module.exports = authenticateToken;
