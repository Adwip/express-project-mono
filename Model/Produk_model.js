const mysql = require('mysql')
var bumdessdb = mysql.createConnection({host:'127.0.0.1',user:'root',password:'',database:'bumdessdb'})
var model = {}

model.getAllData = function(){
    bumdessdb.connect(()=>{
        bumdessdb.query('SELECT * FROM `admin`',(err, result, fields)=>{
            console.log(err, result, fields)
        })
    })
}


module.exports = model