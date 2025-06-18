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


// TUGAS 4 ==================================
console.log("=== TUGAS 4 ===")
