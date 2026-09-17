// 1. Membuat fungsi penunda waktu (Timer)
const waitSec = (ms) => new Promise((res) => setTimeout(res, ms));

// 2. Fungsi utama
async function run() {
    console.log("Tunggu dalam 5 detik");
    await waitSec(5000); // Tunggu 5000 milidetik (1 detik)
    console.log("Selesai setelah 5 detik!");
}

run();