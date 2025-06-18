// TUGAS 1 ==================================
console.log("=== TUGAS 1 ===")
var sentence = "Saya Sangat Senang Sekali Belajar Programming dan Saya Juga Senang Belajar Javascript";

if(sentence.length<10){
  console.log("Pendek")
}else if(sentence.length>30){
  console.log("Panjang")
}else{
  console.log("Sedang")
}

// TUGAS 2 ==================================
console.log("=== TUGAS 2 ===")
var nilai;
nilai = 75;

if(nilai<50){
  console.log("E");
}else if(nilai<60){
  console.log("D");
}else if(nilai<70){
  console.log("C");
}else if(nilai<80){
  console.log("B");
}else{
  console.log("A");
}

// TUGAS 3 ==================================
console.log("=== TUGAS 3 ===")
var tanggal = 3;
var bulan = 10;
var tahun = 1988;
var bulanConvert;

switch(bulan){
  case 1:
    bulanConvert = "Januari";
    break;
  case 2:
    bulanConvert = "Februari";
    break;
  case 3:
    bulanConvert = "Maret";
    break;
  case 4:
    bulanConvert = "April";
    break;
  case 5:
    bulanConvert = "Mei";
    break;
  case 6:
    bulanConvert = "Juni";
    break;
  case 7:
    bulanConvert = "Juli";
    break;
  case 8:
    bulanConvert = "Agustus";
    break;
  case 9:
    bulanConvert = "September";
    break;
  case 10:
    bulanConvert = "Oktober";
    break;
  case 11:
    bulanConvert = "November";
    break;
  case 12:
    bulanConvert = "Desember";
    break;
  default:
    bulanConvert = "Bulan Tidak Ditemukan";
}

console.log(tanggal + " " + bulanConvert + " " + tahun)