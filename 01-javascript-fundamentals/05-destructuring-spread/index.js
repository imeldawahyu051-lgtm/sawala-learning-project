const user = { nama: "Andi", umur: 20 };
const { nama } = user;

const buah1 = ["Apel"];
const buah2 = ["Jeruk"];
const buah3 = [...buah1, ...buah2, "Mangga"];

console.log(nama);
console.log(buah3);