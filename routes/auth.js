var express = require('express');
var router = express.Router();

const authController = require('../controllers/auth');

router.route('/login').post(authController.login);

module.exports = router;
