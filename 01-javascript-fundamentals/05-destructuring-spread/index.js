const user = { nama: "Andi", umur: 20 };
const { nama } = user; // Destructuring

const buah1 = ["Apel"];
const buah2 = ["Jeruk"]; // Spread operator
const buah3 = [... buah1, ...buah2, "Mangga"];

console.log(nama);  // Hasil: Andi
console.log(buah3); // Hasil: ["Apel", "Jeruk"]