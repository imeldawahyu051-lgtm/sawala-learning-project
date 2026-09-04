const dataSiswa = [
  { nama: "Budi", nilai: 85 },
  { nama: "Siti", nilai: 60 },
  { nama: "Andi", nilai: 90 },
  { nama: "Apin", nilai: 80 },
  { nama: "Dewi", nilai: 70 }
];

// 2. Filter Lulus dan Tidak Lulus
const siswaLulus = dataSiswa.filter(siswa => siswa.nilai >= 75);
const siswaTidakLulus = dataSiswa.filter(siswa => siswa.nilai < 75); // Pakai < (kurang dari)

// 3. Map Nama (Variabel harus beda nama!)
const daftarNamaLulus = siswaLulus.map(siswa => siswa.nama);
const daftarNamaTidakLulus = siswaTidakLulus.map(siswa => siswa.nama);

// 4. Hitung Total & Rata-Rata
const totalNilai = dataSiswa.reduce((acc, siswa) => acc + siswa.nilai, 0);
const rataRata = totalNilai / dataSiswa.length;

// --- Cetak Hasil ke Terminal ---
console.log("=== PENGOLAHAN DATA SISWA ===");
console.log("Daftar Siswa Lulus      :", daftarNamaLulus);
console.log("Daftar Siswa Tidak Lulus:", daftarNamaTidakLulus);
console.log("Total Nilai Kelas       :", totalNilai);
console.log("Rata-rata Nilai         :", rataRata);