const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).send('No token provided.');
    }

    // Xác thực token
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(500).send('Failed to authenticate token.');
        }
        req.userId = decoded.id;
        next();
    });
};

module.exports = authenticateToken;
