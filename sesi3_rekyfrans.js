// Tugas ini saya membuat 2 kondisi perulangan untuk megunakan For & Do while
// 1. Looping mengunakan For  
  // for (let i = 1; i <= 10; i++) { // (1) variabel i untuk menentukan baris dimulai dari 1, (2). membuat sampai baris ke 10, (3) increment i sampai kondisi terpenuhi
  //   let baris = ""; // variabel untuk mengontrol baris
  //   for (let j = 1; j <= i; j++) { // (1) variabel j untuk menentukan bintang dimulai dari 1 bintang, (2). membuat sampai bintang ke 10, (3) increment j sampai kondisi terpenuhi
  //     baris += "*"; // tambahkan bintang ke baris
  //   }
  //   console.log(baris); // cetak atau print bintan pada setiap barisnya
  // }

// 2. looping menggunakan Do While
let i = 1; // variabel untuk menambahkan Baris yang akan dimulai
do {
  let j = 1; // variabel untuk mengontrol Bintang pada Baris
  let baris = ""; // variabel untuk mengontrol baris
  
  do {
  baris += "*"; // Tambahkan bintang ke baris
    j++; // Increment untuk Bintang
  } while (j <= i); // melakukan perulangan sebanyak nomor baris saat ini (jika i sudah = 10 baris)

  console.log(baris);
  i++; // Increment untuk Baris
} while (i <= 10); // melakukan perulangan hingga mencapai baris yang ditentukan (10 baris) 