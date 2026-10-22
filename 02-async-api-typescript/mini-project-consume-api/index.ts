import { ambilDataUser, User } from './api.ts';

async function main() {
    try {
        console.log("=== MEMULAI APLIKASI ===");

        // Panggil fungsi dari api.ts
        const daftarUser: User[] = await ambilDataUser();

        // Ambil data user pertama
        const userPertama = daftarUser[0];

        console.log("\n--- DATA USER PERTAMA ---");
        console.log(`Nama     : ${userPertama.name}`);
        console.log(`Username : ${userPertama.username}`);
        console.log(`Email    : ${userPertama.email}`);

    } catch (error) {
        console.log("Terjadi kesalahan pada aplikasi utama.");
    }
}

main();