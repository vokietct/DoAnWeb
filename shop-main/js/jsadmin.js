var btnopen = document.querySelector('.button-sua-ngoai')
var modal = document.querySelector('.all-sua')
var btnclose = document.querySelector('.button-sua-trong')

function suaproduct(e){
    modal.classList.toggle('hide');
}
btnopen.addEventListener('click',suaproduct)
btnclose.addEventListener('click',suaproduct)
modal.addEventListener('click', function(e){
    if(e.target == e.currentTarget){
        suaproduct()
    }
})

function XacNhanDonHang(obj){
    var st = document.getElementById(obj.id+"st");
    var btn = document.getElementById(obj.id);
    if(btn.checked == true){
        st.innerHTML = "Đã xác nhận";
    }
}