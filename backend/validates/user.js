const Joi = require('joi');

const createUserSchemaValidate = Joi.object({
    email: Joi.string()
        .required()
        .messages({
            'string.empty': 'Email không được để trống.',
        }),
    password: Joi.string()
        .required()
        .messages({
            'string.empty': 'Mật khẩu không được để trống.',
        })
});

module.exports = {
    createUserSchemaValidate
};
