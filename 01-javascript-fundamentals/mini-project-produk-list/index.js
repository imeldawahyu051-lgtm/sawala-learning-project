import { produkList } from './data.js';

const Makanan = produkList.filter(item => item.kategori === "Makanan");
console.log(Makanan);