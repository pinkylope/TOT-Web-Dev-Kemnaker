// TUGAS 1 ==================================
console.log("=== TUGAS 1 ===")
function introduce(nama,jk,pekerjaan,umur){
  if(jk=="laki-laki"){
    var panggilan = "Pak";
  }else{
    var panggilan = "Bu";
  }
  return panggilan+" "+nama+" adalah seorang "+pekerjaan+" yang berusia "+umur+" tahun"
}

var john = introduce("John", "laki-laki", "penulis", "30")
console.log(john) // Menampilkan "Pak John adalah seorang penulis yang berusia 30 tahun"

var sarah = introduce("Sarah", "perempuan", "model", "28")
console.log(sarah) // Menampilkan "Bu Sarah adalah seorang model yang berusia 28 tahun"

// TUGAS 2 ==================================
console.log("=== TUGAS 2 ===")
function karakterUnik(text) {
  var lowerText = text.toLowerCase();
  var result = "";

  for (var i = 0; i < text.length; i++) {
    var huruf = text[i];
    //console.log(huruf);

    // Hitung jumlah kemunculan
    var jumlah = lowerText.split(lowerText[i]).length - 1;

    if (jumlah == 1) {
      result += huruf;
    }
  }
  return result;
}

var text = "Super Bootcamp Fullstack Dev 2022";
console.log(karakterUnik(text));

// TUGAS 3 ==================================
console.log("=== TUGAS 3 ===")
var angka = [2,3,1,9,12,8,9,7]

function angkaMaxMin(angka){
  var angkaMax = angka.sort();
  var max = angkaMax[(angka.length)-1];
  var angkaMin = angka.sort();
  var min = angkaMin[0];
  
  return "angka terbesar adalah "+max+" dan angka terkecil adalah "+min;
}

var hasil = angkaMaxMin(angka);
console.log(hasil);

// TUGAS 4 ==================================
function arrangeString(str){
  var arrSplit = str.split('');
  var arrSort = arrSplit.sort();
  var hasil = arrSort.join();
  var kata = hasil.replaceAll(",","");
  
  return kata;
}

console.log(arrangeString("bahasa"));
console.log(arrangeString("similikiti"));
console.log(arrangeString("sanbercode"));
console.log(arrangeString(""));

// TUGAS 5 ==================================
console.log("=== TUGAS 5 ===")
function palindrome(str){
  var arrSplit = str.split('');
  var arrReverse = arrSplit.reverse();
  var arrJoin = arrReverse.join();
  var hasil = arrJoin.replaceAll(",","");
  
  if(str==hasil){
    return true;
  }else{
    return false;
  }
}

console.log(palindrome("katak"));
console.log(palindrome("blanket"));
console.log(palindrome("nababan"));
console.log(palindrome("haji ijah"));
console.log(palindrome("mister"));

// TUGAS 6 ==================================
console.log("=== TUGAS 6 ===")
function angkaPalindrome(num){
  var isPalindrome = false;

  while(!isPalindrome){
    num = num+1;
    var arrNum = num.toString().split("");
    var revArrNum = arrNum.reverse();
    
    isPalindrome = arrNum.join("") === revArrNum.join("");
  }
  
  if(isPalindrome){
    return num
  }
}

console.log(angkaPalindrome(8));
console.log(angkaPalindrome(10));
console.log(angkaPalindrome(117));
console.log(angkaPalindrome(175));
console.log(angkaPalindrome(1000));

// TUGAS 7 ==================================
console.log("=== TUGAS 7 ===")

