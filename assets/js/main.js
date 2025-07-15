// File: assets/js/main.js
// Tujuan: Menambahkan fungsionalitas interaktif ke situs web.

/**
 * Menunggu hingga seluruh konten halaman HTML (DOM) selesai dimuat
 * sebelum menjalankan kode JavaScript. Ini adalah praktik terbaik untuk
 * memastikan semua elemen HTML sudah ada saat script mencoba mengaksesnya.
 */
document.addEventListener('DOMContentLoaded', function () {

    // --- Fungsionalitas Menu Mobile ---

    // 1. Pilih elemen tombol menu dan daftar menu berdasarkan ID mereka.
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // 2. Tambahkan "event listener" (pendengar acara) pada tombol menu.
    //    Kode di dalamnya akan berjalan setiap kali tombol diklik.
    //    Pengecekan 'if (mobileMenuButton && mobileMenu)' memastikan
    //    kode tidak error jika elemen-elemen ini tidak ada di halaman.
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function () {
            
            // 3. Toggle (alihkan) kelas 'hidden' pada elemen menu.
            //    - Jika menu sedang tersembunyi (memiliki kelas 'hidden'), kelas itu akan dihapus.
            //    - Jika menu sedang tampil (tidak memiliki kelas 'hidden'), kelas itu akan ditambahkan.
            //    Ini adalah cara sederhana untuk membuat efek buka/tutup.
            mobileMenu.classList.toggle('hidden');
        });
    }


    // --- Tempat untuk Fungsionalitas JavaScript Lainnya di Masa Depan ---
    // Contoh:
    // - Tombol "Scroll to Top"
    // - Animasi saat elemen di-scroll (reveal on scroll)
    // - Validasi formulir kontak yang lebih canggih

});