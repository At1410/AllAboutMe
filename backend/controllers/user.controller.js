const userModel = require("../models/user.model");


const createUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.create({ email, password });
        res.status(201).json(user);
    } catch (error) {

    }
}

module.exports = {
    createUser
};