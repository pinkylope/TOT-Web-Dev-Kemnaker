// TUGAS 1 ==================================
console.log("=== TUGAS 1 ===")
var buah = [
  {nama:"Nanas",warna:"Kuning",adaBijinya:"tidak",harga:9000},
  {nama:"Jeruk",warna:"Oranye",adaBijinya:"ada",harga:8000},
  {nama:"Semangka",warna:"Hijau & Merah",adaBijinya:"ada",harga:10000},
  {nama:"Pisang",warna:"Kuning",adaBijinya:"tidak",harga:5000}
]

//uraikan data tersebut menjadi array of object dan munculkan data yang tidak memiliki biji
for(var i=0;i<buah.length;i++){
  if(buah[i].adaBijinya=="tidak"){
    console.log(buah[i]);
  }
}

// TUGAS 2 ==================================
console.log("=== TUGAS 2 ===")
var dataFilm = []

function tambahDataFilm(nama,durasi,genre,tahun){
  dataFilm.push({nama: nama,durasi: durasi,genre: genre,tahun: tahun});
}

tambahDataFilm("LOTR", "2 jam", "action", "1999")
tambahDataFilm("avenger", "2 jam", "action", "2019")
tambahDataFilm("spiderman", "2 jam", "action", "2004")
tambahDataFilm("juon", "2 jam", "horror", "2004")
console.log(dataFilm)

// TUGAS 3 ==================================
console.log("=== TUGAS 3 ===")
var people =[
  {name: "John", job: "Programmer", gender: "male", age: 30},
  {name: "Sarah", job: "Model", gender: "female", age: 27},
  {name: "Jack", job: "Engineer", gender: "male", age: 25},
  {name: "Ellie", job: "Designer", gender: "female", age: 35},
  {name: "Danny", job: "Footballer", gender: "male", age: 30},
]

//kelompok laki-laki diatas 29 tahun
console.log("KELOMPOK LAKI-LAKI DIATAS 29 TAHUN");
for(var i=0;i<people.length;i++){
  if(people[i].age>=29){
    console.log(people[i]);
  }
}

//kelompok laki-laki diatas 29 tahun
console.log("KELOMPOK LAKI-LAKI DIBAWAH 29 TAHUN");
for(var i=0;i<people.length;i++){
  if(people[i].age<29){
    console.log(people[i]);
  }
}

// TUGAS 4 ==================================
console.log("=== TUGAS 4 ===")
//(Rata-rata Usia) dapatkan rata-rata usia dari data dibawah ini

var people =[
  {name: "John", job: "Programmer", gender: "male", age: 30},
  {name: "Sarah", job: "Model", gender: "female", age: 27},
  {name: "Jack", job: "Engineer", gender: "male", age: 25},
  {name: "Ellie", job: "Designer", gender: "female", age: 35},
  {name: "Danny", job: "Footballer", gender: "male", age: 30},
]

var jumlah = 0;
var jumlahObjek = people.length;

for(var i=0;i<jumlahObjek;i++){
  jumlah = jumlah + people[i].age;
}
var rerata = jumlah/people.length;
console.log("Rata-rata umur adalah : " + rerata);

// TUGAS 5 ==================================
console.log("=== TUGAS 5 ===")
var people =[
  {name: "John", job: "Programmer", gender: "male", age: 30},
  {name: "Sarah", job: "Model", gender: "female", age: 27},
  {name: "Jack", job: "Engineer", gender: "male", age: 25},
  {name: "Ellie", job: "Designer", gender: "female", age: 35},
  {name: "Danny", job: "Footballer", gender: "male", age: 30},
]

var peopleSort = people.sort((a,b)=>{
 return a.age-b.age;
})

console.log(peopleSort)

function munculkanNama(){
  for(i=1;i<=peopleSort.length;i++){
   console.log(i + ". "+ peopleSort[i-1].name); 
  }
}

munculkanNama()

// TUGAS 6 ==================================
console.log("=== TUGAS 6 ===")
var phone = {
  name: "Samsung Galaxy Note 20",
  brand: "Samsung",
  colors: ["Black"],
  release: 2020
}

function addColors(value){
  phone.colors.push(value);
}

addColors("Gold")
addColors("Silver")
addColors("Brown")

console.log(phone)