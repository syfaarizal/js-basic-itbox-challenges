// VARIABEL
// number
// var angka = 157;
// console.log(angka)

// // string
// var kata = "Hello World";
// console.log(kata)

// // boolean
// var isCorrect = true;
// console.log(typeof isCorrect) // typeof untuk mengetahui jenis tipe data -> boolean

// // OPERATOR MATEMATIKA

// var umur = 17;

// // penjumlahan
// var jumlah = umur + 1;
// console.log(jumlah)

// // pengurangan
// var kurang = umur - 1;
// console.log(kurang)

// // perkalian 
// var kali = umur * 2;
// console.log(kali)

// // pembagian 
// var bagi = umur / 2;
// console.log(bagi)

// // modulus 
// var modul = umur % 2;
// console.log(modul)

// // pangkat
// var pangkat = umur ** 2;
// console.log(pangkat)

// // challenge 
// var total = 1 + 2 * 3; // 1 + (2 * 3) = 1 + 6 = 7 
// console.log(total)

// urutan operasi
// () dalam kurung : di kerjakan terlebih dahulu
// ^ pangkat : di kerjakan setelah dalam kurung
// * dan / perkalian & pembagian : satu derajat operasi yang sama
// + dan - tambah & kurang 

// OPERATOR LOGIKA -> && (AND), || (OR), ! (NOT), == (EQUALS) 

// var kaya = true;
// var sehat = false;

// // AND -> DAN : true kalau dua2nya true, false kalau salah satu nya false
// var bahagia = kaya && sehat; //jika kaya true & sehat true maka dia bahagia
// console.log(bahagia) // false

// // OR -> ATAU : true walau salah satu false, false kalau dua2nya false
// var bahagia = kaya || sehat;
// console.log(bahagia) // true

// // NOT -> BUKAN
// var miskin = !kaya; // kaya = true, kalau pake (!) dia jadi false
// console.log(miskin) // false

// // Equals -> sama dengan 
// //      (=) -> asign (memberi nilai ke variable)
// var sama = 2*5 == 10; // (==) Equals -> Operator perbandingan 
// console.log(sama) // true

// var a = 5;
// var b = "5";

// console.log(a == b); //true (nilai sama)
// console.log(a === b); //false (tipe beda = number vs string)

// // kubus
// var sisi = 5;
// var volume = sisi * sisi * sisi;
// console.log(volume)

// hitung luas lingkaran -> 
// var r = 7;
// var phi = 3.14;
// var luas = phi * r * r;
// console.log(luas)

// Kondisi dalam JavaScript
// var angka = 2
//  condition
// if (angka == 1){
//     console.log("Angka satu"); // <- statement inside if
// } else {
//     console.log("Angka selain 1"); // <- statement inside else
// }

// var angka = 2;

// if(angka < 2){
//     console.log("Angka di bawah 2")
// } else if (angka > 2){
//     console.log("Angka di atas 2") // <- statement inside else if
// } else {
//     console.log("Angka 2")
// }

// Latihan
// var umur = 17;

// if(umur >= 17){
//     console.log("Bisa bikin KTP");
// }else{
//     console.log("Belum bisa bikin KTP");
// }

// Switch Case
// var hari = "rabu";

// switch(hari){
//     case "senin":
//     case "selasa":
//     case "rabu":
//     case "kamis":
//     case "jumat":
//         console.log("weekday");
//         break;
//     case "sabtu":
//     case "minggu":
//         console.log("weekend");
//         break
//     default:
//         console.log("hari apaan tuh?");
// }

// // Latihan
// var minuman = "teh";

// switch(minuman){
//     case "kopi":
//         console.log("Oh, kamu suka kopi ya");
//         break;
//     case "teh":
//         console.log("Oh, teh juga enak tuh");
//         break;
//     default:
//         console.log("Minuman apa ya?")
// }

// // Nested If
// var umur = 16;
// var tinggi = 150;

// if(umur < 17){
//     if(tinggi < 150){
//         console.log("Dilarang naik")
//     } else {
//         console.log("Boleh naik")
//     }
// }else{
//     console.log("Boleh masuk")
// }

// Perulangan (loop)
// for (var i = 1; i <= 10; i ++){ // digunakan jika sudah tau akan berapa kali peengulangan
//     console.log(i);
// }

// while // -> di gunakan jika belum tahu berapa kali akan pengulangan
// var i = 1; //pakai variabel dulu
// while (i <= 10) {
//     console.log("Kiw" + i)
//     i++
// }

// Latihan
// for (let i = 1; i <= 5; i++) {
//   let baris = ``; // variable penampung sementara 
//   for (let j = 1; j <= i; j++) {
//     baris += + j;
//   }
//   console.log(baris);
// }

// for (let i = 1; i <= 5; i++) {
//     let temp = ``;
//     for(j = 1; j <= i; j++) {
//       temp += i;
//     }
//     console.log(temp);
// }

// Larik/Array
// var scores = [100, 50, 70]; 
// console.log(scores[0]); // akses elemen pertama
// console.log(scores.length); // panjang array
// console.log(scores[scores.length - 1]); // akses elemen terakhir
// scores.push(80); // menambah elemen di akhir array
// console.log(scores); // [100, 50, 70, 80]
// scores.pop(); // menghapus elemen terakhir
// console.log(scores); // [100, 50, 70]
// scores.unshift(90); // menambah elemen di awal array
// console.log(scores); // [90, 100, 50, 70]
// scores.shift(); // menghapus elemen pertama
// console.log(scores); // [100, 50, 70]
// Menggunakan forEach untuk iterasi
// scores.forEach(function(score, index) {
//     console.log(`Score ${index + 1}: ${score}`);
// });

//Larik Multidimensi / Larik 2 dimensi
// Array di dalam array
// var scores = [
//     [10, 20, 30],
//     [15, 25, 35],
//     [5, 7, 9]
// ]
//console.log(scores[0][1]); // akses elemen kedua dari array pertama = 20

// Latihan
var murid = [
    [1, "Vincent", 3.5],
    [2, "Udin", 3.0],
    [3, "Mamang", 2.1],
];

for(var i = 0; i < murid.length; i++){
    if(murid[i][2] >= 3.0){
        console.log(murid[i][0] + ". " + murid[i][1] + ", IPK = " + murid[i][2] + ", Lulus");
    } else {
        console.log(murid[i][0] + ". " + murid[i][1] + ", IPK = " + murid[i][2] + ", Gagal");
    } 
} 

// function
function hello() {
    console.log("Hai, Pagi!");
}
// invoke
hello(); // output -> Hai, Pagi!

// Ganjil Genap
function cekAngka (angka) {
    if (angka % 2 == 0) {
        console.log("Genap");
    } else {
        console.log("Ganjil");
    }
}
cekAngka(5);

// Modular Function
function splitToArray (str) { // str = kalimat
    var tempArray = str.split (" "); // mengubah string menjadi array -> ["Hello", "Selamat", "Pagi"]
    return tempArray // mengembalikan array
}

function jumlahKata (kalimat) { // kalimat = "Hello Selamat Pagi"
    var result = splitToArray(kalimat); // ["Hello", "Selamat", "Pagi"]
    var arrayLength = result.length; // arrayLength = 3
    return arrayLength; // 3
}

console.log(jumlahKata ("Hello Selamat Pagi")); // output -> 3

// Latihan
function countLength (str) { // str = "abcdefgh"
    var countWord = str.length; // countWord = 8
    return countWord; // 8
}

function checkLength (str) { // str = "abcdefgh"
    var strLength = countLength(str); // strLength = 8
    if(strLength >= 5 && strLength <= 12) { // 5 <= 8 <= 12
        return "Kata sandi diterima"; // output -> Kata sandi diterima
    } else { // 8 < 5 / 8 > 12
        return "Masukan karakter antara 5 dan 12"; // output -> Masukan karakter antara 5 dan 12
    }
}

console.log(checkLength("abcdefgh")); // output -> Kata sandi diterima
console.log(checkLength("abc")); // output -> Masukan karakter antara 5 dan 12
console.log(checkLength("abcdefghijklmnop")); // output -> Masukan karakter antara 5 dan 12

// Object
var mobil = {
    merk: "Toyota",
    warna: "Hitam",
    tahun: 2022,
    nyalakanMobil: function() {
        console.log("Mobil dinyalakan");
    }
}
console.log(mobil.merk); // output -> Toyota
console.log(mobil.warna); // output -> Hitam
console.log(mobil.tahun); // output -> 2022
mobil.nyalakanMobil(); // output -> Mobil dinyalakan

// Latihan
var laptop = {
    merk: "Asus",
    warna: "Silver",
    tahun: 2021,
    hidupkanLaptop: function() {    
        console.log("Laptop dinyalakan");
    }
}
console.log(laptop.merk); // output -> Asus
console.log(laptop.warna); // output -> Silver
console.log(laptop.tahun); // output -> 2021
laptop.hidupkanLaptop(); // output -> Laptop dinyalakan

// Constructor
function Laptop (merk, warna, tahun) {
    this.merk = merk;
    this.warna = warna;
    this.tahun = tahun;
    this.hidupkanLaptop = function() {
        console.log("Laptop dinyalakan");
    }
}
var asus = new Laptop("Asus", "Silver", 2021);
console.log(asus.merk); // output -> Asus
console.log(asus.warna); // output -> Silver
console.log(asus.tahun); // output -> 2021
asus.hidupkanLaptop(); // output -> Laptop dinyalakan