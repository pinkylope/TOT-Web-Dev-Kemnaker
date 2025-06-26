const express = require('express')
const { createMahasiswa, getMahasiswa, getMahasiswaByID, updateMahasiswa, deleteMahasiswa } = require('../controllers/mahasiswaController')
const { validationBodyMahasiswa } = require('../middleware/validation')
const mainRouter = express.Router()

// create
mainRouter.post("/mahasiswa", validationBodyMahasiswa, createMahasiswa)

// read
mainRouter.get('/mahasiswa', getMahasiswa)
mainRouter.get('/mahasiswa/:id', getMahasiswaByID)

// update
mainRouter.put('/mahasiswa/:id', validationBodyMahasiswa, updateMahasiswa)

// delete
mainRouter.delete('/mahasiswa/:id', deleteMahasiswa)


module.exports = mainRouter
