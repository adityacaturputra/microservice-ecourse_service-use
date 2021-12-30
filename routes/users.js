const express = require('express');
const router = express.Router();

const usersHander = require('./handler/users');

router.post('/register', usersHander.register)

module.exports = router;
