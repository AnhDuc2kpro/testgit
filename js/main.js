
var ao_so_mi = document.getElementById('ao-so-mi');
var content_ao_so_mi = '<div class="row">';

var ao = document.getElementById('ao');
var content_ao = '<div class="row">';

var tui = document.getElementById('tui');
var content_tui = '<div class="row">';

var trang_phuc = document.getElementById('trang-phuc');
var content_trang_phuc = '<div class="row">';

var phu_kien = document.getElementById('phu-kien');
var content_phu_kien = '<div class="row">';

var tat_ca = document.getElementById('tat-ca');
var content_tat_ca = '<div class="row">';


data_thoi_trang.map((value, index)=>{
    if (value.category == 'ao-so-mi'){
        content_ao_so_mi += '<div class="col-4"> <div class="box"> <div class="box-img"> <img class="w-100" src="'+value.img+'" alt="img-2"> <div class="sub">'+value.saleOf+'</div> </div> <div class="box-text"> <div class="name">'+value.name+'</div> <div class="price">'+value.price+' <span>'+value.priceOld+'</span> </div> </div> </div> </div>'
    }
    if (value.category == 'ao'){
        content_ao += '<div class="col-4"> <div class="box"> <div class="box-img"> <img class="w-100" src="'+value.img+'" alt="img-2"> <div class="sub">'+value.saleOf+'</div> </div> <div class="box-text"> <div class="name">'+value.name+'</div> <div class="price">'+value.price+' <span>'+value.priceOld+'</span> </div> </div> </div> </div>'
    }
    if (value.category == 'tui'){
        content_tui += '<div class="col-4"> <div class="box"> <div class="box-img"> <img class="w-100" src="'+value.img+'" alt="img-2"> <div class="sub">'+value.saleOf+'</div> </div> <div class="box-text"> <div class="name">'+value.name+'</div> <div class="price">'+value.price+' <span>'+value.priceOld+'</span> </div> </div> </div> </div>'
    }
    if (value.category == 'trang-phuc'){
        content_trang_phuc += '<div class="col-4"> <div class="box"> <div class="box-img"> <img class="w-100" src="'+value.img+'" alt="img-2"> <div class="sub">'+value.saleOf+'</div> </div> <div class="box-text"> <div class="name">'+value.name+'</div> <div class="price">'+value.price+' <span>'+value.priceOld+'</span> </div> </div> </div> </div>'
    }
    if (value.category == 'phu-kien'){
        content_phu_kien += '<div class="col-4"> <div class="box"> <div class="box-img"> <img class="w-100" src="'+value.img+'" alt="img-2"> <div class="sub">'+value.saleOf+'</div> </div> <div class="box-text"> <div class="name">'+value.name+'</div> <div class="price">'+value.price+' <span>'+value.priceOld+'</span> </div> </div> </div> </div>'
    }
    
    content_tat_ca += '<div class="col-4"> <div class="box"> <div class="box-img"> <img class="w-100" src="'+value.img+'" alt="img-2"> <div class="sub">'+value.saleOf+'</div> </div> <div class="box-text"> <div class="name">'+value.name+'</div> <div class="price">'+value.price+' <span>'+value.priceOld+'</span> </div> </div> </div> </div>'
    
})

content_ao_so_mi += '</div>';
content_ao += '</div>';
content_tui += '</div>';
content_trang_phuc += '</div>';
content_phu_kien += '</div>';
content_tat_ca += '</div>';

ao_so_mi.innerHTML = content_ao_so_mi;
ao.innerHTML = content_ao;
tui.innerHTML = content_tui;
trang_phuc.innerHTML = content_trang_phuc;
phu_kien.innerHTML = content_phu_kien;
tat_ca.innerHTML = content_tat_ca;





var kem_duong_am = document.getElementById('kem-duong-am');
var content_kem_duong_am = '<div class="row">';

var son_moi = document.getElementById('son-moi');
var content_son_moi = '<div class="row">';

var son_mong_tay = document.getElementById('son-mong-tay');
var content_son_mong_tay = '<div class="row">';

var trang_diem = document.getElementById('trang-diem');
var content_trang_diem = '<div class="row">';

var duong_toc = document.getElementById('duong-toc');
var content_duong_toc = '<div class="row">';

var tat_ca_my_pham = document.getElementById('tat-ca-my-pham');
var content_tat_ca_my_pham = '<div class="row">';

data_my_pham.map((value, index)=>{
    if (value.category == 'kem-duong-am'){
        content_kem_duong_am += '<div class="col-4"> <div class="box"> <div class="box-img"> <img class="w-100" src="'+value.img+'" alt="img-2"> <div class="sub">'+value.saleOf+'</div> </div> <div class="box-text"> <div class="name">'+value.name+'</div> <div class="price">'+value.price+' <span>'+value.priceOld+'</span> </div> </div> </div> </div>'
    }
    if (value.category == 'son-moi'){
        content_son_moi += '<div class="col-4"> <div class="box"> <div class="box-img"> <img class="w-100" src="'+value.img+'" alt="img-2"> <div class="sub">'+value.saleOf+'</div> </div> <div class="box-text"> <div class="name">'+value.name+'</div> <div class="price">'+value.price+' <span>'+value.priceOld+'</span> </div> </div> </div> </div>'
    }
    if (value.category == 'son-mong-tay'){
        content_son_mong_tay += '<div class="col-4"> <div class="box"> <div class="box-img"> <img class="w-100" src="'+value.img+'" alt="img-2"> <div class="sub">'+value.saleOf+'</div> </div> <div class="box-text"> <div class="name">'+value.name+'</div> <div class="price">'+value.price+' <span>'+value.priceOld+'</span> </div> </div> </div> </div>'
    }
    if (value.category == 'trang-diem'){
        content_trang_diem += '<div class="col-4"> <div class="box"> <div class="box-img"> <img class="w-100" src="'+value.img+'" alt="img-2"> <div class="sub">'+value.saleOf+'</div> </div> <div class="box-text"> <div class="name">'+value.name+'</div> <div class="price">'+value.price+' <span>'+value.priceOld+'</span> </div> </div> </div> </div>'
    }
    if (value.category == 'duong-toc'){
        content_duong_toc += '<div class="col-4"> <div class="box"> <div class="box-img"> <img class="w-100" src="'+value.img+'" alt="img-2"> <div class="sub">'+value.saleOf+'</div> </div> <div class="box-text"> <div class="name">'+value.name+'</div> <div class="price">'+value.price+' <span>'+value.priceOld+'</span> </div> </div> </div> </div>'
    }
    
    content_tat_ca_my_pham += '<div class="col-4"> <div class="box"> <div class="box-img"> <img class="w-100" src="'+value.img+'" alt="img-2"> <div class="sub">'+value.saleOf+'</div> </div> <div class="box-text"> <div class="name">'+value.name+'</div> <div class="price">'+value.price+' <span>'+value.priceOld+'</span> </div> </div> </div> </div>'
    
})

content_kem_duong_am += '</div>';
content_son_moi += '</div>';
content_son_mong_tay += '</div>';
content_trang_diem += '</div>';
content_duong_toc += '</div>';
content_tat_ca_my_pham += '</div>';

kem_duong_am.innerHTML = content_kem_duong_am;
son_moi.innerHTML = content_son_moi;
son_mong_tay.innerHTML = content_son_mong_tay;
trang_diem.innerHTML = content_trang_diem;
duong_toc.innerHTML = content_duong_toc;
tat_ca_my_pham.innerHTML = content_tat_ca_my_pham;