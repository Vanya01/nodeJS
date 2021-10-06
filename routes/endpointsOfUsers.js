const router = require('express').Router();

const userController = require('../Controllers/user_controller');

router.post('/', userController.createUser);

router.get('/', userController.getUsers);

router.get('/:user_id', userController.getUsersById);

router.delete('/:user_id', userController.deleteUsers);

module.exports = router;