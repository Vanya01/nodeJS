module.exports = {
    login: (req, res) => {
        try {
            res.json('Signed_In!');
        } catch (e) {
            next(e);
        }
    },
};
