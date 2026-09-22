type Menu = "Nasi Goreng" | "Mie Goreng" | "Ayam Goreng";

interface Pesanan {
    namaPelanggan: string;
    menu: Menu;
    jumlah: number;
    harga: number;
}

export { Menu, Pesanan };