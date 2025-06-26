const validationBodyMahasiswa = (req, res, next)=>{
  let {nama, mata_kuliah, nilai} = req.body

  if (nama === undefined || mata_kuliah === undefined || nilai === undefined ){
    res.status(400).json({message: "nama, mata_kuliah and nilai is required"})
  }else{
    next()
  }
}

module.exports = {validationBodyMahasiswa}