const bcrypt=require('bcrypt')
const mssql=require('mssql')
const jwt=require('jsonwebtoken')
const { user } = require('../config/config')
const config=require('../config/config')
require('dotenv').config()

const getaUser=require('../utils/getUser')
const {tokenGenerator}=require('../utils/token')

// register // signup

async function register(req,res){
    try{
        const{email,password}=req.body
        if(!email){
            return res.status(400).json({message:'Email is required'})
        }
        if(!password){
            return res.status(400).json({message:'Password required'})
        }
    

        const hashedPassword=await bcrypt.hash(password,8)
        const pool=await mssql.connect(config)

        const query=`INSERT INTO library.users(email,password) VALUES (@email, @password)`
        const request=pool.request()

        request.input('email',mssql.VarChar,email);
        request.input('password',mssql.VarChar,hashedPassword)

        await request.query(query)
        await pool.close()

        res.status(200).json({message:'User registered Succesfully'})

    }catch(error){
        console.error('Error in registering: ',error);
        res.status(500).json({message:'Internal server error'})
    }
}

// user login 
async function login(req,res){
    const{email,password}=req.body
    try {   
        let user=await getaUser(email)
        const passwordMatch=await bcrypt.compare(password,user.password)

        if(!passwordMatch){
            
            return res.status(401).json({success:false,message:'Invalid credentials'})

        }else{
            let token=await tokenGenerator({
                userId:user.id,
                email:user.email 
            })
            console.log("our token",token);
            res.json({success:true,message:"logged in succesfully",token})

        }
    } catch (error) {
        console.error('Error during login :', error)
        res.status(500).json({message:'Internal server error'})
        
    }

}

module.exports={register,login}