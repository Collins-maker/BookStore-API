const config = require("../config/config");
const mssql = require("mssql")

async function getaUser(email) {
    // new 
    const sql = await mssql.connect(config)
    const request = sql.request()
    request.input('email', mssql.VarChar, email)
    const query = 'SELECT * FROM library.Members WHERE email=@email'
    const result = await request.query(query)

    if (result.recordset.length === 0) {
        return res.status(401).json({ message: 'Invalid credentials' })

    }

    const user = result.recordset[0]
    return user
}
module.exports = getaUser