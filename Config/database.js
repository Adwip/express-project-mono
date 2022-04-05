const mysql = require('mysql')
var bumdessdb = mysql.createConnection({host:'127.0.0.1',user:'root',password:'',database:'bumdessdb'})

var test = {}
var config = {}

config.isi = function (par) {
    return par
}

config.fetch_data = function(param){
    var result = null
    bumdessdb.connect(()=>{
        bumdessdb.query(param,(err, result, fields)=>{
            if (err) {
                // return {'status':false, err}
                // console.log(err, result, fields)
                // return '[err, result, fields]'
                result = [err, result, fields]
            }else{
                // return {'status':true, result}
                // console.log(err, result, fields)
                // return '[err, result, fields]'
                result = [err, result, fields]
            }
        })
    })
    // return result
    console.log(result)
    // bumdessdb.end()
}

// config.bumdessdb = function(query){
//     koneksi['1'].connect(()=>{
//         koneksi['1'].query(query,(err, result, fields)=>{
//             return {err, result, fields}
//         })
//     })
// }

// module.exports = koneksi
module.exports = config