const mssql = require('mssql');
const config = require('../config/config')

async function borrowBook(req,res){
    let{product_id}=req.params;
    let sql=await mssql.connect(config)
    console.log(sql.connected);
}




module.exports = {borrowBook }