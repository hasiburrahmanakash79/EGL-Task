const express = require('express');
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/register', userController.registerUser);
router.get('/', userController.getAllUsers);

router.get('/:id', auth, userController.getUserById);

module.exports = router;