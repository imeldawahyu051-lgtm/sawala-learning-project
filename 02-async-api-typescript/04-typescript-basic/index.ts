import { Menu, Pesanan } from "./type-interface";

const menuSaya: Menu = "Nasi Goreng";

const pesananSaya: Pesanan = {
    namaPelanggan: "Andi",
    menu: menuSaya,
    jumlah: 2,
    harga: 15000
};

console.log("Nama:", pesananSaya.namaPelanggan);
console.log("Menu:", pesananSaya.menu);
console.log("Jumlah:", pesananSaya.jumlah);
console.log("Harga:", pesananSaya.harga);