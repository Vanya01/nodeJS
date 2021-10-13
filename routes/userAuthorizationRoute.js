const router = require('express')
    .Router();

const {authController} = require('../controllers');
const {authMiddleVar, userMiddleVar} = require('../midleWars/index');

router.post('/',
    authMiddleVar.isUserPresent,
    userMiddleVar.isPasswordMatched,
    authController.login);

module.exports = router;
