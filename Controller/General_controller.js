const Produk_model = require('../Model/Produk_model')
const db = require('../Config/database')
const controller = {}

controller.index = function(req, res){
    res.render('index')
}

controller.favorit = function(req, res){
    res.render('favorit')
}

controller.sekitar = function(req, res){
    res.render('sekitar')
}

controller.seller_info = function(req, res){
    res.render('info-penjual')
}

controller.cari = function (req, res){
    res.render('pencarian')
}

controller.login = function(req, res){
    res.render('login')
}

controller.test_model = function(req, res){
    // var result = Produk_model.dari_model
    // var result = Produk_model.getSemuaData()
    // var result = Produk_model.getSemuaProduk()
    // var result = db.bumdessdb('SELECT * FROM `admin`')
    var result = Produk_model.getAllData('SELECT * FROM `admin`')
    // var result = db.fetch_data('SELECT * FROM `admin`')
    res.send(result)
    // res.render('login')
    // res.render('login')
}

module.exports = controller