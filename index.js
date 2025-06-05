// number
var angka = 157;
console.log(angka)

// string
var kata = "Hello World";
console.log(kata)

// boolean
var isCorrect = true;
console.log(isCorrect)

const name = "Syifa Fauziyah Arizal";
let age = 20;
let status = "belajar JavaScript";
console.log(`Halo! Nama saya  ${name}. Saya berumur ${age} tahun. Hari ini saya sedang ${status}`);

const now = new Date();
const tanggal = now.getDate();
const bulan = now.getMonth() + 1;
const tahun = now.getFullYear();
const jam = now.getHours();
const menit = now.getMinutes();

console.log(`Hari ini tanggal ${tanggal}/${bulan}/${tahun}, pukul ${jam}:${menit < 10 ? "0" + menit : menit}`);
