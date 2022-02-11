import express from "express"
import multer from "multer"
import path from "path"
import fs from "fs"
import AppDB from "../db/index.js"

const VRouter = express.Router()
const uploader =  multer({dest: "temp/"})

VRouter.post('/upload', uploader.any(), (req, res) => {
    const file = req.files[0]
    const fileName = file.filename
    console.log(file)

    const vFolder = path.resolve('front/videos')
    const vFile = vFolder+'/'+fileName+'.mp4'
    fs.renameSync(file.path, vFile)

    const link = 'http://localhost:3000/videos/'+fileName+'.mp4'
    console.log(link)

    res.send(link)
})

VRouter.post('/save', async(req, res) => {
    const data = req.body
    // console.log(data)
    const values = [
        data.title, 
        data.description, 
        data.slug, 
        data.theme.text_color,
        data.type,
        data.theme.bg_color,
        data.theme.video_position,
        data.show_popup,
        data.popup_time,
        data.link,
        data.user,
    ]

    const db = new AppDB
    const saveVideo = await db.createVideo(values).then(resp => resp).catch(err => err)
    db.close()

    console.log(saveVideo)
    res.send(saveVideo)
})

VRouter.get('/get/:slug', async (req, res) => {
    const slug = req.params.slug
    console.log('getting video for... ', slug)
    const db = new AppDB
    const video = await db.getItem('videos', slug).then(resp => resp).catch(err => err)

    res.send(video)

})

export default VRouter