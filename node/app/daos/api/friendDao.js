const con = require('../../config/dbconfig')

const friendDao= {
    table: 'friend',
    sort: (req, res)=> {
        con.execute(
            `SELECT * FROM friend ORDER by friend;`,
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


module.exports = friendDao