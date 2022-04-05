const controller = {
    index: function(req, res){
        res.render('index')
    },
    info_produk: function(req, res){
        res.render('info-produk')
    }
}

module.exports = controller