const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/userController');

router.get('/', controllers.getAllUsers);
router.post('/', controllers.createUser);

module.exports = router;