const express = require('express');
const router = express.Router();
const {register, login, logout, isSignedIn } = require('../../../controllers/api/v1/user_controller');

router.post('/register', register);

router.post('/login', login);
router.get('/logout', isSignedIn, logout);


module.exports = router;