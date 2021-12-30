const {RefreshToken} = require('../../../models')

module.exports = async (req, res) => {
    try {
        const {refresh_token: refreshToken} = req.query

        const token = await RefreshToken.findOne({
            where: {token: refreshToken}
        })
        if (!token) {
            return res.status(400).json({
                status: 'error',
                message: 'invalid token'
            })
        }

        return res.json({
            status: 'success',
            token
        })    
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: error.message
        })
    }
    
}