const User = require('../dataBase/User');
const userUtil = require('../helper/helper');
const passwordServices = require('../services/password-services');

module.exports = {
    getUsers: async (req, res) => {
        try {
            const users = await User.find().lean();

            res.json(users);
        } catch (e) {
            res.json(e.message);
        }
    },

    getUsersById: async (req, res) => {
        try {
            const {user_id} = req.params;
            const useR = await User.findById(user_id).lean();
            const user = userUtil.userNormalizator(useR);

            res.json(user);
        } catch (e) {

            res.json(e.message);
        }
    },

    createUser: async (req, res) => {
        try {
            const user = req.body;
            const hashedPassword = await passwordServices.hash(req.body.password);
            const users = await User.create({...user, password: hashedPassword});

            res.json(users);
        } catch (e) {

            res.json(e.message);
        }
    },

    deleteUser: async (req, res) => {
        try {
            const {user_id} = req.params;
            let deletedUser = await User.findByIdAndDelete(user_id)
                .lean();
            deletedUser = userUtil.userNormalizator(deletedUser);

            res.json(deletedUser);
        } catch (e) {

            res.json(e.message);
        }
    },

    updateUser: async (req, res) => {
        try {
            const {user_id} = req.params;
            let updatedUser = await User.findByIdAndUpdate(user_id, req.body)
                .lean();
            updatedUser = userUtil.userNormalizator(updatedUser);

            res.json(updatedUser);
        } catch (e) {

            res.json(e.message);
        }
    }
};
