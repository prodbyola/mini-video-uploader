import express from "express"
import cors from 'cors'
import serveStatic from "serve-static"

import AppDB from './db/index.js'
import AuthRouter from './views/auth.js'
import VRouter from './views/video.js'

const app = express()
const port = 3000

app.use(serveStatic('./front'))

app.use(cors())
app.use(express.json())
app.use('/auth', AuthRouter)
app.use('/video', VRouter)

app.listen(port, 'localhost', () => {
    console.log('Listening on port', port)

    const dbConnect = new AppDB()
    const userCols = ['name TEXT', 'email TEXT UNIQUE', 'password TEXT']
    const videoCols = [
        'title TEXT', 
        'description TEXT', 
        'slug TEXT UNIQUE', 
        'color TEXT', 
        'type TEXT',
        'bg_color TEXT',
        'vpos TEXT',
        'show_pop INTEGER',
        'ptime INTEGER',
        'link TEXT',
        'user TEXT'
    ]
    
    dbConnect.createTable('users', userCols)
    dbConnect.createTable('videos', videoCols)
    dbConnect.close()
})