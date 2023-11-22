document.addEventListener('DOMContentLoaded', function() {
    var waktuSaatIniDiv = document.getElementById('live-time');

    // Fungsi untuk mendapatkan waktu saat ini dan memperbarui elemen div
    function updateWaktuSaatIni() {
        var now = new Date();
        var hours = String(now.getHours()).padStart(2, '0');
        var minutes = String(now.getMinutes()).padStart(2, '0');
        var seconds = String(now.getSeconds()).padStart(2, '0');
        var waktuSaatIni = hours + ':' + minutes + ':' + seconds;

        waktuSaatIniDiv.textContent = "Waktu Saat Ini: " + waktuSaatIni;
    }

    // Panggil fungsi untuk pertama kali
    updateWaktuSaatIni();

    // Perbarui waktu saat ini setiap detik
    setInterval(updateWaktuSaatIni, 1000);
});
