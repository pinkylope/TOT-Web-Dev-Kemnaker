// TUGAS 1 ==================================
console.log("=== TUGAS 1 ===")
console.log("LOOPING PERTAMA");
var i = 0;
do{
  i=i+2;
  console.log(i+" - I love coding");
}while(i<20)

console.log("LOOPING KEDUA");
var i = 20;
while(i<=20 && i>=10){
  console.log(i+" - I will become a MERN Stack developer");
  i=i-2;
}

// TUGAS 2 ==================================
console.log("=== TUGAS 2 ===")
for(var i=1;i<=16;i++){
  if(i%2!=0){
    console.log(i+" - Angka Ganjil");
  }else{
    console.log(i+" - Angka Genap");
  }
}

// TUGAS 3 ==================================
console.log("=== TUGAS 3 ===")
for(var i=1;i<=20;i++){
  if(i%2!=0 && i%3!=0){
    console.log(i+" - Santai");
  }else if(i%2!=0 && i%3==0){
    console.log(i+" - I Love Coding");
  }else if(i%2==0 && i%3!=0){
    console.log(i+" - Berkualitas");
  }else{
    console.log(i+" - ToT");
  }
}

// TUGAS 4 ==================================
console.log("=== TUGAS 4 ===")
var dimensi = 7;
var hasil = "";

for(var i=0;i<dimensi;i++){
  
  for(var j=0;j<=i;j++){
    hasil += "#";
  }
  hasil += "\n";
}
console.log(hasil);

// TUGAS 5 ==================================
console.log("=== TUGAS 5 ===")
var sentence = "Fullstack Developer";
var panjang = sentence.length;
var hasil = "";

console.log("Kalimat : "+sentence);
for(var i=0;i<panjang;i++){
  if(sentence[i]!="a" && sentence[i]!="i" && sentence[i]!="u" && sentence[i]!="e" && sentence[i]!="o" && sentence[i]!="A" && sentence[i]!="I" && sentence[i]!="U" && sentence[i]!="E" && sentence[i]!="O"){
    hasil += sentence[i];
  }
}
console.log("Hasil : "+hasil);
