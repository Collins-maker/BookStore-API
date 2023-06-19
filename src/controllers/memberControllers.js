const mssql = require('mssql');
const config = require('../config/config')


async function getAllMembers(req, res){
    let sql = await mssql.connect(config);
    if(sql.connected){
        let results = await sql.request().execute("getAllMembers");
        let Members = results.recordset;
        res.json({
            success: true,
            message: "Members fetched successfully",
            results: Members
        })
    }else{
        res.status(500).send("Internal server error")
    }


}

//function to get member by thier IDs
async function getMemberById(req, res) {
    let { MemberID } = req.params;
  
    try {
      let sql = await mssql.connect(config);
      if (sql.connected) {
        let results = await sql
          .request()
          .input('MemberID', mssql.Int, MemberID) // Pass the MemberID as input parameter
          .execute('getMemberById');
  
        let Member = results.recordset[0];
  
        res.json({
          success: true,
          message: 'Member fetched successfully',
          results: Member,
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'An error occurred while fetching the member',
        error: error.message,
      });
    }
  }
  



module.exports = {getAllMembers, getMemberById  }