let siswa = [

    {
        nama: "orva",
        umur: 16,
        jurusan: "RPL",
        nilai : 90
    },

    {
        nama: "kevin",
        umur: 17,
        jurusan: "TKJ",
        nilai : 80
    },

    {
        nama: "ridwan",
        umur: 17,
        jurusan: "RPL",
        nilai : 70
    },

];

for (let i = 0; i < siswa.length; i++) {
    console.log("Nama : " + siswa[i].nama + " | " + "Nilai : " + siswa[i].nilai);
}

if (siswa[0].nilai > 80) {
    console.log(siswa[0].nama + " Lulus Dengan Nilai Sempurna");
}

console.log(siswa[0].nama);
console.log(siswa[0].umur);
console.log(siswa[0].jurusan);
console.log(siswa[0].nilai);

console.log(siswa[1].nama);
console.log(siswa[1].umur);
console.log(siswa[1].jurusan);
console.log(siswa[1].nilai);

console.log(siswa[2].nama);
console.log(siswa[2].umur);
console.log(siswa[2].jurusan);
console.log(siswa[2].nilai);