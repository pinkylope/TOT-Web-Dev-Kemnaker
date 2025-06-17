//TUGAS OKTI NINDYATI

//TUGAS 1 ================================================
var perkenalan = 'Nama saya adalah';
var nama = "Okti" // isi dengan nama kalian
var kata1 = "saya"
var kata2 = "berharap"
var kata3 = "untuk"
var kata4 = "menjadi"
var kata5 = "seorang"
var kata6 = "software"
var kata7 = "engineer"

var hasil = perkenalan.concat(" ",nama," ",kata1," ",kata2," ",kata3," ",kata4," ",kata5," ",kata6," ",kata7)
console.log(hasil)

//TUGAS 2 ================================================
var abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var angka = "0123456789"

// 1. password1 = "TES123"
var password1 = abjad[19] + abjad[4] + abjad[18] + abjad[19] + angka[1] + angka[2] + angka[3]
console.log("password ke satu: " + password1)

// 2. password2 = "B3B3K"
var password2 = abjad[1] + angka[3] + abjad[1] + angka[3] + abjad[10]
console.log("password ke dua: "+ password2 )

// 3. password3 = "R4H4514"
var password3 = abjad[17] + angka[4] + abjad[7] + angka[4] + angka[5] + angka[1] + angka[4]
console.log("password ke tiga: " + password3)

//TUGAS 3 ================================================
var sentence2 = 'wow JavaScript is so cool';

var exampleFirstWord2 = sentence2.substring(0, 3);
var secondWord2 = sentence2.substring(4, 14); // do your own!
var thirdWord2 = sentence2.substring(15, 17); // do your own!
var fourthWord2 = sentence2.substring(18, 20); // do your own!
var fifthWord2 = sentence2.substring(21, 25); // do your own!

console.log('First Word: ' + exampleFirstWord2);
console.log('Second Word: ' + secondWord2);
console.log('Third Word: ' + thirdWord2);
console.log('Fourth Word: ' + fourthWord2);
console.log('Fifth Word: ' + fifthWord2);

//TUGAS 4 ================================================
var sentence3 = 'wow JavaScript is so cool';

var exampleFirstWord3 = sentence3.substring(0, 3);
var secondWord3 = sentence3.substring(4, 14); // do your own!
var thirdWord3 = sentence3.substring(15, 17); // do your own!
var fourthWord3 = sentence3.substring(18, 20); // do your own!
var fifthWord3 = sentence3.substring(21, 25); // do your own!

var firstWordLength = exampleFirstWord3.length
var secondWordLength = secondWord3.length
var thirdWordLength = thirdWord3.length
var fourthWordLength = fourthWord3.length
var fifthWordLength = fifthWord3.length

// lanjutkan buat variable lagi di bawah ini
console.log('First Word: ' + exampleFirstWord3 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord3 + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord3 + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord3 + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord3 + ', with length: ' + fifthWordLength);

//TUGAS 5 ================================================
var abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// 1. password pertama : HELLO
var kode1 = abjad.indexOf("H") + "-" + abjad.indexOf("E") + "-" + abjad.indexOf("L") + "-" + abjad.indexOf("L") + "-" + abjad.indexOf("O")
console.log("kode 1: " + kode1)

// 2. password kedua : WORLD
var kode2 = abjad.indexOf("W") + "-" + abjad.indexOf("O") + "-" + abjad.indexOf("R") + "-" + abjad.indexOf("L") + "-" + abjad.indexOf("D")
console.log("kode 2: " + kode2)

// 3. password ketiga : IMREADY
var kode3  = abjad.indexOf("I") + "-" + abjad.indexOf("M") + "-" + abjad.indexOf("R") + "-" + abjad.indexOf("E") + "-" + abjad.indexOf("A") + "-" + abjad.indexOf("D") + "-" + abjad.indexOf("Y")
console.log("kode 1: " + kode3)

//TUGAS 6 ================================================
var pertama = "saya"
var kedua = "senang"
var ketiga = "belajar"
var keempat = "javascript"

var pertama = (pertama[0].toUpperCase()) + (pertama.substring(1));
var kedua = (kedua[0].toUpperCase()) + (kedua.substring(1,((kedua.length)-1))) + (kedua[5].toUpperCase());
var ketiga = (ketiga[0].toUpperCase()) + (ketiga.substring(1,((ketiga.length)-1))) + (ketiga[6].toUpperCase());
var keempat = keempat.toUpperCase();


//Saya SenanG BelajaR JAVASCRIPT
var hasil = pertama.concat(" ",kedua," ",ketiga," ",keempat)
console.log(hasil)

//TUGAS 7 ================================================
var panjang= "12";
var lebar = "7";
var alas = "6";
var tinggi = "13";
//ubahlah variabel diatas ke integer dan lakukan perhitungan luas Persegi panjang dan luas segitiga
var panjang= Number(panjang);
var lebar = Number(lebar);
var alas = Number(alas);
var tinggi = Number(tinggi);

var luas_persegi_panjang = panjang * lebar;
console.log("Luas persegi panjang = " + luas_persegi_panjang);

var luas_segi_tiga = (alas * tinggi)/2;
console.log("Luas segi tiga = " + luas_segi_tiga);

//TUGAS 8 ================================================
var sisi= " 1 2 ";
var jariJari= "7.5";

//hapus seluruh spasi dari variabel sisi ke tipe data integer menggunakan method Number lalu lakukan perhitungan luas persegi
//var sisi= sisi.trim();
var sisi = sisi.replace(/\s/g, '')
var sisi = Number(sisi);

console.log("Sisi = " + sisi);

//ubahlah variabel jariJari ke tipe data float lalu lakukan perhitungan luas lingkaran
var jariJari = parseFloat(jariJari);

console.log("Jari-Jari = " + jariJari);

var luasLingkaran = 3.14 * jariJari * jariJari;
console.log("Luas Lingkaran = " + luasLingkaran);