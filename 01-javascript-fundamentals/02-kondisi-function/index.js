function cekKelulusan(nilai) {
  if (nilai >= 75) {
    return "Lulus";
  } else {
    return "Tidak Lulus";
  }
}

console.log(cekKelulusan(70));