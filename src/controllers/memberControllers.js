const mssql = require('mssql');
<<<<<<< HEAD
const config = require('../config/config');

=======
const config = require('../config/config')
>>>>>>> 0cae998a73107efbf0e1f8f528075e5bf87e994f

//Function to create a new member
async function createMember(req, res) {
  let sql = await mssql.connect(config);
  if (sql.connected) {
      const { Name,Address,ContactNumber } = req.body;
      let request = sql
          .request()
          .input("Name", Name)
          .input("Address", Address)
          .input("ContactNumber", ContactNumber);
      let result = await request.execute('InsertMember');
      res.json({
          success: true,
          message: "Member added successfully",
          data: result.recordset,
      });
  }
}




//Get all members
async function getAllMembers(req, res) {
    let sql = await mssql.connect(config);
<<<<<<< HEAD
    if (sql.connected) {
        let results = await sql.query(`SELECT * from library.Members`);
=======
    if(sql.connected){
        let results = await sql.request().execute("getAllMembers");
>>>>>>> 0cae998a73107efbf0e1f8f528075e5bf87e994f
        let Members = results.recordset;
        res.json({
            success: true,
            message: "Members fetched successfully",
            results: Members
        })
    } else {
        res.status(500).send("Internal server error")
    }


}

<<<<<<< HEAD
<<<<<<< HEAD
//Get Member By ID

async function getMemberById(req, res) {

    let { MemberID } = req.params;

    let sql = await mssql.connect(config);
    if (sql.connected) {
        let results = await sql.query(`SELECT * from library.Members WHERE MemberID=${Number(MemberID)}`)

        let Member = results.recordset[0]
=======
async function getMemberById(req, res) {
    let { MemberID } = req.params;
>>>>>>> 0cae998a73107efbf0e1f8f528075e5bf87e994f

    // console.log("Here is the Member");
=======
//function to get member by thier IDs
async function getMemberById(req, res) {
    let { MemberID } = req.params;
>>>>>>> 6078b06beab3047918b67ce3261c800e27fdf16b
  
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
  



<<<<<<< HEAD
module.exports = { getAllMembers, getMemberById, memberlogin }
=======
module.exports = {getAllMembers, getMemberById,createMember  }
>>>>>>> 6078b06beab3047918b67ce3261c800e27fdf16b
