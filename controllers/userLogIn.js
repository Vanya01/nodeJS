module.exports = {
    login: (req, res) => {
        try {
            res.json('Signed_In!');
        } catch (e) {
            res.json(e.message);
        }
    },
};
