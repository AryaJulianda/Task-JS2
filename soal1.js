// 1. filter  =>  namaArray.filter()
// Method ini digunakan untuk membuat array baru yang hanya berisi elemen-elemen yang memenuhi kondisi tertentu dari array asli 

// Contoh : 
const angka = [1,2,3,4,5,6,7,8,9];
const kelipatanTiga = angka.filter(a => a % 3 == 0);

console.log(kelipatanTiga);



// 2. find  =>  namaArray.find()
// Method ini digunakan untuk mengembalikan elemen pertama yang memenuhi kondisi tertentu dari sebuah array

// Contoh :
const dataSiswa = [
    {absen: 1, nama: "Asep"},
    {absen: 2, nama: "Budi"},
    {absen: 3, nama: "Tono"}
];
const absenTiga = dataSiswa.find(d => d.absen == 3);

console.log(absenTiga);




// 3. includes  =>  namaArray.includes()
// Metode ini memeriksa apakah suatu elemen ada dalam array, mengembalikan nilai boolean "true" atau "false" 

// Contoh : 
const namaSiswa = ['Asep','Budi','Tono'];

console.log(namaSiswa.includes('Asep'));



// 4. sort => namaArray.sort()
//  Metode ini digunakan untuk mengurutkan elemen dalam array 

// contoh : 
const namaHewan = ['singa','gajah','angsa','burung'];
namaHewan.sort();

console.log(namaHewan);


// 5. Object.values => Object.values(namaObject)
// Method ini digunakan untuk mengembalikan semua value di dalam object dalam bentuk array

// contoh : 
const data = {
    id: 1,
    name : 'Arya julianda',
    age : 19
}

console.log(Object.values(data));

// 6. toLowerCase  =>   varString.toLowerCase()
// Metode ini  digunakan untuk mengubah semua karakter dalam sebuah string menjadi huruf kecil. Metode ini hanya berlaku untuk variabel yang berisi nilai bertipe string.

// contoh : 
// const hello = "Hello My Name is Arya Julianda";

// console.log(hello.toLowerCase());



// 7. toUpperCase  =>   varString.toUpperCase()
// Metode ini  digunakan untuk mengubah semua karakter dalam sebuah string menjadi huruf besar. Metode ini hanya berlaku untuk variabel yang berisi nilai bertipe string.

// contoh : 
const hello = "Hello My Name is Arya Julianda";

console.log(hello.toUpperCase());



// 8. Math.floor => Math.floor(bilangan)
// Metode ini digunakan untuk membulatkan bilangan ke bawah menjadi bilangan bulat terdekat 

// contoh : 
console.log(Math.floor(2.5));
console.log(Math.floor(5.99999));



// 9. Math.random => Math.random()
// Metode ini digunakan untuk membangkitkan bilangan desimal antara 0 dan 1

// contoh : 
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());



// 10. Math.max => Math.max() 
// Metode ini mengembalikan nilai terbesar dari satu atau lebih angka

// contoh : 
console.log(Math.max(2,6,10,5));   


