const User = require('../dataBase/User');
const userValidator = require('../validators/validator');

module.exports = {
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
            next(e);
        }
    },

    createUserMiddleware: async (req, res, next) => {
        try {
            const userByEmail = await User.findOne({email: req.body.email});

            if (userByEmail) {
                return next({
                    message: 'Email already exist!!!',
                    status: 404
                });
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    isUserBodyValid: (req, res, next) => {
        try {
            const {err, value} = userValidator.createUserValidator.validate(req.body);

            if (err) {
                throw new Error(err.details[0].message);
            }

            req.body = value;

            next();
        } catch (e) {
            next(e);
        }
    },

    checkUserRole: (roleArray = []) => (req, res, next) => {
        try {
            const {role} = req.user;

            if (!roleArray.includes(role)) {
                throw new Error('Something wrong with access!');
            }

            next();
        } catch (e) {
            next(e);
        }
    }
};
