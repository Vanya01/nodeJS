const User = require('../dataBase/User');
const pass = require('../services/password-services');

module.exports = {
    isPasswordMatched: async (req, res, next) => {
        try {
            const {
                body: {password}, user
            } = req;
            await pass.compare(password, user.password);
            next();
        } catch (e) {
            next(e);
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
        } catch (e) {
            next(e);
        }
    }
};
