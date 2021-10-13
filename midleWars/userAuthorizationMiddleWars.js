const pass = require('../services/password-services');
const User = require('../dataBase/User');

module.exports = {
    isPasswordMatched: async (req, res, next) => {
        try {
            const {
                body: {password}, user
            } = req;
            await pass.compare(password, user.password);
            next();
        } catch (e) {
            res.json(e.message);
        }
    },

    isUserPresent: async (req, res, next) => {
        try {
            const user = await User.findOne({email: req.body.email})
                .select('+password');
            if (!user) {
                throw new Error('Wrong user name or password!');
            }
            req.user = user;

            next();
        } catch (e) {
            res.json(e.message);
        }
    },

    checkUserId: async (req, res, next) => {
        try {
            const {user_id} = await req.params;
            const user = await User.findByIdAndUpdate(user_id);

            if (!user) {
                throw new Error('Incorrect User Id!');
            }
            req.user = user;

            next();
        } catch (err) {
            res.json(err.message);
        }
    }
};
