// Fungsi utama kalkulator (menerima 2 angka dan 1 operator)
function hitung(angka1, operator, angka2) {
  let hasil;

  // Logika percabangan (if / else)
  if (operator === '+') {
    hasil = angka1 + angka2;
  } else if (operator === '-') {
    hasil = angka1 - angka2;
  } else if (operator === '*') {
    hasil = angka1 * angka2;
  } else if (operator === '/') {
    if (angka2 === 0) {
      hasil = "Error: Tidak bisa membagi dengan 0";
    } else {
      hasil = angka1 / angka2;
    }
  } else {
    hasil = "Operator tidak valid!";
  }

  return hasil;
}

// --- Contoh Penggunaan ---
const a = 20;
const op = '*';
const b = 10;

// Panggil fungsi dan cetak hasilnya
const total = hitung(a, op, b);
console.log(`Hasil dari ${a} ${op} ${b} = ${total}`);