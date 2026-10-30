Berikut adalah daftar nama-nama warna (*color palette*) bawaan yang tersedia secara *default* di Tailwind CSS.

Setiap warna (kecuali **black**, **white**, dan **transparent**) memiliki tingkat kegelapan (*shades*) dari **50** (paling terang/muda) hingga **950** (paling gelap/tua).

---

### 1. Warna Netral / Abu-abu (Grays)

Tailwind menyediakan beberapa variasi warna abu-abu dengan *undertone* yang berbeda:

| Nama Warna | Karakter / Tone |
| --- | --- |
| `slate` | Abu-abu kebiruan (*cool & modern*) |
| `gray` | Abu-abu netral |
| `zinc` | Abu-abu keperakan (*cool neutral*) |
| `neutral` | Abu-abu murni murni (*warm-ish*) |
| `stone` | Abu-abu kehangatan/seperti batu (*warm neutral*) |

---

### 2. Warna Utama & Hangat (Reds, Oranges, Yellows)

* `red` (merah)
* `orange` (oranye)
* `amber` (kuning keoranyaan / emas)
* `yellow` (kuning cerah)
* `lime` (kuning kehijauan cerah)

---

### 3. Warna Alam & Hijau (Greens)

* `green` (hijau standar)
* `emerald` (hijau zamrud / kaya)
* `teal` (hijau kebiruan / toska tua)

---

### 4. Warna Biru (Blues)

* `cyan` (biru muda / cyan)
* `sky` (biru langit)
* `blue` (biru standar)
* `indigo` (biru nila / keunguan)

---

### 5. Warna Ungu & Merah Muda (Purples & Pinks)

* `violet` (ungu muda/terang)
* `purple` (ungu standar)
* `fuchsia` (merah keunguan cerah / magenta)
* `pink` (merah muda)
* `rose` (merah mawar / *soft red*)

---

### 6. Warna Spesial / Khusus

* `black` (hitam pekat `#000000`)
* `white` (putih bersih `#ffffff`)
* `transparent` (transparan/tanpa warna)
* `current` (mengikuti warna teks induk / `currentColor`)

---

### Cara Menggunakannya di Class Tailwind

Nama-nama warna di atas dikombinasikan dengan fungsi CSS yang mau kamu pakai dan angka *shade*-nya (**50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950**):

* **Teks (`text-*`)**: `text-amber-500`, `text-slate-900`, `text-white`
* **Background (`bg-*`)**: `bg-blue-600`, `bg-emerald-100`, `bg-black`
* **Border (`border-*`)**: `border-red-500`, `border-zinc-300`
* **Shadow (`shadow-*`)**: `shadow-indigo-500/50`

> **Tips:** Angka **500** biasanya dianggap sebagai warna standar/murni dari varian tersebut. Angka lebih kecil (misal `100`) cocok untuk background tipis, sedangkan angka lebih besar (misal `800`/`900`) cocok untuk teks atau background gelap.