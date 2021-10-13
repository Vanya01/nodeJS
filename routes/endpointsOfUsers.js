const router = require('express')
    .Router();

const {userController} = require('../controllers/index');
const {authMiddleVar} = require('../midleWars/index');

router.get('/', userController.getUsers);
router.post('/', userController.createUser);
router.put('/:user_id', authMiddleVar.checkUserId, userController.updateUser);
router.get('/:user_id', authMiddleVar.checkUserId, userController.getUsersById);
router.delete('/:user_id', authMiddleVar.checkUserId, userController.deleteUser);

module.exports = router;
