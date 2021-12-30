const express = require('express');
const router = express.Router();

const usersHander = require('./handler/users');

router.post('/register', usersHander.register)
router.post('/login', usersHander.login)

module.exports = router;
