// 1. Struktur data User dari API
export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

// 2. Fungsi penahan waktu sederhana (konsep Promise + setTimeout)
function tunggu(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// 3. Fungsi utama mengambil data dari API
export async function ambilDataUser(): Promise<User[]> {
    try {
        console.log("Sedang mengambil data dari API...");

        // A. Ambil data dari server
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        // B. Cek apakah HTTP status error (misal status 404 / 500)
        if (!response.ok) {
            throw new Error(`HTTP Error Status: ${response.status}`);
        }

        // C. Ubah response ke format JSON
        const dataUser: User[] = await response.json();

        // D. Tahan dulu selama 2 detik (2000 ms) sebelum dikembalikan
        await tunggu(2000);

        return dataUser;

    } catch (error) {
        console.error("Gagal mengambil data dari API:", error);
        throw error;
    }
}