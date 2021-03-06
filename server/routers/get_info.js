let userModel = require('../schemas/user')
let express = require('express')
let {authenticateToken} = require('../middleware/JWT/auth')
let {CustomError} = require('../utils/errorHandlers/custom_error')

let router = express.Router()

router.post('/get', authenticateToken, async (req,res) =>{
    try{
        res.send(req.user.email)
    }catch(err){
        res.send(new CustomError("custom","error getting info", 401))
    }
})

module.exports = router