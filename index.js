const express = require('express')
const app = express()
const body_parser = require('body-parser')
const PORT = process.env.PORT || 1000;
const router = require('./Config/routes')
const waktu = new Date()
const jam = waktu.getHours()
const menit = waktu.getMinutes()

app.set('views', './Views')
app.set('view engine','ejs')

app.use('/static', express.static('assets'))

app.use(router)
app.use(body_parser.json())
app.use(body_parser.urlencoded({extended:true}))


app.listen(PORT,function(){
    // console.log(`Server development berjalan pada port ${PORT} pukul ${jam}:${menit} dengan alamat 127.0.0.1:${PORT}`)
    console.log(`Server development berjalan di alamat 127.0.0.1:${PORT} pada jam ${jam}:${menit}`)
}) 

// E:\AA Personal\Old File\Proyek e-commerce\Hubing_com_exp\index.js