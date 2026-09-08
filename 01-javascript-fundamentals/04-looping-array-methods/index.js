const daftarHarga = [50000, 150000, 200000, 75000];

const barangMahal = daftarHarga.filter(harga => harga > 100000);
console.log("Barang Mahal:", barangMahal);

const hargaBaru = daftarHarga.map(harga => harga + 5000);
console.log("Harga Baru:", hargaBaru);