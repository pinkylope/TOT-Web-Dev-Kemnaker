var filterBooksPromise = require('./promise2.js')
 
// Lanjutkan code untuk menjalankan function readBooksPromise 
// Soal 1
// Bukunya berwarna dan jumlah halamannya 50 (menggunakan .then .catch)
filterBooksPromise(true, 50)
  .then(result => {
    console.log("Buku berwarna dengan 50 halaman:", result);
  })
  .catch(err => {
    console.log(err.message);
  });

// Soal 2 
// Menggunakan async/await
async function runAsyncExamples() {
  // Bukunya tidak berwarna dan jumlah halamannya 250
  try {
    const result2 = await filterBooksPromise(false, 250);
    console.log("Buku tidak berwarna dengan 250 halaman:", result2);
  } catch (err) {
    console.log(err.message);
  }

  // Bukunya berwarna dan jumlah halamannya 30
  try {
    const result3 = await filterBooksPromise(true, 30);
    console.log("Buku berwarna dengan 30 halaman:", result3);
  } catch (err) {
    console.log(err.message);
  }
}

runAsyncExamples();