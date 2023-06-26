const userRoutes=require('express').Router()
const{postUser,loginUser}=require('../controllers/userControllers')
const newUserMiddleware=require('../newUserMiddleware')

const sendMail=require("../utils/sendMail")


userRoutes.post('/',newUserMiddleware,postUser)
userRoutes.post('/login',loginUser)
userRoutes.post('/sendmail',(req,res)=>{
    sendMail()
    res.send("I have sent a mail check at the console")

})

module.exports=userRoutes

