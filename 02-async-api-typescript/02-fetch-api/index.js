// 1. Buat fungsi async untuk melakukan request
async function ambilData() {
    // Panggil URL API menggunakan fetch.
    // Panggilan ini menghasilkan Promise, jadi kita gunakan 'await' untuk menunggunya.
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

    // Response dari fetch masih berupa stream/teks mentah.
    // Kita konversi ke format JSON menggunakan .json() (proses ini juga async, jadi pakai 'await').
    const data = await response.json();

    // Tampilkan data yang sudah jadi objek JavaScript
    console.log("Data berhasil diambil:", data);
    console.log("Judul Post:", data.title);
}

// 2. Jalankan fungsinya
ambilData();