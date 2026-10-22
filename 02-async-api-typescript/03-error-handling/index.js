const price = 100;
const paid = 150; // Coba ubah nilainya untuk tes

if (paid < price) {
    // Jika kurang, throw error TANPA try-catch agar tampil stack trace merah di terminal
    throw new Error('Pembayaran kurang');
} else if (paid === price) {
    // Jika pas, cetak pesan ini di terminal
    console.log('Pembayaran pas, transaksi berhasil!');
} else {
    // Jika lebih, cetak kembalian
    console.log(`Pembayaran berhasil, kembalian Anda: ${paid - price}`);
}