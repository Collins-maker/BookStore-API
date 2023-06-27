const config = require("../config/config");
const mssql = require("mssql")

async function getaUser(Email) {
    // new 
    const sql = await mssql.connect(config)
    const request = sql.request()
    request.input('Email', mssql.VarChar, Email)
    const query = 'SELECT * FROM library.Members WHERE Email=@Email'
    const result = await request.query(query)

    if (result.recordset.length === 0) {
        return res.status(401).json({ message: 'Invalid credentials' })

    }

    const user = result.recordset[0]
    return user
}
module.exports = getaUser