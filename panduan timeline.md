
### 📖 Panduan Cara Mengubah Data Timeline:

Struktur data timeline diatur di bagian atas dalam variabel array **`timelineData`**. Setiap objek di dalamnya merepresentasikan satu baris kegiatan. Berikut penjelasan tiap propertinya:

1. **`name`**: Nama kegiatan atau acara yang akan ditampilkan di dalam kotak (misal: `"Opening Alfest"`).
2. **`label`**: Keterangan waktu atau tanggal singkat yang muncul di bawah nama kegiatan (misal: `"15 Feb"`).
3. **`pos`**: Mengatur posisi kolom di grid (skala 1 sampai 10).
* Contoh: `pos: "col-start-1 col-end-2"` berarti kotak ini hanya memakan 1 kolom pertama.
* Jika ingin melebar (misal dari kolom ke-5 sampai ke-10 seperti Bazar), gunakan `pos: "col-start-5 col-end-10"`.


4. **`color`**: Kombinasi warna gradasi latar belakang dan border kotak menggunakan kelas Tailwind (disesuaikan dengan warna emas dan palet tema malam/sand).
5. **`imgActive`**: Path direktori gambar ilustrasi atau poster yang akan muncul saat kotak timeline ditekan (ditampilkan di dalam modal popup).
6. **`deskripsi`**: Penjelasan lengkap atau informasi tambahan mengenai kegiatan tersebut.
7. **`status`**: Indikator khusus pada kotak:
* `"ended"` $\rightarrow$ Memunculkan badge merah bertuliskan **ENDED**.
* `"arrow"` $\rightarrow$ Memunculkan ikon panah berdenyut ➔.
* `"none"` $\rightarrow$ Bersih tanpa indikator tambahan.