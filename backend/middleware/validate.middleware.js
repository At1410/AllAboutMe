const createUserSchema = require('../validates/user');

const validateUser = (req, res, next) => {
    const { error } = createUserSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};



module.exports = {
    validateUser,
};
