// TUGAS 1 ==================================
console.log("=== TUGAS 1 ===")
var dataPeserta = ["john", "laki-laki", "programmer", "30"]
var output = "Halo, nama saya "+dataPeserta[0]+". saya "+dataPeserta[1]+" berumur "+dataPeserta[3]+" bekerja sebagai seorang "+dataPeserta[2];
console.log(output)

// TUGAS 2 ==================================
console.log("=== TUGAS 2 ===")
var sayuran=[]
sayuran.push("Kangkung","Bayam","Buncis","Kubis","Timun","Seledri","Tauge");
sayuran.sort();

for(var i=0; i<sayuran.length; i++){
  console.log(sayuran[i]);
}

// TUGAS 3 ==================================
console.log("=== TUGAS 3 ===")
var word="car";
var hasil=[];

for(var i=0; i<word.length; i++){
  for(var j=i; j<word.length; j++){
     hasil.push(word.substring(i, j+1)); 
  }
}
console.log(hasil);

// TUGAS 4 ==================================
console.log("=== TUGAS 4 ===")
var numbers = [4,5,1,4,6,8,9,21]
var temp = 0;

for(var i=0; i<numbers.length; i++){
  temp += numbers[i];
}
console.log(temp);

// TUGAS 5 ==================================
console.log("=== TUGAS 5 ===")
var kumpulanAngka = [
 [1,3,5,7,8,9],
 [4,5,6,2,3,1],
 [6,7,8,1,3,5],
];

var baris = kumpulanAngka.length;
var hasil = []

for(var i=0; i<baris; i++){
  var angka = kumpulanAngka[i];
  var jumlah = 0;
  for(var j=0; j<angka.length; j++){
    jumlah += angka[j];
  }
  hasil.push(jumlah);
}
console.log(hasil);

