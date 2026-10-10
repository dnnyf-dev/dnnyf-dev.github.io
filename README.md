# Portofolio Deny Firmansyah

Website portofolio interaktif (HTML, CSS, JavaScript murni, tanpa framework dan tanpa `npm install`).

## Fitur
- Globe 3D yang berputar dan mengikuti gerakan kursor (canvas), foto dengan efek miring 3D
- Kubus 3D untuk skill: bisa diseret, dan klik kategori untuk memutarnya
- Kartu project dengan efek miring 3D, filter, dan jendela detail
- Dua bahasa (Indonesia / English), tema gelap / terang, menu HP
- Repo GitHub ditarik langsung dari akun (tampil otomatis kalau berhasil)
- Tombol unduh CV (ID dan EN) dan form kontak yang membuka aplikasi email
- Responsif di HP, tablet, dan laptop; menghormati pengaturan "kurangi animasi"

## Cara memasang di GitHub Pages
1. Buat repo baru bernama `dnnyf-77.github.io` (public).
2. Unggah semua isi folder ini (index.html, style.css, main.js, folder assets, file .nojekyll).
3. Di repo: Settings → Pages → Source: *Deploy from a branch* → Branch: `main` → Save.
4. Tunggu 1-2 menit, lalu buka `https://dnnyf-77.github.io`.

## Cara mengubah isi
Buka `main.js`. Di bagian atas ada blok `CONFIG` (link, email, WhatsApp, daftar project) dan blok `T` / `DATA` (semua teks dua bahasa).
- Link demo project: isi `demo: "https://..."` pada project terkait.
- Tombol WhatsApp: isi `whatsapp: "628xxxxxxxxxx"` (kosong = tidak tampil).
- Ganti foto: timpa `assets/photo.png` (PNG transparan lebih bagus).
- Ganti CV: timpa file PDF di folder `assets`.

## Catatan privasi
File CV di folder `assets` memuat nomor telepon. Kalau repo ini publik, siapa pun bisa mengunduhnya. Hapus tombol CV atau ganti PDF-nya dengan versi tanpa nomor telepon jika tidak mau.
