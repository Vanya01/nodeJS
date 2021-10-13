const User = require('../dataBase/User');
// const userValidator = require('../validators/validator');

module.exports = {
    createUserMiddleVar: async (req, res, next) => {
        try {
            const userByEmail = await User.findOne({email: req.body.email});

            if (userByEmail) {
                throw new Error('Email already exist');
            }

            next();
        } catch (e) {
            res.json(e.message);
        }
    },

    // isUserPresent: async (req, res, next) => {
    //     try {
    //         const {err} = await userValidator.createUserValidator.validate(req.body);
    //
    //         if (err) {
    //             throw new Error(err.details[0].message);
    //         }
    //
    //         next();
    //     } catch (e) {
    //         res.json(e.message);
    //     }
    // },
};
