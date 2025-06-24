var filterCarsPromise = require('./promise3.js')
 
// Lanjutkan code untuk menjalankan function filterCars
// Soal 1
// Mobil berwarna hitam tahun 2019 (pakai then-catch)
filterCarsPromise("black", 2019)
  .then(result => {
    console.log("Mobil hitam tahun 2019:", result);
  })
  .catch(err => {
    console.log(err.message);
  });

// Soal 2
// Mobil berwarna silver tahun 2017 (pakai then-catch)
filterCarsPromise("silver", 2017)
  .then(result => {
    console.log("Mobil silver tahun 2017:", result);
  })
  .catch(err => {
    console.log(err.message);
  });

// Soal 3, 4, 5 menggunakan async/await
async function checkCarsAsync() {
  // Soal 3
  // Mobil abu-abu tahun 2019 (tidak ditemukan)
  try {
    const grey2019 = await filterCarsPromise("grey", 2019);
    console.log("Mobil abu-abu tahun 2019:", grey2019);
  } catch (err) {
    console.log("Mobil abu-abu tahun 2019:", err.message);
  }

  // Soal 4
  // Mobil abu-abu tahun 2018
  try {
    const grey2018 = await filterCarsPromise("grey", 2018);
    console.log("Mobil abu-abu tahun 2018:", grey2018);
  } catch (err) {
    console.log("Mobil abu-abu tahun 2018:", err.message);
  }

  // Soal 5
  // Mobil hitam tahun 2020 (tidak ditemukan)
  try {
    const black2020 = await filterCarsPromise("black", 2020);
    console.log("Mobil hitam tahun 2020:", black2020);
  } catch (err) {
    console.log("Mobil hitam tahun 2020:", err.message);
  }
}

checkCarsAsync();