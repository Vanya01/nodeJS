const pass = require("../services/password-services");

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
};
