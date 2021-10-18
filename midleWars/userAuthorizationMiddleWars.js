const User = require('../dataBase/User');
const {AUTHORIZATION} = require('../config/constants');
const {ErrorHandler} = require('../errors/customErrors');
const {jwtService,passwordService} = require('../services/index');
const o_auth = require('../dataBase/o-auth');

module.exports = {
    isPasswordMatched: async (req, res, next) => {
        try {
            const {
                body: {password}, user
            } = req;
            await passwordService.compare(password, user.password);

            next();
        } catch (e) {
            next(e);
        }
    },

    checkAccessToken: async (req, res, next) => {
        try {
            const token = req.get(AUTHORIZATION);

            if (!token) {
                throw new ErrorHandler('Missing token', 401);
            }

            await jwtService.verifyToken(token);

            const tokenResponse = await o_auth
                .findOne({access_token: token})
                .populate('user_id');

            if (!tokenResponse) {
                throw new ErrorHandler('Incorrect token', 401);
            }

            req.user = tokenResponse.user_id;

            next();
        } catch (e) {
            next(e);
        }
    },

    checkRefreshToken: async (req, res, next) => {
        try {
            const token = req.get(AUTHORIZATION);

            if (!token) {
                throw new ErrorHandler('Missing token !!!', 401);
            }

            await jwtService.verifyToken(token,);

            const tokenResponse = await o_auth
                .findOne({refresh_token: token})
                .populate('user_id');

            if (!tokenResponse) {
                throw new ErrorHandler('Incorrect token !!!', 401);
            }

            await o_auth.remove({refresh_token: token});

            req.user = tokenResponse.user_id;

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
