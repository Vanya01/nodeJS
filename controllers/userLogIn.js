const jwtServices = require('../services/jwtServices');

const o_auth = require('../dataBase/o-auth');
const User = require('../dataBase/User');
const {userNormalizator} = require('../helper/helper');


module.exports = {
    login: async (req, res, next) => {
        try {
            const { user } = req;

            const tokenPair = jwtServices.generateTokenPair();

            const userNormalized = userNormalizator(user);

            await o_auth.create({
                ...tokenPair,
                user_id: userNormalized._id
            });

            res.json({
                user: userNormalized,
                ...tokenPair
            });
        } catch (e) {
            next(e);
        }
    },

    logout: async (req, res, next) => {
        try {
            const users = await User.find();

            res.json(users, 'Log out!');
        } catch (e) {
            next(e);
        }
    }
};
