const router = require('express')
    .Router();

const authController = require('../ontrollers/userLogIn');
const {isUserPresent, isPasswordMatched} = require('../midleWars/userAuthorizationMiddleWars');

router.post('/',
    isUserPresent,
    isPasswordMatched,
    authController.login);

module.exports = router;
