const router = require('express').Router();

const userController = require('../Controllers/user_controller');

router.get('/', userController.getUsers); //use async just when task require it , better to use - sync

router.get('/:user_id',userController.getUsersById);

router.post('/',userController.createUser);

router.delete('/',userController.deleteUsers);

module.exports = router; // do not export like a function