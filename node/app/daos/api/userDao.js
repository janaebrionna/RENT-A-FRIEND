const con = require('../../config/dbconfig')

const userDao= {
    table: 'user',

    sort: (req, res)=> {
        con.execute(
            `SELECT * FROM user ORDER by lName, fName;`,
            (error, rows)=> {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else{
                        res.json(rows)
                    }
                } else{
                    console.log('DAO ERROR: ', error)
                }
            }
        )
    }
}
    
module.exports = userDao
