import sqlite3  from "sqlite3";
import path, { resolve } from "path";

const sql = sqlite3.verbose()

class AppDB {
    constructor(){
        this.dbPath = path.resolve('db/server.db')
        this.db = new sql.Database(this.dbPath, (err) => {
            if(err) console.log(err.message)
        })
    }

    run(query, params){
        console.log(query)
        this.db.run(query, params, (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log("query completed")
            }
        })
    }

    createTable(table, cols=[]) {
        let columns = cols.join(', ')
        const sql = `CREATE TABLE IF NOT EXISTS ${table} (${columns})`
        
        this.db.serialize(() => {
            this.db.run(sql)
        })
        
        console.info(`Created ${table} table in database in ${this.dbPath}`)
    }

    errorName(err){
        return err.message.split(':')[0]
    }
    
    createUser(values){
        const sql = `INSERT INTO users VALUES(?, ?, ?)`

        return new Promise((resolve, reject) => {
            let saveUser = {status: true}
            this.db.serialize(() => {
                this.db.run(sql, values, err => {
                    if(err){
                        saveUser = this.errorName(err)
                        reject(saveUser)
                    } else {
                        resolve(saveUser)
                    }
                })
            })
        })
    }

    getItem(table, key) {
        let primary = 'email', cols = ['name', 'email']
        cols = cols.join(', ')
        if (table === 'videos') primary = 'slug', cols = '*'
        let sql = `SELECT ${cols}
           FROM ${table}
           WHERE ${primary}  = ?`;
        
        return new Promise((resolve, reject) => {
            this.db.get(sql, [key], (err, row) => {
                if (err) {
                    reject(err)
                } else if (row) {
                    resolve({
                        status: true,
                        ...row
                    })
                } else {
                    resolve('NOT_EXISTING')
                }
            })
        })
    }

    createVideo(values){
        const sql = `INSERT INTO videos VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`

        return new Promise((resolve, reject) => {
            let saveUser = {status: true}
            this.db.serialize(() => {
                this.db.run(sql, values, err => {
                    if(err){
                        console.log(err)
                        saveUser = this.errorName(err)
                        reject(saveUser)
                    } else {
                        resolve(saveUser)
                    }
                })
            })
        })
    }

    close() {
        this.db.close((err) => {
            if (err) console.info(err.message)
        })
    }
}

export default AppDB