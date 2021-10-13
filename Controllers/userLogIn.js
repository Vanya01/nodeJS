const UsersHere = require('../dataBase/User');

module.exports = {
    login: (req, res) => {
        try {
            res.json('Done!');
        } catch (e) {
            res.json(e.message);
        }
    },

    logout: async (req, res) => {
        try {
            const user = await UsersHere.findOne();

            res.json(user);
        } catch (err) {
            res.json(err);
        }
    }
};
