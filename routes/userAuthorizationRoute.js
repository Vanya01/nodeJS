const router = require('express')
    .Router();

const {authController} = require('../controllers');
const {authMiddleVar, userMiddleVar} = require('../midleWars/index');
const {USER, ADMIN} = require('../config/user-role');

router.post(
    '/',
    userMiddleVar.isUserPresent,
    userMiddleVar.checkUserRole([
        USER,
        ADMIN
    ]),
    authMiddleVar.isPasswordMatched,
    authController.login
);

router.post(
    '/logout',
    authController.logout
);

router.post(
    '/refresh',
    authMiddleVar.checkRefreshToken,
    authController.login
);
module.exports = router;
