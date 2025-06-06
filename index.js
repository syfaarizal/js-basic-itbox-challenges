// VARIABEL
// number
var angka = 157;
console.log(angka)

// string
var kata = "Hello World";
console.log(kata)

// boolean
var isCorrect = true;
console.log(isCorrect)

// Challenge Day 1
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

// OPERATOR MATEMATIKA

var umur = 17;

// penjumlahan
var jumlah = umur + 1;
console.log(jumlah)

// pengurangan
var kurang = umur - 1;
console.log(kurang)

// perkalian 
var kali = umur * 2;
console.log(kali)

// pembagian 
var bagi = umur / 2;
console.log(bagi)

// modulus 
var modul = umur % 2;
console.log(modul)

// pangkat
var pangkat = umur ** 2;
console.log(pangkat)

// challenge 
var total = 1 + 2 * 3; // 1 + (2 * 3) = 1 + 6 = 7 
console.log(total)

// urutan operasi
// () dalam kurung : di kerjakan terlebih dahulu
// ^ pangkat : di kerjakan setelah dalam kurung
// * dan / perkalian & pembagian : satu derajat operasi yang sama
// + dan - tambah & kurang 

// OPERATOR LOGIKA -> && (AND), || (OR), ! (NOT), == (EQUALS) 

var kaya = true;
var sehat = false;

// AND -> DAN -> true kalau dua2nya true, false kalau salah satu nya false
var bahagia = kaya && sehat; //jika kaya true & sehat true maka dia bahagia
console.log(bahagia) // false

// OR -> ATAU : true walau salah satu false, false kalau dua2nya false
var bahagia = kaya || sehat;
console.log(bahagia) // true

// NOT -> BUKAN
var miskin = !kaya; // kaya = true, kalau pake (!) dia jadi false
console.log(miskin) // false

// Equals -> sama dengan 
//      (=) -> asign (memberi nilai ke variable)
var sama = 2*5 == 10; // (==) Equals -> Operator perbandingan 
console.log(sama) // true

var a = 5;
var b = "5";

console.log(a == b); //true (nilai sama)
console.log(a === b); //false (tipe beda = number vs string)

// kubus
var sisi = 5;
var volume = sisi * sisi * sisi;
console.log(volume)

// hitung luas lingkaran -> 
var r = 7;
var phi = 3.14;
var luas = phi * r * r;
console.log(luas)

