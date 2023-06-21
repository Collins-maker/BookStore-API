const mssql = require('mssql');
const config = require('../config/config')

//Function to create a new member
async function createMember(req, res) {
    let sql = await mssql.connect(config);
    if (sql.connected) {
        const { Name, Address, ContactNumber } = req.body;
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
    if (sql.connected) {
        let results = await sql.request().execute("getAllMembers");
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


//Get Member By ID

async function getMemberById(req, res) {

    let { MemberID } = req.params;

    let sql = await mssql.connect(config);
    if (sql.connected) {
        let results = await sql.query(`SELECT * from library.Members WHERE MemberID=${Number(MemberID)}`)

        let Member = results.recordset[0]

        // console.log("Here is the Member");

        //function to get member by their IDs
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



    }

    module.exports = { getAllMembers, getMemberById, memberlogin }

    // module.exports = { getAllMembers, getMemberById, createMember }