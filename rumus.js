function hitungBalok(){

    //balok

    var p;
    p = parseInt(document.getElementById('panjang').value);
    var l;
    l = parseInt(document.getElementById('lebar').value);
    var t;
    t = parseInt(document.getElementById('tinggi').value);

    var hitunganBalok = p * l * t;

    var show = hitunganBalok;

    document.getElementById('hasilStringBalok').innerHTML = show;

}

function hitungKubus(){
     //kubus

     var sisi = parseInt(document.getElementById('sisi').value);

     var hitunganKubus = sisi * sisi * sisi * sisi;
     var hasilKubus = hitunganKubus;
 
     document.getElementById('hasilStringKubus').innerHTML = hasilKubus;
}

function hitungKerucut(){
    var r = parseInt(document.getElementById('jari').value);

    var hitunganKerucut = 1/3 * 3.14 * r * r;
    var hasilKerucut = parseInt(hitunganKerucut);

    document.getElementById('hasilStringKerucut').innerHTML = hasilKerucut;
}