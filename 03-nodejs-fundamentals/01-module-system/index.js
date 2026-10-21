// Latihan memanggil modul bawaan Node.js
const fs = require('fs');

// Membuat file teks baru secara otomatis
fs.writeFileSync('latihan.txt', 'Halo, ini latihan dasar Module System!');
console.log('File latihan.txt berhasil dibuat!');
