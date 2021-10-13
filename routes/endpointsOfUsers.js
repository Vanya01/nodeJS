const router = require('express')
    .Router();

const userController = require('../Controllers/user_controller');
const {checkUserId} = require('../midleWars/userAuthorizationMiddleWars');

router.get('/', userController.getUsers);
router.post('/', userController.createUser);
router.put('/:user_id',checkUserId, userController.updateUser);
router.get('/:user_id',checkUserId, userController.getUsersById);
router.delete('/:user_id',checkUserId, userController.deleteUser);

module.exports = router;
