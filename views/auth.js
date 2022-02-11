import express from "express"

const AuthRouter = express.Router()
import AppDB from '../db/index.js'

AuthRouter.post('/user', async (req, res) => {
    const data = req.body
    const db = new AppDB()
    
    let action
    if (data.type === 'login'){
        action = db.getItem('users', data.email)
    } else if (data.type === 'register') {
        action = db.createUser([data.name, data.email, data.password])
    }

    let resp = await action.then(resp => resp).catch(err => err)
    db.close()

    console.log(resp)
    res.send(resp)
})

export default AuthRouter