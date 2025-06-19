// TUGAS 1 ==================================
console.log("=== TUGAS 1 ===")
function hitungPersegi(sisi){
  function luas(s){
    return s * s
  }
  function keliling(s){
    return 4 * s
  }
  console.log("Luas Persegi = ", luas(sisi))
  console.log("Keliling Persegi = ", keliling(sisi))
}

function hitungPersegiPanjang(panjang,lebar){
  function luas(p,l){
    return p * l
  }
  function keliling(p,l){
    return 2 * (p + l)
  }
  console.log("Luas Persegi Panjang = ", luas(panjang,lebar))
  console.log("Keliling Persegi Panjang = ", keliling(panjang,lebar))
}

hitungPersegi(8)
hitungPersegiPanjang(12,7)

// TUGAS 2 ==================================
console.log("=== TUGAS 2 ===")
function hitungKubus(sisi){
  function volume(s){
    return s * s * s
  }
  function luasPermukaan(s){
    return s * s
  }
  console.log("Volume Persegi = ", volume(sisi))
  console.log("Luas Permukaan Persegi = ", luasPermukaan(sisi))
}

function hitungBalok(panjang,lebar,tinggi){
  function volume(p,l,t){
    return p * l * t
  }
  function luasPermukaan(p,l,t){
    return 2 * ((p*l) + (l*t) + (p*t))
  }
  console.log("Volume Persegi Panjang = ", volume(panjang,lebar,tinggi))
  console.log("Luas Permukaan Persegi Panjang = ", luasPermukaan(panjang,lebar,tinggi))
}

hitungKubus(8)
hitungBalok(12,7,5)

// TUGAS 3 ==================================
console.log("=== TUGAS 3 ===")
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

// TUGAS 4 ==================================
console.log("=== TUGAS 4 ===")
