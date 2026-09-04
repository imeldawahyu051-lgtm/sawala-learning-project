import { produkList } from './data.js';

const Makanan = produkList.filter(item => item.kategori === "Minuman");
console.log(Makanan);