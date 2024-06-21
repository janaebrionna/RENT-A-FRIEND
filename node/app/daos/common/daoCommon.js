const con = require('../../config/dbconfig')

const daoCommon = {
    findAll: (res, table)=> {
        con.execute(
            `SELECT * FROM ${table};`,
            (error,rows)=> {
                if (!error){
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else{
                        res.json(rows)
                    }
                    } else{
                        console.log('DAO ERROR:', error)
                    }
                    
                }
        )
    },

    findById: (res, table, id)=> {
        con.execute(
            `SELECT * FROM  ${table} where ${table}_id = ${id};`,
            (error,rows)=> {
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
    },

    countAll: (req,res, table)=> {

        con.execute(
            `SELECT COUNT(*) FROM ${table};`,
            (error,rows)=> {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    }else {
                        res.json(rows)
                    }
                } else {
                    console.log('DAO ERROR: ', error)
                }
            }
        )
    },

    create: (req, res, table)=> {
        if (object.keys(req.body).length ===0){
            res.json({
                "error":true,
                "message":"no fields to create"
            })
        }else{
            const fields = object.keys(req.body)
            const values = object.values(req.body)

            con.execute(
                `INSERT INTO ${table}
                SET ${fields.join(' = ?, ')} = ?;`,
                values,
                (error,dbres)=> {
                    if (!error) {
                        res.send(`Last id: ${dbres.insertId}`)
                    }else {
                        console.log('DAO ERROR: ',error)
                        res.send('Error creating record')
                    }
                }
            )
        }
    },
    
    update: (req,res,table)=> {

        if (isNaN(req.params.id)) {
            res.json({
                "error": true,
                "message":"Id must be a number"
            })
        }else if (object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message":"no fields to update"
            })
        }else {
            const fields = object.keys(req.body)
            const values = object.values(req.body)

            con.execute(
                `UPDATE ${table}
                SET ${fields.join(' = ?, ')} = ?
                WHERE ${table}_id = ?;`,
                [...values,req.params.id],
                (error,dbres)=> {
                    if (!error) {
                        res.send(`changed ${dbres.changedRows} row(s)`)
                    }else {
                        console.log('DAO ERROR: ', error)
                        res.send('Error creating user')
                    }
                }
            )
        }
    }
}
module.exports = daoCommon