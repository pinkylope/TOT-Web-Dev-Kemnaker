const { connectionPool } = require("../config/db")

const createMahasiswa = (req, res)=>{
  let {nama, mata_kuliah, nilai} = req.body
  let queryText = `INSERT INTO nilai_mahasiswa ( nama, mata_kuliah, nilai ) VALUES('${nama}', ${mata_kuliah}, ${nilai})`

  connectionPool.query(queryText, (err,data)=>{
    if (err){
      console.log(err)
      return
    }
  })

  res.json({message: "mahasiswa was successfully created", status: "success"})
}

const getMahasiswa = (req, res)=>{

  let queryText = `SELECT * FROM nilai_mahasiswa`

  connectionPool.query(queryText, (err, data) => {
    if (err) {
      console.log(err)
      return;
    }

    let mahasiswa = data.map(el => {
      let { id, nama, mata_kuliah, nilai, indeks_nilai, created_at, updated_at } = el;
      let mahasiswa = { id, nama, mata_kuliah, nilai, indeks_nilai, created_at, updated_at }
      return mahasiswa;
    });

    res.json(mahasiswa);
  });

}


const getMahasiswaByID = (req, res)=>{
  let {id} = req.params

  let queryText = `SELECT * FROM nilai_mahasiswa WHERE id=${id}`

  connectionPool.query(queryText, (err, data) => {
    if (err) {
      console.log(err)
      return;
    }

    if (data.length > 0){
      let { id, nama, mata_kuliah, nilai, indeks_nilai, created_at, updated_at } = data[0];
      res.json({ id, nama, mata_kuliah, nilai, indeks_nilai, created_at, updated_at });
    }else{
      res.status(404).json({message: "data not found"})
    }
  });
}

const updateMahasiswa = (req, res)=>{
  let {nama, mata_kuliah, nilai} = req.body
  let {id} = req.params

  let queryText = `UPDATE nilai_mahasiswa SET nama='${nama}', mata_kuliah=${mata_kuliah}, nilai=${nilai} WHERE id=${id}`

  connectionPool.query(queryText, (err,data)=>{
    if (err){
      console.log(err)
      return
    }
  })

  res.json({message: "mahasiswa was successfully updated", status: "success"})
}

const deleteMahasiswa = (req, res)=>{
  let {id} = req.params

  let queryText = `DELETE FROM nilai_mahasiswa WHERE id=${id}`

  connectionPool.query(queryText, (err,data)=>{
    if (err){
      console.log(err)
      return
    }
  })

  res.json({message: "mahasiswa was successfully deleted", status: "success"})
}

module.exports = {
  createMahasiswa,
  getMahasiswa,
  getMahasiswaByID,
  updateMahasiswa,
  deleteMahasiswa
}