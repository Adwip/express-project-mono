const controller = {}

controller.cart = function(req, res){
    res.render('User/cart')
}

controller.process_order = function(req, res){
    res.render('User/process-order')
}

controller.histori_pesanan = function(req, res){
    res.render('User/histori-pesanan')
}

controller.detail_pesanan = function(req, res){
    res.render('User/detail-pesanan')
}

module.exports = controller