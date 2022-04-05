const controller = {}

controller.dashboard = function(req, res){
    res.render('Store/dashboard')
}

controller.produk = function(req, res){
    res.render('Store/produk')
}
/*{
    dashboard: function(req, res){
        res.render('Store/dashboard')
    },
    daftar_produk: function(req, res){
        res.render('')
    },
    pesanan: function(req, res){
        res.render('')
    },
    review: function(req, res){
        res.render('')
    },
    account: function(req, res){
        res.render('')
    },
}*/

module.exports = controller