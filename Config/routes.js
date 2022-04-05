const express = require('express')
const router = express.Router()
const produk_control = require('../Controller/Produk_controller')
const general_control = require('../Controller/General_controller')
const store_control = require('../Controller/Store_controller')
const user_control = require('../Controller/User_controller')

//Publik
router.get('/',general_control.index)
router.get('/info-produk',produk_control.info_produk)
router.get('/cart',user_control.cart) //keranjang
router.get('/seller-info',general_control.seller_info)
router.get('/cari',general_control.cari)
router.get('/sekitar',general_control.sekitar)
router.get('/login',general_control.login)

//User
router.get('/konfirmasi-belanja')
router.get('/histori-pesanan', user_control.histori_pesanan)
router.get('/detail-pesanan',user_control.detail_pesanan)
router.get('/proses-konfirmasi')
router.get('/wishlist')
router.get('/favorit',general_control.favorit)
router.get('/process-order',user_control.process_order)

//Mitra
router.get('/dashboard',store_control.dashboard)
router.get('/daftar-produk',store_control.produk)
router.get('/pesanan')
router.get('/review')
router.get('/account')

router.get('/test-model',general_control.test_model)
module.exports = router