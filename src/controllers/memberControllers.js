const mssql = require('mssql');
const config = require('../config/config');





//Get all members
async function getAllMembers(req, res) {
    let sql = await mssql.connect(config);
    if (sql.connected) {
        let results = await sql.query(`SELECT * from library.Members`);
        let Members = results.recordset;
        res.json({
            success: true,
            message: "fetched Members successfully",
            results: Members
        })
    } else {
        res.status(500).send("Internal server error")
    }


}

//Get Member By ID

async function getMemberById(req, res) {

    let { MemberID } = req.params;

    let sql = await mssql.connect(config);
    if (sql.connected) {
        let results = await sql.query(`SELECT * from library.Members WHERE MemberID=${Number(MemberID)}`)

        let Member = results.recordset[0]

        res.json({
            success: true,
            message: 'fetched Member successfully',
            results: Member
        });
    }

}



module.exports = { getAllMembers, getMemberById, memberlogin }