// TUGAS 1 ==================================
console.log("=== TUGAS 1 ===")
//buatlah dua fungsi yaitu fungsi luas lingkaran dan keliling lingkaran dengan arrow function (wajib ada parameternya)
//lalu gunakan let atau const di dalam soal ini
const phi = 3.14;

const hitungLuasLingkaran = (jari2)=>{
  let luasLingkaran = phi * jari2 * jari2;
  console.log(`Luas lingkaran = ${luasLingkaran}`);
}

const hitungKelilingLingkaran = (jari2)=>{
  let kelilingLingkaran =  2 * phi * jari2;
  console.log(`Keliling Lingkaran = ${kelilingLingkaran}`);
}

hitungLuasLingkaran(10)
hitungKelilingLingkaran(10)

// TUGAS 2 ==================================
console.log("=== TUGAS 2 ===")
//"Pak John adalah seorang penulis yang berusia 30 tahun" 
const introduce=(nama, umur, jk, pekerjaan)=>{
  if(jk=="Perempuan"){
    return `Bu ${nama} adalah seorang ${pekerjaan} yang berusia ${umur} tahun`;
  }else{
    return `Pak ${nama} adalah seorang ${pekerjaan} yang berusia ${umur} tahun`;
  }
}
 
//kode di bawah ini jangan dirubah atau dihapus
const perkenalanJohn = introduce("john", "30", "Laki-Laki", "penulis")
console.log(perkenalanJohn) // Menampilkan "pak john adalah seorang penulis yang berusia 30 tahun"

//kode di bawah ini jangan dirubah atau dihapus 
const perkenalanSarah = introduce("sarah", "28", "Perempuan", "guru") 
console.log(perkenalanSarah) // Menampilkan "bu sarah adalah seorang penulis yang berusia 30 tahun"

// TUGAS 3 ==================================
console.log("=== TUGAS 3 ===")

const newFunction = (firstName, lastName) => ({
  firstName,
  lastName,
  fullName() {
    console.log(`${firstName} ${lastName}`);
  }
});

// kode di bawah ini jangan diubah atau dihapus sama sekali
console.log(newFunction("John", "Doe").firstName)
console.log(newFunction("Richard", "Roe").lastName)
newFunction("William", "Imoh").fullName()

// TUGAS 4 ==================================
console.log("=== TUGAS 4 ===")
let phone = {
   name: "Galaxy Note 20",
   brand: "Samsung",
   year: 2020,
   colors: ["Mystic Bronze", "Mystic White", "Mystic Black"]
}
// kode diatas ini jangan di rubah atau di hapus sama sekali

/* Tulis kode jawabannya di sini */
const {brand:phoneBrand, name:phoneName, year, colors}=phone;
const [colorBronze, ,colorBlack]=colors;

// kode di bawah ini jangan dirubah atau dihapus
console.log(phoneBrand, phoneName, year, colorBlack, colorBronze)

// TUGAS 5 ==================================
console.log("=== TUGAS 5 ===")
let warna = ["biru", "merah", "kuning" , "hijau"]

let dataBukuTambahan= {
  penulis: "john doe",
  tahunTerbit: 2020 
}

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul:["hitam"]
}

buku = {...buku, ...dataBukuTambahan}
buku.warnaSampul = [...buku.warnaSampul,...warna]
console.log(buku)

// TUGAS 6 ==================================
console.log("=== TUGAS 6 ===")
/* tulislah function anda disini */
function addProducts(samsung, newProducts) {
  return {
    ...samsung,
    products: [...samsung.products, ...newProducts]
  };
}

let samsung ={
 name: "Samsung",
 products :[
  {name: "Samsung Galaxy Note 10", colors: ["black", "gold", "silver"]},
  {name: "Samsung Galaxy Note 10s", colors: ["blue", "silver"]},
  {name: "Samsung Galaxy Note 20s", colors: ["white", "black"]}
 ] 
}

let newProducts = [
 {name: "Samsung Galaxy A52", colors: ["white", "black"]},
 {name: "Samsung Galaxy M52", colors: ["blue", "grey", "white"]}
]

samsung = addProducts(samsung, newProducts)

console.log(samsung)

// TUGAS 7 ==================================
console.log("=== TUGAS 7 ===")

const createProfile = ([nama, domisili, umur]) => ({ nama, domisili, umur });

let data = ["Bondra", "Medan", 25];

console.log(createProfile(data));

// TUGAS 8 ==================================
console.log("=== TUGAS 8 ===")

const graduate = (...students) => {
  const allData = [].concat(...students); // menggabung semua data
  const result = {};

  allData.forEach(({ name, class: className }) => {
    if (!result[className]) {
      result[className] = [];
    }
    result[className].push(name);
  });

  return result;
};

// TEST CASES
const data1 = [
  { name: "Ahmad", class: "adonis" },
  { name: "Regi", class: "laravel" },
  { name: "Bondra", class: "adonis" },
  { name: "Iqbal", class: "vuejs" },
  { name: "Putri", class: "laravel" }
];

const data2 = [
  { name: "Yogi", class: "react" },
  { name: "Fikri", class: "agile" },
  { name: "Arief", class: "agile" }
];

console.log(graduate(data1));
console.log(graduate(data2));