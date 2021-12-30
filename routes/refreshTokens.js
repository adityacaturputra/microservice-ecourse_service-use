const router = require('express').Router()
const refreshTokensHandler = require('./handler/refresh-tokens')

router.post('/', refreshTokensHandler.create)
 
module.exports = router