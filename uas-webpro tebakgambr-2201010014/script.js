var daftarGambar = ["kupu-kupu.jpg","kelinci.jpg", "beruang.jpg", "pandaa.jpg"];
var gambarSaatIni = 0;

function tebak() {
    var tebakan = document.getElementById("tebakan").value.toLowerCase();
    var hasil = document.getElementById("hasil");

    if (tebakan === daftarGambar[gambarSaatIni].split(".")[0]) {
        hasil.innerHTML = "Selamat, tebakanmu benar!";
    } else {
        hasil.innerHTML = "Maaf, tebakanmu salah. Coba lagi!";
    }

    gambarSaatIni++;
    if (gambarSaatIni >= daftarGambar.length) {
        gambarSaatIni = 0;
    }

    document.getElementById("gambar").src = daftarGambar[gambarSaatIni];
    document.getElementById("tebakan").value = "";
}
