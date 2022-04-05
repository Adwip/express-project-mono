var masuk = function(){
    var blok_layar = document.createElement('div'); //menutup/blok seluruh layar
    var boks_body = document.createElement('div'); //sebagai tempat memuat element seluruh form, dll
    var boks_login_reg = document.createElement('div'); //sebagai lokasi form login/registrasi
    var header = document.createElement('div'); //sebagai tempat logo "Hubungin.com"
    var submit_login_button = document.createElement('button'); //tombol submit login
    var submit_reg_button = document.createElement('button'); //tombol submit registrasi baru
    var cancel_button = document.createElement('button'); //tombol batal/cancel
    var boks_login =  document.createElement('div');
    var boks_reg =  document.createElement('div');
    var form_login = document.createElement('form'); //form untuk login
    var form_reg = document.createElement('form'); //form untuk registrasi
    var input_pass = document.createElement('input'); //form untuk registrasi
    var input_email = document.createElement('input'); //form untuk registrasi
    var button_reg_google = document.createElement('button'); //form untuk registrasi akun google


    blok_layar.classList.add('blok_layar'); //menambah class blok_layar ke elemen blok_layar
    boks_body.classList.add('boks_body'); //menambah class boks_body ke elemen seluruh form
    header.classList.add('header_form_login'); //menambah class boks_body ke elemen seluruh form
    boks_login_reg.classList.add('boks_login_reg');
    boks_login.classList.add('boks_login');
    boks_reg.classList.add('boks_reg');
    
    blok_layar.appendChild(boks_body) //masukkan elemen boks body ke blok layar
    boks_body.appendChild(header) //masukkan header ke boks body
    boks_body.appendChild(boks_login_reg) //masukkan elemen tempat form & reg ke boks body
    boks_login_reg.appendChild(boks_login) //masukkan form login ke boks body
    boks_login_reg.appendChild(boks_reg)
    // boks_login.appendChild(form_login)
    // boks_reg.appendChild(form_reg)
    form_login.appendChild(input_email)
    form_login.appendChild(input_pass)
    form_login.appendChild(submit_login_button)
    form_reg.appendChild(input_email)
    form_reg.appendChild(submit_reg_button)
    // boks_login.appendChild(header)
    // boks_login.appendChild(boks_body)

    // document.body.appendChild(blok_layar)
    $('body').prepend(blok_layar)
}

$(document).ready(function(){
    // masuk()    
})