const express = require('express')
const app = express()
const port = 3000

//SOAL 1 ======================================
app.get('/lingkaran-tabung/:jariJari/:tinggi', (req, res) => {
  const jariJari = parseFloat(req.params.jariJari);
  const tinggi = parseFloat(req.params.tinggi);

  const phi = 3.14;
  const luasAlas = phi * jariJari * jariJari;
  const kelilingAlas = 2 * phi * jariJari;
  const volumeTabung = luasAlas * tinggi;

  const result = `jari-jari : ${jariJari}, tinggi : ${tinggi}, volume tabung : ${volumeTabung.toFixed(2)}, luas alas tabung : ${luasAlas.toFixed(2)}, keliling alas tabung : ${kelilingAlas.toFixed(2)}`;

  res.send(result);
});

//SOAL 2 ======================================
app.get('/data-orang', (req, res) => {
  const { umur, gender } = req.query;

  let dataOrang = [
    { id: 1, name: "John", umur: 30, pekerjaan: "Penulis", jenisKelamin: "L" },
    { id: 4, name: "Benzema", umur: 34, pekerjaan: "Pemain Bola", jenisKelamin: "L" },
    { id: 5, name: "Sarah", umur: 27, pekerjaan: "Model", jenisKelamin: "P" },
    { id: 9, name: "Shohei Ohtani", umur: 28, pekerjaan: "Pemain Baseball", jenisKelamin: "L" },
    { id: 11, name: "Maria Sharapova", umur: 35, pekerjaan: "Petenis", jenisKelamin: "P" }
  ];

  //Filter berdasarkan umur
  if (umur) {
    const umurNumber = parseInt(umur);
    if (!isNaN(umurNumber)) {
      dataOrang = dataOrang.filter(person => person.umur >= umurNumber);
    }
  }

  //Filter berdasarkan gender
  if (gender) {
    dataOrang = dataOrang.filter(person => person.jenisKelamin.toUpperCase() === gender.toUpperCase());
  }

  //Hasil
  const result = dataOrang.map((person, index) => {
    return `${index + 1}. ${person.name} - Pekerjaan: ${person.pekerjaan} - Umur: ${person.umur} Tahun`;
  }).join('\n');

  res.send(result || 'Data tidak ditemukan');
});

//http://localhost:3000/data-orang?umur=30&gender=L

//SOAL 3 ======================================
app.get('/data-orang/:id', (req, res) => {
  const id = parseInt(req.params.id);

  let dataOrang =[
    {id: 1, name: "John", umur: 30, pekerjaan: "Penulis", jenisKelamin: "L"},
    {id: 4, name: "Benzema", umur: 34, pekerjaan: "Pemain Bola", jenisKelamin: "L"},
    {id: 5, name: "Sarah", umur: 27, pekerjaan: "Model", jenisKelamin: "P"},
    {id: 9, name: "Shohei Ohtani", umur: 28, pekerjaan: "Pemain Baseball", jenisKelamin: "L"},
    {id: 11, name: "Maria Sharapova", umur: 35, pekerjaan: "Petenis", jenisKelamin: "P"}
  ]
  
  const orang = dataOrang.find(item => item.id === id);

  if (!orang) {
    return res.send("Data tidak ditemukan!");
  }

  let result = "";
  if(orang.jenisKelamin === 'L'){
  result = `Pak ${orang.name} adalah seorang ${orang.pekerjaan} yang berusia ${orang.umur} tahun`;
  }else{
  result = `Bu ${orang.name} adalah seorang ${orang.pekerjaan} yang berusia ${orang.umur} tahun`;
  }
  
  res.send(result);
});

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`)
})