/*
============================================================================
 FILE  : soal-IPAS-Bab2.js
 MAPEL : IPAS (Ilmu Pengetahuan Alam dan Sosial)
 KELAS : III SD/MI
 BAB   : Bab 2 — Dahulu, Kini, dan Nanti
 SUMBER: Buku Siswa IPAS SD/MI Kelas III Edisi Revisi 2025

============================================================================
 PENJELASAN SINGKAT MATERI BAB 2
------------------------------------------------------------------------
 Bab 2 "Dahulu, Kini, dan Nanti" mengajak siswa menelusuri jejak masa
 lalu dan memahami bahwa kehidupan manusia dapat berubah seiring waktu.

 Subbab A — Cerita dari Masa Lalu
 1. Keluarga memiliki asal-usul dan cerita (anggota, kakek/nenek/leluhur).
 2. Cerita keluarga dapat diperoleh lewat wawancara kepada anggota keluarga.
 3. Tradisi dan nilai keluarga dapat tetap dijaga meskipun keluarga pindah.
 4. Nama daerah dapat berasal dari tumbuhan, hewan, tokoh, atau peristiwa,
    serta kondisi daerah dapat berubah dari dahulu sampai kini.

 Subbab B — Cerita dari Masa ke Masa
 1. Kehidupan manusia berubah seiring waktu (perubahan sosial budaya):
    transportasi, komunikasi, rumah, pakaian, permainan, pekerjaan.
 2. Perkembangan IPTEK (Ilmu Pengetahuan dan Teknologi) merupakan salah
    satu penyebab perubahan cara manusia hidup dan bergaul.
 3. Perubahan dapat membawa dampak positif (memudahkan pekerjaan, lebih
    cepat, hasil lebih banyak) dan dapat pula berdampak negatif.
 4. Sebagian masyarakat tetap mempertahankan tradisi yang dinilai baik.
 5. Situs budaya / tempat bersejarah perlu dikenali dan dijaga.

 Kata kunci: keluarga, asal-usul, tradisi, sejarah, perubahan sosial
 budaya, IPTEK, dahulu dan kini, situs budaya.

============================================================================
 ATURAN FORMAT
------------------------------------------------------------------------
 Setiap soal berbentuk objek: { soal, pilihan, kunci }
 - pilihan : array berisi 4 opsi (A, B, C, D)
 - kunci   : indeks jawaban benar (0 = A, 1 = B, 2 = C, 3 = D)

 Level soal (taksonomi kognitif):
 - C1 = Mengingat (fakta, istilah, contoh)
 - C2 = Memahami (menjelaskan, membedakan, alasan)
 - C3 = Mengaplikasi (menerapkan pada kasus sehari-hari)
 - C4 = Menganalisis (membandingkan, sebab-akibat, menyimpulkan)
 - C5 = Mengevaluasi (menilai, memutuskan, memberi pertimbangan)
============================================================================
*/

const bankSoalIPASBab2 = {
  // =========================================================================
  // C1 — MENGINGAT
  // Menyebutkan fakta, istilah, definisi, dan contoh langsung dari materi.
  // =========================================================================
  C1: [
    // ---------- Subbab: Keluarga & asal-usul ----------
    {
      soal: "Keluarga tidak hanya berisi ayah, ibu, kakak, atau adik. Anggota keluarga yang lebih tua seperti kakek dan nenek disebut …",
      pilihan: ["leluhur keluarga", "tetangga", "teman sekolah", "guru"],
      kunci: 0
    },
    {
      soal: "Untuk mengetahui asal-usul keluarga, kita dapat bertanya kepada …",
      pilihan: ["orang asing di jalan", "anggota keluarga yang lebih tua", "hewan peliharaan", "tanaman di halaman"],
      kunci: 1
    },
    {
      soal: "Salah satu cara memperoleh cerita masa lalu keluarga adalah dengan …",
      pilihan: ["bermain", "menari", "wawancara", "berenang"],
      kunci: 2
    },
    {
      soal: "Anggota keluarga yang berperan sebagai orang tua laki-laki disebut …",
      pilihan: ["ibu", "kakak", "adik", "ayah"],
      kunci: 3
    },
    {
      soal: "Cerita tentang dari mana keluarga kita berasal disebut cerita …",
      pilihan: ["asal-usul", "permainan", "makanan", "cuaca"],
      kunci: 0
    },
    {
      soal: "Informasi mengenai dari mana keluarga atau sesuatu berasal dinamakan …",
      pilihan: ["perubahan", "asal-usul", "pekerjaan", "permainan"],
      kunci: 1
    },
    {
      soal: "Anggota keluarga tertua biasanya menjadi sumber cerita tentang …",
      pilihan: ["harga mainan", "nomor sepatu", "masa lalu keluarga", "warna rambut"],
      kunci: 2
    },

    // ---------- Subbab: Tradisi ----------
    {
      soal: "Kebiasaan yang tetap dijaga dan dilakukan dalam keluarga atau masyarakat disebut …",
      pilihan: ["pekerjaan", "transportasi", "permainan", "tradisi"],
      kunci: 3
    },
    {
      soal: "Pakai baju adat saat upacara keluarga termasuk salah satu contoh …",
      pilihan: ["tradisi", "makanan", "mainan", "sekolah"],
      kunci: 0
    },
    {
      soal: "Tradisi dan nilai keluarga dapat diteruskan kepada …",
      pilihan: ["orang asing", "generasi berikutnya", "hewan", "tanaman"],
      kunci: 1
    },
    {
      soal: "Keluarga yang pindah ke daerah lain sebaiknya tetap …",
      pilihan: ["melupakan tradisi", "membuang tradisi", "menjaga tradisi", "menjual tradisi"],
      kunci: 2
    },
    {
      soal: "Berikut ini yang termasuk contoh kegiatan tradisi keluarga adalah …",
      pilihan: ["bermain kelereng setiap pagi", "menonton televisi", "tidur siang", "memakai pakaian adat saat upacara"],
      kunci: 3
    },

    // ---------- Subbab: Sejarah daerah ----------
    {
      soal: "Cerita atau informasi mengenai kejadian pada masa lalu disebut …",
      pilihan: ["sejarah", "cuaca", "permainan", "teknologi"],
      kunci: 0
    },
    {
      soal: "Cerita asal nama daerah Gandaria berkaitan dengan banyaknya pohon …",
      pilihan: ["mangga", "gandaria", "pisang", "kelapa"],
      kunci: 1
    },
    {
      soal: "Nama suatu daerah dapat berasal dari nama …",
      pilihan: ["tumbuhan", "binatang", "semua benar", "tokoh"],
      kunci: 2
    },
    {
      soal: "Asal nama daerah dapat diketahui dengan menelusuri …",
      pilihan: ["harga barang", "ramalan cuaca", "jadwal sekolah", "cerita lama"],
      kunci: 3
    },
    {
      soal: "Kondisi suatu daerah dari masa dahulu sampai kini dapat …",
      pilihan: ["berubah", "selalu sama", "tidak pernah berubah", "hilang"],
      kunci: 0
    },
    {
      soal: "Tempat yang menyimpan nilai sejarah bagi masyarakat disebut …",
      pilihan: ["toko mainan", "situs budaya", "sekolah", "pasar"],
      kunci: 1
    },

    // ---------- Subbab: Transportasi ----------
    {
      soal: "Alat angkut zaman dahulu yang ditarik hewan contohnya …",
      pilihan: ["pesawat", "kereta listrik", "delman", "mobil sport"],
      kunci: 2
    },
    {
      soal: "Yang termasuk alat transportasi zaman sekarang adalah …",
      pilihan: ["pedati", "gerobak sapi", "delman", "mobil"],
      kunci: 3
    },
    {
      soal: "Kendaraan zaman dahulu untuk perjalanan laut adalah …",
      pilihan: ["kapal layar", "pesawat jet", "mobil", "kereta listrik"],
      kunci: 0
    },
    {
      soal: "Angkutan umum zaman dahulu berupa kereta yang memakai tenaga hewan disebut …",
      pilihan: ["mobil", "delman", "motor", "bus"],
      kunci: 1
    },
    {
      soal: "Alat transportasi yang tidak memakai mesin adalah …",
      pilihan: ["pesawat", "mobil", "sepeda kayuh", "motor"],
      kunci: 2
    },
    {
      soal: "Alat transportasi zaman dahulu memakai tenaga …",
      pilihan: ["listrik saja", "bensin saja", "angin mesin", "manusia dan hewan"],
      kunci: 3
    },
    {
      soal: "Gerobak yang ditarik sapi termasuk alat transportasi …",
      pilihan: ["zaman dahulu", "zaman sekarang", "masa depan", "luar angkasa"],
      kunci: 0
    },

    // ---------- Subbab: Komunikasi ----------
    {
      soal: "Alat komunikasi yang dipakai orang pada zaman dahulu adalah …",
      pilihan: ["telepon pintar", "surat", "pesan digital", "video call"],
      kunci: 1
    },
    {
      soal: "Alat komunikasi zaman sekarang yang dapat ditelepon sekaligus berinternet disebut …",
      pilihan: ["kentongan", "surat", "telepon pintar", "burung merpati"],
      kunci: 2
    },
    {
      soal: "Dahulu orang mengirim kabar dengan menggunakan …",
      pilihan: ["email", "chating", "aplikasi", "surat"],
      kunci: 3
    },
    {
      soal: "Berikut yang termasuk alat komunikasi masa dahulu adalah …",
      pilihan: ["kentongan", "telepon genggam", "komputer", "laptop"],
      kunci: 0
    },
    {
      soal: "Kabar dari jauh pada masa dahulu dapat dikirim lewat …",
      pilihan: ["pesan internet", "burung merpati", "telepon pintar", "video call"],
      kunci: 1
    },
    {
      soal: "Telepon umum yang memakai koin banyak dipakai pada zaman …",
      pilihan: ["masa depan", "luar angkasa", "dahulu", "zaman batu"],
      kunci: 2
    },

    // ---------- Subbab: Rumah, pakaian & kebutuhan ----------
    {
      soal: "Pakaian yang dipakai orang dahulu biasanya berupa …",
      pilihan: ["seragam", "jaket kulit", "seragam olahraga", "pakaian adat"],
      kunci: 3
    },
    {
      soal: "Rumah zaman dahulu sederhana dan terbuat dari …",
      pilihan: ["bahan alam sekitar", "besi dan baja", "kaca", "plastik"],
      kunci: 0
    },
    {
      soal: "Pakaian zaman sekarang biasanya mengikuti …",
      pilihan: ["aturan zaman batu", "selera dan tren", "hewan", "cuaca saja"],
      kunci: 1
    },
    {
      soal: "Bahan alam yang sering dipakai untuk rumah zaman dahulu adalah …",
      pilihan: ["kaca dan baja", "beton", "kayu dan bambu", "besi"],
      kunci: 2
    },
    {
      soal: "Model dan bahan rumah sekarang lebih …",
      pilihan: ["sama saja", "kuno", "sedikit", "beragam"],
      kunci: 3
    },
    {
      soal: "Pakaian adat banyak dipakai orang pada zaman …",
      pilihan: ["dahulu", "masa depan", "zaman robot", "zaman internet"],
      kunci: 0
    },

    // ---------- Subbab: Permainan ----------
    {
      soal: "Contoh permainan tradisional adalah …",
      pilihan: ["game di ponsel", "congklak", "playstation", "video game"],
      kunci: 1
    },
    {
      soal: "Permainan yang memakai alat elektronik dan layar disebut permainan …",
      pilihan: ["tradisional", "kongkak", "digital", "lompat tali"],
      kunci: 2
    },
    {
      soal: "Permainan zaman dahulu umumnya dimainkan …",
      pilihan: ["di dalam rumah", "dengan layar", "dengan internet", "di luar bersama teman"],
      kunci: 3
    },
    {
      soal: "Gasing dan kelereng termasuk contoh permainan …",
      pilihan: ["tradisional", "digital", "elektronik", "modern"],
      kunci: 0
    },
    {
      soal: "Permainan zaman sekarang banyak dimainkan lewat …",
      pilihan: ["pelepah daun", "ponsel atau komputer", "tanah liat", "daun kelapa"],
      kunci: 1
    },

    // ---------- Subbab: Pekerjaan & IPTEK ----------
    {
      soal: "IPTEK merupakan kependekan dari …",
      pilihan: ["Ilmu Perdagangan dan Ternak", "Ilmu Pengetahuan dan Tanaman", "Ilmu Pengetahuan dan Teknologi", "Ilmu Peta dan Teknik"],
      kunci: 2
    },
    {
      soal: "Pekerjaan menanam dan memanen padi di sawah biasa dilakukan oleh …",
      pilihan: ["nelayan", "dokter", "guru", "petani"],
      kunci: 3
    },
    {
      soal: "Alat pertanian zaman dahulu untuk membajak sawah contohnya …",
      pilihan: ["bajak tenaga kerbau", "traktor", "mesin robot", "pesawat"],
      kunci: 0
    },
    {
      soal: "Perkembangan teknologi dapat mengubah cara orang …",
      pilihan: ["tidur saja", "bekerja", "melihat", "bernafas"],
      kunci: 1
    },
    {
      soal: "Orang yang pekerjaannya mencari ikan di laut disebut …",
      pilihan: ["petani", "pedagang", "nelayan", "guru"],
      kunci: 2
    },

    // ---------- Subbab: Dampak perubahan ----------
    {
      soal: "Perubahan yang memudahkan pekerjaan manusia merupakan dampak …",
      pilihan: ["negatif", "merugikan", "menyusahkan", "positif"],
      kunci: 3
    },
    {
      soal: "Alat modern dapat membuat pekerjaan menjadi lebih …",
      pilihan: ["mudah dan cepat", "berat dan lambat", "sulit", "lama"],
      kunci: 0
    },
    {
      soal: "Dengan teknologi, hasil pekerjaan yang didapat biasanya dapat lebih …",
      pilihan: ["sedikit", "banyak", "sedikit dan sulit", "tidak ada"],
      kunci: 1
    },
    {
      soal: "Perubahan bersama teknologi dapat mempercepat waktu …",
      pilihan: ["tidur", "bernafas", "pengerjaan", "melihat"],
      kunci: 2
    },

    // ---------- Subbab: Situs budaya ----------
    {
      soal: "Tempat bersejarah yang perlu dijaga karena memiliki nilai sejarah disebut …",
      pilihan: ["tempat bermain", "kolam renang", "toko", "situs budaya"],
      kunci: 3
    },
    {
      soal: "Situs budaya perlu dikenali karena memiliki nilai …",
      pilihan: ["sejarah", "mainan", "jualan", "makanan"],
      kunci: 0
    },
    {
      soal: "Contoh benda peninggalan masa lalu yang patut dijaga adalah …",
      pilihan: ["ponsel baru", "candi", "robot", "drone"],
      kunci: 1
    },
    {
      soal: "Menjaga situs budaya berarti kita turut …",
      pilihan: ["merobohkan bangunan tua", "mencoret tembok", "merawat tempat bersejarah", "membuang sampah sembarangan"],
      kunci: 2
    },
    {
      soal: "Candi yang terdapat di Indonesia merupakan contoh …",
      pilihan: ["pusat perbelanjaan", "taman bermain", "stasiun modern", "situs budaya bersejarah"],
      kunci: 3
    }
  ],

  // =========================================================================
  // C2 — MEMAHAMI
  // Menjelaskan konsep, membedakan dahulu-kini, mengenali alasan.
  // =========================================================================
  C2: [
    // ---------- Subbab: Keluarga & asal-usul ----------
    {
      soal: "Mengapa penting mengetahui cerita asal-usul keluarga kita?",
      pilihan: ["Agar mengenal asal dan sejarah keluarga", "Agar tahu pakaian yang dipakai", "Agar tidak perlu sekolah", "Agar bisa bermain lebih banyak"],
      kunci: 0
    },
    {
      soal: "Dari anggota keluarga manakah kita paling tepat bertanya tentang masa kecil yang sudah lama?",
      pilihan: ["dari adik yang masih kecil", "dari kakek atau nenek", "dari teman sekelas", "dari tetangga baru"],
      kunci: 1
    },
    {
      soal: "Cerita keluarga termasuk bagian dari sejarah masyarakat karena cerita itu …. ",
      pilihan: ["hanya cerita untuk tidur", "tidak penting", "mengenang jejak masa lalu keluarga", "hanya tentang permainan"],
      kunci: 2
    },
    {
      soal: "Suku dan bahasa keluarga biasanya dapat diketahui dari …",
      pilihan: ["harga rumah", "warna baju", "jenis makanan", "asal-usul keluarga"],
      kunci: 3
    },
    {
      soal: "Anak bertanya pada nenek untuk menggali cerita masa lalu. Kegiatan itu berguna untuk …",
      pilihan: ["menambah pengetahuan sejarah keluarga", "menghabiskan waktu saja", "mencari mainan", "mengganggu nenek"],
      kunci: 0
    },

    // ---------- Subbab: Tradisi ----------
    {
      soal: "Mengapa tradisi keluarga tetap dijaga walaupun sudah berpindah tempat?",
      pilihan: ["Karena tidak ada kegiatan lain", "Karena tradisi mengikat keluarga pada nilai baik", "Karena dilarang berubah", "Karena tradisi membuat ribet"],
      kunci: 1
    },
    {
      soal: "Tradisi yang diteruskan ke anak cucu bertujuan agar …",
      pilihan: ["tradisi cepat hilang", "tidak ada yang mengingat", "nilai baik tetap lestari", "semua menjadi kuno"],
      kunci: 2
    },
    {
      soal: "Yang membedakan kebiasaan biasa dengan tradisi keluarga adalah …",
      pilihan: ["tradisi dilakukan sekali saja", "tradisi hanya untuk orang dewasa", "tradisi dibuat oleh orang asing", "tradisi dijaga dan dilakukan turun-temurun"],
      kunci: 3
    },
    {
      soal: "Keluarga Dara yang pindah kota tetap memakai pakaian adat saat upacara. Hal ini menunjukkan …",
      pilihan: ["tradisi tetap dijaga walau jauh dari daerah asal", "tradisi tidak boleh dipakai di kota", "mereka lupa budaya", "pakaian adat hanya untuk pamer"],
      kunci: 0
    },
    {
      soal: "Nilai keluarga yang baik biasanya dijaga lewat …",
      pilihan: ["lupa terhadap masa lalu", "tradisi yang diteruskan", "menghindari keluarga", "mengubah semuanya"],
      kunci: 1
    },
    {
      soal: "Mengapa tradisi tidak selalu harus ditinggalkan saat zaman berubah?",
      pilihan: ["Karena semua yang lama pasti buruk", "Karena tidak boleh berkembang", "Karena ada nilai baik yang perlu dipertahankan", "Karena tradisi tidak penting"],
      kunci: 2
    },

    // ---------- Subbab: Sejarah daerah ----------
    {
      soal: "Mengapa nama daerah bisa menyimpan cerita sejarah?",
      pilihan: ["Karena nama daerah tidak ada artinya", "Karena nama daerah dibuat asal-asalan", "Karena semua nama daerah sama", "Karena nama daerah sering berasal dari peristiwa atau ciri masa dahulu"],
      kunci: 3
    },
    {
      soal: "Asal nama Gandaria berkaitan dengan banyaknya pohon gandaria dahulu. Ini membuktikan …. ",
      pilihan: ["nama daerah dapat berasal dari tumbuhan", "pohon gandaria tidak pernah ada", "nama daerah berasal dari bangunan", "nama daerah dari makanan"],
      kunci: 0
    },
    {
      soal: "Daerah yang dahulu berupa kampung hijau kini menjadi bagian kota besar. Kondisi ini menunjukkan bahwa …",
      pilihan: ["daerah tidak pernah berubah", "kondisi daerah dapat berubah seiring waktu", "tumbuhan tidak pernah ada", "kota tidak bertambah"],
      kunci: 1
    },
    {
      soal: "Untuk mengetahui asal-usul nama daerah, kita perlu menelusuri …",
      pilihan: ["harga tiket transportasi", "jenis pakaian orang di sana", "cerita sejarah daerah tersebut", "ramalan laut"],
      kunci: 2
    },
    {
      soal: "Gambar lama dan cerita kakek tentang daerah dapat membantu kita memahami …. ",
      pilihan: ["cuaca hari ini", "jadwal sekolah", "harga mainan", "perubahan kondisi daerah dari dahulu ke kini"],
      kunci: 3
    },

    // ---------- Subbab: Transportasi ----------
    {
      soal: "Mengapa orang dahulu perjalanannya lebih lama daripada zaman sekarang?",
      pilihan: ["Karena alat transportasinya masih sederhana", "Karena jalan selalu macet modern", "Karena mereka malas berjalan", "Karena tidak ada siang"],
      kunci: 0
    },
    {
      soal: "Perbedaan utama transportasi dahulu dan kini terletak pada …",
      pilihan: ["warna kendaraan", "tenaga penggerak dan kecepatannya", "jumlah roda saja", "tempat duduk"],
      kunci: 1
    },
    {
      soal: "Delman memakai tenaga kuda, sedangkan mobil memakai …. ",
      pilihan: ["angin saja", "kaki manusia", "mesin", "matahari saja"],
      kunci: 2
    },
    {
      soal: "Alat transportasi masa kini lebih disukai untuk perjalanan jauh yang cepat karena …",
      pilihan: ["tidak memerlukan apa-apa", "selalu lebih murah", "lebih lambat", "digerakkan mesin dan lebih cepat"],
      kunci: 3
    },
    {
      soal: "Saat membandingkan gerobak sapi dan bus, gerobak sapi tergolong karena …",
      pilihan: ["lebih sederhana dan lambat", "lebih cepat", "menggunakan mesin", "dari masa depan"],
      kunci: 0
    },

    // ---------- Subbab: Komunikasi ----------
    {
      soal: "Mengapa surat membutuhkan waktu lama untuk sampai ke penerima?",
      pilihan: ["Karena surat bisa terbang sendiri", "Karena harus diantar lewat perjalanan fisik", "Karena surat tidak pernah dikirim", "Karena tidak ada alamat"],
      kunci: 1
    },
    {
      soal: "Perubahan dari surat ke telepon pintar menunjukkan bahwa alat komunikasi …",
      pilihan: ["semakin sulit dipakai", "tidak pernah berubah", "semakin cepat dan mudah dipakai", "hanya berubah bentuk"],
      kunci: 2
    },
    {
      soal: "Telepon pintar dapat mengirim kabar dengan sangat cepat melalui …",
      pilihan: ["pos darat", "kentongan", "asap", "pesan internet"],
      kunci: 3
    },
    {
      soal: "Kentongan dan asap pada masa dahulu digunakan untuk …",
      pilihan: ["memberi tanda atau kabar", "bermain", "memasak", "mendekorasi rumah"],
      kunci: 0
    },
    {
      soal: "Perbedaan surat dan pesan internet terletak pada …",
      pilihan: ["warna kertasnya", "kecepatan penyampaiannya", "pembuatnya", "nilai jualnya"],
      kunci: 1
    },

    // ---------- Subbab: Rumah, pakaian & kebutuhan ----------
    {
      soal: "Rumah zaman dahulu banyak memakai bahan alam karena …",
      pilihan: ["bahan alam tidak pernah ada", "orang dahulu tidak punya apa-apa", "bahan alam mudah didapat di sekitar", "tidak tersedia kayu"],
      kunci: 2
    },
    {
      soal: "Pakaian orang zaman sekarang beragam karena mengikuti …",
      pilihan: ["hanya aturan ketat", "keinginan hewan", "ramalan zaman batu", "selera dan tren masyarakat"],
      kunci: 3
    },
    {
      soal: "Rumah masa kini lebih beragam bentuknya karena adanya kemajuan di bidang …",
      pilihan: ["bahan bangunan dan teknologi", "permainan", "cuaca", "makanan"],
      kunci: 0
    },
    {
      soal: "Perbedaan pakaian adat dan pakaian sehari-hari adalah …",
      pilihan: ["pakaian adat dipakai saat tidur", "pakaian adat dipakai pada upacara/tradisi", "tidak ada bedanya", "pakaian adat dijadikan alas kaki"],
      kunci: 1
    },
    {
      soal: "Orang dahulu tinggal dekat alam dan memanfaatkan bahan sekitar sehingga rumahnya tampak …",
      pilihan: ["mewah dari baja", "terbuat dari kaca", "sederhana", "bertingkat tinggi"],
      kunci: 2
    },

    // ---------- Subbab: Permainan ----------
    {
      soal: "Mengapa permainan tradisional dimainkan bersama di luar?",
      pilihan: ["Karena harus memakai internet", "Karena mainan mahal", "Karena dilarang di rumah", "Karena tidak memakai layar dan butuh teman"],
      kunci: 3
    },
    {
      soal: "Perbedaan permainan dahulu dan digital terletak pada …",
      pilihan: ["alat dan cara memainkannya", "warna bendera", "nama tanaman", "harga makanan"],
      kunci: 0
    },
    {
      soal: "Permainan seperti congklak dapat melatih anak untuk …",
      pilihan: ["diam sendiri", "berpikir dan bermain bersama teman", "lupa bermain", "hanya menonton"],
      kunci: 1
    },
    {
      soal: "Bermain di luar bersama teman pada masa dahulu membuat anak lebih …",
      pilihan: ["sibuk sendiri", "jauh dari keramaian", "dekat dengan alam dan teman", "malas bergerak"],
      kunci: 2
    },
    {
      soal: "Permainan digital biasanya memerlukan …",
      pilihan: ["halaman luas", "tanah liat", "pelepah daun", "alat elektronik dan listrik"],
      kunci: 3
    },

    // ---------- Subbab: Pekerjaan & IPTEK ----------
    {
      soal: "Mengapa IPTEK dianggap sebagai salah satu penyebab perubahan sosial?",
      pilihan: ["Karena teknologi mengubah cara manusia hidup dan bergaul", "Karena IPTEK tidak berpengaruh apa-apa", "Karena IPTEK membuat manusia berhenti bekerja", "Karena IPTEK hanya untuk bermain"],
      kunci: 0
    },
    {
      soal: "Petani dahulu membajak sawah dengan kerbau, kini banyak yang memakai traktor. Hal ini menunjukkan bahwa …",
      pilihan: ["petani berhenti menanam", "teknologi mengubah cara bekerja", "kerbau tidak ada lagi", "sawah menjadi kota"],
      kunci: 1
    },
    {
      soal: "Perkembangan teknologi dapat memengaruhi cara orang …",
      pilihan: ["bernafas", "melihat benda", "bergaul dan bekerja", "menjaga badan"],
      kunci: 2
    },
    {
      soal: "Orang yang bekerja di bidang penangkapan ikan laut disebut nelayan. Teknologi membantu nelayan agar …",
      pilihan: ["tidak perlu melaut", "ikan menyerang", "perahu berhenti bekerja", "hasil tangkapan lebih mudah didapat"],
      kunci: 3
    },

    // ---------- Subbab: Dampak perubahan ----------
    {
      soal: "Alasan teknologi dianggap membantu manusia adalah karena …",
      pilihan: ["memudahkan dan mempercepat pekerjaan", "membuat pekerjaan berat", "menambah beban", "memperlambat waktu kerja"],
      kunci: 0
    },
    {
      soal: "Menggunakan mesin untuk mencuci adalah contoh teknologi yang dapat …",
      pilihan: ["menambah pekerjaan", "meringankan pekerjaan", "membuat lupa", "memperlambat"],
      kunci: 1
    },
    {
      soal: "Dampak positif yang disebutkan tentang teknologi adalah …",
      pilihan: ["semua jadi malas", "hasil lebih sedikit", "pekerjaan lebih mudah dan cepat", "waktu lebih lama"],
      kunci: 2
    },
    {
      soal: "Hasil pekerjaan dengan bantuan teknologi dapat menjadi lebih banyak dan cepat, inilah yang disebut dampak …",
      pilihan: ["negatif", "merugikan", "membosankan", "positif"],
      kunci: 3
    },

    // ---------- Subbab: Situs budaya ----------
    {
      soal: "Mengapa situs budaya perlu dijaga?",
      pilihan: ["Karena mengandung nilai sejarah bagi masyarakat", "Karena tidak terpakai", "Karena banyak debu", "Karena tua dan rusak"],
      kunci: 0
    },
    {
      soal: "Candi sebagai tempat bersejarah sebaiknya diperlakukan dengan cara …",
      pilihan: ["dirobohkan", "dijaga dan dirawat", "dicoret-coret", "dijadikan tempat sampah"],
      kunci: 1
    },
    {
      soal: "Menjaga tempat bersejarah berguna agar …",
      pilihan: ["tempat cepat rusak", "harga turun", "cerita sejarah tetap dikenang generasi kini", "tidak ada yang mengenang"],
      kunci: 2
    }
  ],

  // =========================================================================
  // C3 — MENGAPLIKASI
  // Menerapkan konsep pada kasus/situasi sehari-hari.
  // =========================================================================
  C3: [
    // ---------- Subbab: Keluarga & asal-usul ----------
    {
      soal: "Doni ingin tahu daerah asal keluarganya. Langkah paling tepat yang dilakukan Doni adalah …",
      pilihan: ["berlari jauh ke hutan", "menebak sendiri", "menonton televisi", "bertanya pada kakek tentang masa lalu keluarga"],
      kunci: 3
    },
    {
      soal: "Sekolah memberi tugas menulis asal-usul keluarga. Sumber informasi terbaik yang bisa dipakai Siti adalah …",
      pilihan: ["wawancara dengan orang tua dan kakek", "cerita teman yang mengarang", "gambar dari majalah", "tulisan di papan"],
      kunci: 0
    },
    {
      soal: "Kakek bercerita bahwa dulu keluarganya tinggal di sebuah desa di Jawa. Informasi itu menunjukkan …",
      pilihan: ["hobi kakek", "asal-usul dan sejarah keluarga", "makanan kesukaan kakek", "pekerjaan kakek"],
      kunci: 1
    },
    {
      soal: "Rina baru pindah rumah dan ingin mengenal tetangga. Yang lebih tepat dilakukan Rina adalah …",
      pilihan: ["mengunci diri sendiri", "membuat keributan", "menyapa dan berkenalan dengan tetangga", "tidak mau bertemu siapa pun"],
      kunci: 2
    },

    // ---------- Subbab: Tradisi ----------
    {
      soal: "Keluarga Budi pindah ke kota besar, tetapi tetap memakai batik dalam perayaan hari besar. Tindakan ini menunjukkan bahwa …",
      pilihan: ["mereka lupa tradisi", "batik hanya untuk kota", "tradisi harus dilupakan", "tradisi keluarga tetap dijaga meski pindah"],
      kunci: 3
    },
    {
      soal: "Sebelum makan, adik diingatkan untuk berdoa bersama. Kebiasaan berdoa setiap makan yang dijaga turun-temurun adalah contoh …",
      pilihan: ["tradisi keluarga", "perubahan sosial", "permainan", "transportasi"],
      kunci: 0
    },
    {
      soal: "Saat hari raya, keluarga Sari selalu berkumpul dan makan bersama. Kebiasaan ini menunjukkan nilai …",
      pilihan: ["kesombongan", "kebersamaan yang dijaga lewat tradisi", "kemandirian yang berlebihan", "keengganan berkumpul"],
      kunci: 1
    },
    {
      soal: "Kegiatan yang paling tepat dilakukan agar tradisi kakek tidak hilang adalah …",
      pilihan: ["melupakan kegiatan itu", "menjauh dari keluarga", "mempelajari dan ikut melakukannya bersama keluarga", "menolak belajar"],
      kunci: 2
    },
    {
      soal: "Di sekolah, Ani melihat temannya memakai baju adat saat pentas. Ia pun dapat ikut melestarikan budaya dengan cara …",
      pilihan: ["merobek baju adat", "menertawakan teman", "menyembunyikan baju", "turut memakai baju adat dengan bangga"],
      kunci: 3
    },

    // ---------- Subbab: Sejarah daerah ----------
    {
      soal: "Kota tempat Nia tinggal konon dahulu banyak pohon rambutan. Cara paling tepat Nia mengetahui cerita asal-usul nama kotanya adalah …",
      pilihan: ["bertanya kepada orang tua dan tokoh yang paham sejarah", "menebak sendiri", "membuat cerita baru", "menghapus nama kota"],
      kunci: 0
    },
    {
      soal: "Ada cerita bahwa danau di dekat rumah Andi berasal dari sebuah peristiwa. Cerita semacam itu termasuk …",
      pilihan: ["ramalan cuaca", "sejarah asal-usul daerah", "teka-teki", "iklan"],
      kunci: 1
    },
    {
      soal: "Guru meminta siswa mencari asal-usul nama desa di mana mereka tinggal secara mandiri. Hal paling pertama yang perlu siswa lakukan adalah …",
      pilihan: ["membuat nama baru", "merombak papan nama", "mencari sumber/cerita dari tokoh setempat dan orang tua", "mengganti cerita"],
      kunci: 2
    },
    {
      soal: "Museum di kotamu menyimpan benda bersejarah. Sikap tepat seorang pelajar saat berkunjung adalah …",
      pilihan: ["memegang semua benda bebas", "mencoret keterangan", "membawa pulang benda", "menjaga dan tidak merusak benda pameran"],
      kunci: 3
    },

    // ---------- Subbab: Transportasi ----------
    {
      soal: "Rio akan pergi ke rumah saudara yang jauh di luar kota dalam waktu singkat. Alat transportasi paling tepat dipilih adalah …",
      pilihan: ["mobil atau kereta cepat", "gerobak sapi", "delman", "berjalan kaki saja"],
      kunci: 0
    },
    {
      soal: "Di desa, Pak Tani ingin mengangkut hasil panen ke pasar. Alat angkut yang sesuai medan desa dan tersedia di sana adalah …",
      pilihan: ["pesawat jet", "gerobak atau kendaraan kecil", "kapal selam", "roket"],
      kunci: 1
    },
    {
      soal: "Budi dan keluarganya akan menyeberang dari satu pulau ke pulau lain. Alat yang paling tepat adalah …",
      pilihan: ["truk", "pedati", "kapal atau perahu", "sepeda"],
      kunci: 2
    },
    {
      soal: "Siti ingin pergi ke sekolah yang dekat dari rumah. Alat yang paling cocok dan sehat adalah …",
      pilihan: ["pesawat", "roket", "helikopter", "sepeda atau berjalan kaki"],
      kunci: 3
    },
    {
      soal: "Untuk pawai hari kemerdekaan di kampung agar meriah, panitia memilih kendaraan tradisional yang ditarik kuda, yaitu …",
      pilihan: ["delman", "bus listrik", "kereta api", "kapal"],
      kunci: 0
    },

    // ---------- Subbab: Komunikasi ----------
    {
      soal: "Adik yang berada di kota lain ingin segera memberi kabar bahwa ia sudah tiba dengan selamat. Alat komunikasi paling tepat adalah …",
      pilihan: ["burung merpati", "telepon pintar", "kentongan", "asap"],
      kunci: 1
    },
    {
      soal: "Nenek yang tinggal jauh ingin menyapa cucunya sambil melihat wajah. Cara paling tepat adalah dengan …",
      pilihan: ["mengirim surat biasa", "menulis di kertas", "video call menggunakan ponsel", "meniup kentongan"],
      kunci: 2
    },
    {
      soal: "Dalam keadaan listrik dan sinyal mati, warga kampung memberi tahu kabar. Cara tradisional yang bisa dipakai adalah …",
      pilihan: ["menelepon via video", "mengirim email", "chating", "membunyikan kentongan atau mengirim pesan lewat orang"],
      kunci: 3
    },
    {
      soal: "Ayah hendak mengirim dokumen kerja dengan cepat ke kantor di kota lain. Alat yang paling tepat adalah …",
      pilihan: ["email atau pesan internet", "merpati pos", "lentera asap", "amplop darat"],
      kunci: 0
    },
    {
      soal: "Kakek ingin mengirim ucapan ulang tahun kepada Siti secara sederhana dan penuh kehangatan dengan tulisan tangan. Cara yang cocok ialah …",
      pilihan: ["meniup kentongan", "menulis di kertas dan mengirimnya", "berkirim asap", "memberi sinyal senter"],
      kunci: 1
    },

    // ---------- Subbab: Rumah, pakaian & kebutuhan ----------
    {
      soal: "Di daerah yang banyak sinar matahari, atap rumah sebaiknya dibuat agar …",
      pilihan: ["menyimpan panas", "selalu basah", "terasa sejuk", "tidak ada lubang angin"],
      kunci: 2
    },
    {
      soal: "Untuk acara pesta adat di desa, pakaian yang paling tepat dikenakan adalah …",
      pilihan: ["seragam olahraga", "jaket musim dingin", "baju renang", "pakaian adat daerah"],
      kunci: 3
    },
    {
      soal: "Rumah panggung banyak dibangun di daerah yang sering banjir agar …",
      pilihan: ["lantai tidak tergenang air", "lebih mudah terbakar", "tidak ada angin", "sulit ditinggali"],
      kunci: 0
    },
    {
      soal: "Ketika mengikuti upacara bendera di sekolah, siswa sebaiknya memakai …",
      pilihan: ["pakaian pesta mewah", "seragam rapi sesuai aturan", "baju tidur", "seragam olahraga bebas"],
      kunci: 1
    },
    {
      soal: "Untuk menjaga kelestarian budaya, saat pentas seni lebih baik siswa mengenakan …",
      pilihan: ["baju renang", "jaket tebal", "pakaian adat daerah", "topi salju"],
      kunci: 2
    },

    // ---------- Subbab: Permainan ----------
    {
      soal: "Kegiatan untuk mengisi waktu luang bersama teman di luar rumah tanpa alat elektronik yang tepat adalah …",
      pilihan: ["bermain game di ponsel sendiri", "menonton televisi sendirian", "tidur di kamar", "bermain kelereng / lompat tali"],
      kunci: 3
    },
    {
      soal: "Saat listrik padam dan tidak ada internet, kegiatan yang bisa dilakukan bersama keluarga adalah …",
      pilihan: ["bermain tradisional atau bercerita bersama", "bermain playstation", "chating", "menonton video online"],
      kunci: 0
    },
    {
      soal: "Anak yang dalam permainan digital terlalu lama di depan layar sebaiknya …",
      pilihan: ["bermain tanpa henti", "mengurangi waktu dan bermain di luar", "menambah jam main", "mengunci diri"],
      kunci: 1
    },
    {
      soal: "Untuk melestarikan permainan daerah, ibu guru meminta siswa mempraktikkan salah satu permainan tradisional. Yang bisa dipilih adalah …",
      pilihan: ["game online", "video game", "congklak", "robot mainan"],
      kunci: 2
    },

    // ---------- Subbab: Pekerjaan & IPTEK ----------
    {
      soal: "Pak Guru memakai proyektor untuk mengajar. Alat itu membantu agar materi …",
      pilihan: ["sulit dipahami", "menghilang", "rusak", "lebih mudah dilihat siswa"],
      kunci: 3
    },
    {
      soal: "Petani kini memakai traktor untuk membajak sawah. Sikap yang tepat terhadap teknologi ini adalah …",
      pilihan: ["menggunakannya agar pekerjaan cepat selesai", "menolak semua teknologi", "membiarkan sawah rusak", "kembali tak memakai alat"],
      kunci: 0
    },
    {
      soal: "Ibu berbelanja dan membayar lewat aplikasi di ponsel. Kegiatan ini terbantu oleh …",
      pilihan: ["permainan tradisional", "perkembangan teknologi", "cuaca", "hewan ternak"],
      kunci: 1
    },
    {
      soal: "Dokter memakai alat canggih untuk memeriksa pasien. Teknologi membantu dokter agar …",
      pilihan: ["tidak perlu bertemu pasien", "pekerjaan lebih sulit", "dapat mendiagnosis lebih tepat", "pasien cepat sembuh tanpa diperiksa"],
      kunci: 2
    },
    {
      soal: "Saat mengerjakan tugas kelompok, siswa dapat bertukar informasi cepat memakai …",
      pilihan: ["asap api", "kentongan", "gambar batu", "pesan internet di ponsel"],
      kunci: 3
    },

    // ---------- Subbab: Dampak perubahan ----------
    {
      soal: "Nenek mencucikan pakaian dengan mesin cuci sehingga pekerjaannya menjadi …",
      pilihan: ["lebih mudah dan cepat", "lebih berat", "lebih lama", "sulit sekali"],
      kunci: 0
    },
    {
      soal: "Ayah memakai mesin pemotong rumput. Dampak positifnya adalah pekerjaan menjadi …",
      pilihan: ["melelahkan", "ringan dan tidak lama", "berbulan-bulan", "tidak selesai"],
      kunci: 1
    },
    {
      soal: "Bersepeda ke sekolah selain menyehatkan juga …",
      pilihan: ["membuat polusi", "menghabiskan bensin", "menjaga udara tetap bersih", "membuat bising"],
      kunci: 2
    },
    {
      soal: "Menggunakan teknologi tidak boleh membuat kita lupa bahwa sebagian perubahan berdampak …",
      pilihan: ["selalu baik", "tidak penting", "mustahil", "negatif jika tidak bijak"],
      kunci: 3
    },
    {
      soal: "Agar perubahan teknologi berdampak baik, yang perlu dilakukan manusia adalah …",
      pilihan: ["memakai teknologi secara bijak", "menolak semua teknologi", "merusak alat", "membuang teknologi"],
      kunci: 0
    },

    // ---------- Subbab: Situs budaya ----------
    {
      soal: "Kelas Rara mengunjungi candi. Agar turut menjaga situs budaya, siswa sebaiknya …",
      pilihan: ["menulis nama di candi", "tidak mencoret-coret dinding candi", "memukul candi", "melempar batu ke candi"],
      kunci: 1
    },
    {
      soal: "Melihat museum tua yang mulai kotor, sikap paling tepat adalah …",
      pilihan: ["membiarkan rusak", "merusaknya", "melapor agar dibersihkan dan dirawat", "membuang koleksinya"],
      kunci: 2
    },
    {
      soal: "Ada teman yang hendak mencoret tembok makam bersejarah. Tindakan yang harus kita lakukan adalah …",
      pilihan: ["ikut mencoret", "melihat sambil tertawa", "memuji", "mengingatkan agar tidak mencoret"],
      kunci: 3
    },
    {
      soal: "Untuk memperingati sejarah, sekolah mengajak siswa mengunjungi tempat bersejarah. Kegiatan ini bertujuan agar siswa …",
      pilihan: ["mengenal dan menghargai sejarah", "malas belajar", "lupa masa lalu", "merusak situs"],
      kunci: 0
    }
  ],

  // =========================================================================
  // C4 — MENGANALISIS
  // Membandingkan, menghubungkan sebab-akibat, menyimpulkan.
  // =========================================================================
  C4: [
    // ---------- Subbab: Keluarga & asal-usul ----------
    {
      soal: "Perhatikan cerita berikut! Toko kecil keluarga Ami bercerita bahwa kakeknya dahulu berdagang di pasar tua sebelum pindah. Dari cerita ini dapat disimpulkan bahwa …",
      pilihan: ["keluarga Ami tidak punya cerita", "keluarga Ami memiliki jejak sejarah di bidang dagang", "kakek Ami tidak pernah bekerja", "Ami lahir di pasar tua"],
      kunci: 1
    },
    {
      soal: "Apabila seorang kakek lahir di desa lalu pindah ke kota saat dewasa, maka cerita keluarga tentang tempat tinggal akan menampilkan …",
      pilihan: ["kesamaan tempat sejak dulu", "tidak ada perubahan", "perubahan tempat tinggal dari desa ke kota", "hanya cerita masa depan"],
      kunci: 2
    },
    {
      soal: "Untuk menelusuri silsilah keluarga, urutan yang paling tepat dimulai dari …",
      pilihan: ["anggota termuda ke yang tertua", "tetangga terdekat", "teman sekelas", "anggota tertua ke anggota termuda"],
      kunci: 3
    },

    // ---------- Subbab: Tradisi ----------
    {
      soal: "Keluarga yang berpindah tempat tetapi tetap menjalankan tradisi sedang menunjukkan bahwa …",
      pilihan: ["tradisi dapat bertahan sementara lingkungan berubah", "tradisi pasti hilang saat pindah", "pindah rumah menghapus budaya", "tradisi hanya untuk satu tempat"],
      kunci: 0
    },
    {
      soal: "Perhatikan dua hal ini: (1) Kemajuan teknologi, (2) Nilai kebersamaan keluarga. Manakah hubungan yang paling tepat?",
      pilihan: ["Teknologi pasti menghapus nilai keluarga", "Teknologi bisa memudahkan, tetapi kebersamaan tetap dijaga lewat tradisi", "Keduanya tidak berhubungan", "Nilai keluarga hanya untuk masa lalu"],
      kunci: 1
    },
    {
      soal: "Apabila masyarakat menganggap penting nilai kejujuran, maka kebiasaan lama yang jujur akan …",
      pilihan: ["langsung dibuang", "dilupakan", "tetap dipertahankan", "dilarang"],
      kunci: 2
    },
    {
      soal: "Perbedaan antara kebiasaan lewat dan tradisi dapat dilihat dari …",
      pilihan: ["keduanya sama persis", "kebiasaan lewat selalu dijaga", "tradisi tidak pernah diulang", "tradisi dilakukan turun-temurun dan dijaga, kebiasaan lewat tidak"],
      kunci: 3
    },
    {
      soal: "Perhatikan ilustrasi: Keluarga masih berkumpul tiap Idul Fitri meski anggota banyak yang merantau. Kesimpulan yang tepat adalah …",
      pilihan: ["tradisi mempererat hubungan meski berjauhan", "tradisi memecah keluarga", "merantau menghapus budaya", "kebersamaan tidak mungkin terjaga"],
      kunci: 0
    },

    // ---------- Subbab: Sejarah daerah ----------
    {
      soal: "Daerah X dahulu subur dengan kebun, kini menjadi kawasan perumahan. Dari cerita ini dapat disimpulkan bahwa …",
      pilihan: ["daerah X tidak pernah berubah", "fungsi dan kondisi daerah berubah seiring waktu", "daerah X selalu kota", "kebun masih mendominasi"],
      kunci: 1
    },
    {
      soal: "Perhatikan pasangan berikut: nama daerah GANDARIA — banyak pohon gandaria dulu. Hubungan keduanya menunjukkan bahwa nama daerah …",
      pilihan: ["tidak ada artinya", "berasal dari teknologi", "sering lahir dari kondisi alam masa lampau", "dibuat secara asal"],
      kunci: 2
    },
    {
      soal: "Sebuah desa dinamai dari nama seorang tokoh yang menolong warganya zaman dulu. Informasi ini menunjukkan bahwa asal-usul nama dapat berasal dari …",
      pilihan: ["hewan saja", "tumbuhan saja", "teknologi", "tokoh yang berjasa"],
      kunci: 3
    },
    {
      soal: "Maka untuk mengetahui apakah suatu daerah pernah menjadi hutan, kita paling tepat melihat …",
      pilihan: ["cerita lama dan catatan sejarah daerah itu", "daftar harga rumah saat ini", "jumlah kendaraan hari ini", "cuaca besok"],
      kunci: 0
    },

    // ---------- Subbab: Transportasi ----------
    {
      soal: "Perhatikan tabel! Dahulu orang bepergian dengan delman (lambat, tenaga kuda), kini dengan mobil (cepat, mesin). Kesimpulan yang tepat adalah …",
      pilihan: ["transportasi tidak berubah", "transportasi berkembang menjadi lebih cepat dengan mesin", "delman lebih cepat dari mobil", "mobil memakai tenaga kuda"],
      kunci: 1
    },
    {
      soal: "Penyebab utama orang berpindah dari delman ke mobil adalah …",
      pilihan: ["delman terlalu cepat", "kuda lebih banyak dari mesin", "keinginan perjalanan yang lebih cepat dan nyaman", "mobil tidak berguna"],
      kunci: 2
    },
    {
      soal: "Sebuah kota ramai dengan kendaraan bermesin dan mulai jarang memakai delman. Dari informasi ini dapat disimpulkan bahwa kota tersebut sedang …",
      pilihan: ["kembali ke zaman hewan", "melarang kendaraan", "menghapus jalan", "mengalami perubahan transportasi ke arah modern"],
      kunci: 3
    },
    {
      soal: "Jika dibandingkan untuk jarak jauh, pesawat lebih unggul daripada becak karena …",
      pilihan: ["perjalanan jauh lebih singkat", "becak lebih cepat", "pesawat tidak berpindah", "tidak ada bedanya"],
      kunci: 0
    },

    // ---------- Subbab: Komunikasi ----------
    {
      soal: "Pergesaran dari surat ke pesan internet menunjukkan bahwa cara manusia berkomunikasi …",
      pilihan: ["semakin lambat", "menjadi lebih cepat dan cepat menyebar", "tidak berubah", "hanya berganti kertas"],
      kunci: 1
    },
    {
      soal: "Ketika dahulu butuh beberapa hari untuk surat sampai, kini pesan sampai dalam hitungan detik. Hal ini berarti perkembangan komunikasi …",
      pilihan: ["memperlambat kabar", "menghapus komunikasi", "mempercepat penyampaian informasi", "tidak berpengaruh"],
      kunci: 2
    },
    {
      soal: "Hubungan antara penemuan telepon dan perubahan cara orang berkirim kabar adalah …",
      pilihan: ["telepon membuat orang tidak bisa bicara", "telepon menghapus semua bunyi", "telepon hanya untuk mainan", "telepon memungkinkan kabar sampai lebih cepat tanpa menunggu surat"],
      kunci: 3
    },
    {
      soal: "Bila seluruh warga desa beralih dari kentongan ke ponsel untuk memberi kabar, maka kecepatan informasi di desa itu …",
      pilihan: ["bertambah karena jangkauan lebih luas dan cepat", "menurun drastis", "tetap sama", "menjadi tidak ada"],
      kunci: 0
    },

    // ---------- Subbab: Rumah, pakaian & kebutuhan ----------
    {
      soal: "Rumah yang dahulu terbuat dari bambu kini dari batu bata. Penyebab utama perubahan ini adalah …",
      pilihan: ["bambu tidak pernah ada", "perkembangan bahan dan teknologi bangunan", "harga batu bata turun tak terkendali", "cuaca berubah"],
      kunci: 1
    },
    {
      soal: "Pakaian adat kini jarang dipakai sehari-hari, tetapi tetap ada saat upacara. Kesimpulan yang tepat adalah …",
      pilihan: ["pakaian adat hilang seluruhnya", "orang tidak mau memakai baju", "pakaian sehari-hari berubah, namun pakaian adat tetap lestari saat acara", "pakaian adat hanya untuk mainan"],
      kunci: 2
    },
    {
      soal: "Apabila suatu daerah dahulu sangat sederhana kini berkembang dengan gedung bertingkat, maka perubahan yang terjadi adalah pada …",
      pilihan: ["jenis tanah", "warna langit", "jumlah pohon saja", "bentuk dan model bangunan"],
      kunci: 3
    },

    // ---------- Subbab: Permainan ----------
    {
      soal: "Permainan anak berubah dari luar ruangan ke layar ponsel. Dampak yang paling mungkin terjadi pada kebugaran adalah …",
      pilihan: ["anak menjadi kurang bergerak", "anak lebih sehat dan kuat", "anak tidak terpengaruh", "anak makin banyak jalan"],
      kunci: 0
    },
    {
      soal: "Manakah kesimpulan yang tepat tentang pergeseran permainan tradisional ke digital?",
      pilihan: ["keduanya sama sekali sama", "permainan tradisional mengajak anak aktif, digital cenderung pasif", "digital selalu lebih sehat", "tradisional memakai layar"],
      kunci: 1
    },
    {
      soal: "Temanmu lebih suka bermain game sendirian di kamar daripada lompat tali di luar. Analisis terhadap kebiasaan ini adalah …",
      pilihan: ["ia sangat sehat", "ia paling aktif", "ia kurang bersosialisasi dan bergerak", "tidak ada yang perlu diperhatikan"],
      kunci: 2
    },

    // ---------- Subbab: Pekerjaan & IPTEK ----------
    {
      soal: "Perhatikan: IPTEK berkembang → cara manusia bekerja berubah. Hubungan sebab-akibat ini menunjukkan bahwa IPTEK merupakan …",
      pilihan: ["satu-satunya penyebab tanpa yang lain", "hal yang tidak penting", "musuh semua pekerjaan", "salah satu pemicu perubahan sosial"],
      kunci: 3
    },
    {
      soal: "Dahulu petani butuh waktu lama membajak dengan kerbau, kini traktor menyelesaikannya cepat. Perbandingan ini menunjukkan bahwa teknologi …",
      pilihan: ["mempersingkat waktu kerja petani", "membuat petani berhenti", "menambah tenaga kerbau", "tidak mengubah apa pun"],
      kunci: 0
    },
    {
      soal: "Murid-murid kini dapat belajar memakai video internet dari guru yang jauh. Dari informasi ini dapat disimpulkan bahwa teknologi …",
      pilihan: ["membatasi pembelajaran", "memperluas cara orang memperoleh ilmu", "menghapus sekolah", "hanya untuk bermain"],
      kunci: 1
    },
    {
      soal: "Penyebab banyak pedagang kini berjualan lewat internet daripada membuka toko saja adalah …",
      pilihan: ["internet menghapus jualan", "pedagang malas bekerja", "teknologi membuka jangkauan pembeli yang lebih luas", "toko tidak bermanfaat"],
      kunci: 2
    },

    // ---------- Subbab: Dampak perubahan ----------
    {
      soal: "Teknologi membawa kemudahan sekaligus risiko jika disalahgunakan. Kesimpulan yang paling tepat adalah bahwa perubahan …",
      pilihan: ["selalu baik tanpa risiko", "selalu buruk", "tidak pernah penting", "dapat berdampak positif sekaligus negatif"],
      kunci: 3
    },
    {
      soal: "Banyak bermain ponsel bisa membuat anak lupa belajar. Analisis terhadap dampak teknologi ini adalah …",
      pilihan: ["teknologi perlu dipakai dengan bijak agar tidak merugikan", "teknologi harus dilarang semua", "ponsel tidak berguna", "anak tidak mungkin belajar kalau ada ponsel"],
      kunci: 0
    },
    {
      soal: "Mesin cuci mempercepat pekerjaan ibu, tetapi butuh listrik. Hubungan ini menunjukkan bahwa setiap perubahan …",
      pilihan: ["tanpa kekurangan", "punya keuntungan sekaligus pertimbangan lain", "selalu merugikan", "tidak perlu diperhitungkan"],
      kunci: 1
    },
    {
      soal: "Agar tetap bijak, sebagian masyarakat memilih mempertahankan kebiasaan yang baik meski zaman berubah. Hal ini membuktikan bahwa …",
      pilihan: ["masyarakat menolak semua perubahan", "kebiasaan baik harus dibuang", "nilai baik tetap dipertahankan di tengah perubahan", "tradisi tidak penting"],
      kunci: 2
    },

    // ---------- Subbab: Situs budaya ----------
    {
      soal: "Candi dibiarkan rusak vs dijaga baik. Manakah kesimpulan tentang nilai sejarah yang tepat?",
      pilihan: ["situs rusak justru lebih berharga", "merawat candi membuang waktu", "candi bukan bagian sejarah", "situs yang dijaga tetap menyimpan cerita bagi generasi kini"],
      kunci: 3
    },
    {
      soal: "Banyak wisatawan datang ke situs bersejarah. Manfaat yang dapat ditarik dari kondisi ini bagi masyarakat sekitar adalah …",
      pilihan: ["pengenalan sejarah meningkat dan ekonomi bisa terbantu", "situs kehilangan arti", "semua orang melupakan sejarah", "tidak ada manfaat"],
      kunci: 0
    },
    {
      soal: "Apabila sebuah museum tidak dirawat, maka yang paling mungkin terjadi adalah …",
      pilihan: ["benda menjadi awet", "benda bersejarah cepat rusak dan cerita hilang", "cerita semakin hidup", "sejarah semakin dikenal"],
      kunci: 1
    }
  ],

  // =========================================================================
  // C5 — MENGEVALUASI
  // Menilai dampak, memutuskan pilihan, memberi pertimbangan terbaik.
  // =========================================================================
  C5: [
    // ---------- Subbab: Keluarga & asal-usul ----------
    {
      soal: "Beni diberi tugas menulis sejarah keluarga. Ia memilih wawancara langsung ke kakek daripada membaca cerita karangan. Keputusan Beni lebih baik karena …",
      pilihan: ["karangan lebih jujur", "kakek sering lupa", "informasi langsung lebih dapat dipercaya", "wawancara membuang waktu"],
      kunci: 2
    },
    {
      soal: "Antara mencatat cerita keluarga dan melupakannya begitu saja, sikap yang lebih bijak adalah …",
      pilihan: ["melupakannya lekas", "menghapus semua cerita", "menyamarkan sejarah keluarga", "mencatat dan mewariskannya agar tidak hilang"],
      kunci: 3
    },
    {
      soal: "Menurutmu, mengapa cerita keluarga yang sederhana pun tetap berharga untuk diceritakan ulang?",
      pilihan: ["karena memperkokoh rasa kekeluargaan dan ingatan asal-usul", "karena cerita itu tidak penting", "karena hanya cerita orang besar yang berarti", "karena keluarga bukan bagian sejarah"],
      kunci: 0
    },

    // ---------- Subbab: Tradisi ----------
    {
      soal: "Keluarga menilai tradisi berkumpul sangat penting untuk menjaga kedekatan. Keputusan paling tepat agar tradisi tetap hidup adalah …",
      pilihan: ["menghentikan tradisi karena sibuk", "tetap meluangkan waktu berkumpul dan mewariskan ke anak", "hanya mengikuti sekali", "melarang anak ikut"],
      kunci: 1
    },
    {
      soal: "Di antara tradisi yang tidak melanggar dan memberi nilai baik, sikap terbaik generasi muda adalah …",
      pilihan: ["menghindar karena malu", "menertawakannya", "ikut melestarikan dengan bangga", "menghapusnya"],
      kunci: 2
    },
    {
      soal: "Zaman berubah tetapi keluarga tetap memegang adab sopan santun. Penilaianmu terhadap keputusan ini adalah …",
      pilihan: ["salah karena harus ikut zaman", "tidak penting", "hanya untuk orang tua", "tepat karena nilai sopan santun tetap dibutuhkan"],
      kunci: 3
    },
    {
      soal: "Andai suatu tradisi mulai ditinggalkan banyak orang, menurutmu tindakan yang paling bijak adalah …",
      pilihan: ["mempelajari dan mengajak orang lain melestarikannya", "turut melupakannya", "meremehkan tradisi", "menjauh dari orang tua"],
      kunci: 0
    },
    {
      soal: "Menurutmu, manakah cara terbaik menyeimbangkan teknologi dan tradisi dalam sebuah keluarga?",
      pilihan: ["membuang semua tradisi demi teknologi", "memakai teknologi untuk hal berguna tetapi tetap menjaga tradisi", "menolak teknologi total", "hanya mengikuti tren"],
      kunci: 1
    },

    // ---------- Subbab: Sejarah daerah ----------
    {
      soal: "Kota kelahiranmu akan mengganti nama bersejarahnya dengan nama yang lebih modern. Penilaianmu terhadap rencana tersebut adalah …",
      pilihan: ["nama harus segera diganti", "sejarah tidak penting", "sebaiknya nama bersejarah dipertahankan agar ceritanya lestari", "nama tidak berpengaruh apa pun"],
      kunci: 2
    },
    {
      soal: "Menurutmu, yang paling tepat dilakukan agar generasi muda mengenal sejarah kotanya adalah …",
      pilihan: ["menyembunyikan sejarah", "merobohkan bangunan tua", "melupakan masa lalu", "sering menceritakan dan mengunjungi tempat bersejarah"],
      kunci: 3
    },
    {
      soal: "Ada keinginan meratakan candi tua untuk membangun jalan baru. Pandanganmu yang paling tepat adalah …",
      pilihan: ["candi bernilai sejarah, sebaiknya dilestarikan dan dicari jalan lain", "jalan lebih penting, candi boleh dihancurkan", "candi tidak berguna", "semua boleh dihancurkan"],
      kunci: 0
    },

    // ---------- Subbab: Transportasi ----------
    {
      soal: "Untuk perjalanan dekat di dalam kota yang ramai, menurutmu alat yang paling bijak dipilih agar hemat dan tidak macet adalah …",
      pilihan: ["pesawat", "sepeda atau transportasi umum", "kapal selam", "roket"],
      kunci: 1
    },
    {
      soal: "Delman masih dipakai untuk menarik wisatawan di kota tua. Penilaianmu terhadap pemakaian ini adalah …",
      pilihan: ["harus segera dilarang", "kuda tidak boleh dipakai", "tepat karena melestarikan transportasi tradisional sambil ekonomi", "tidak bermanfaat"],
      kunci: 2
    },
    {
      soal: "Di antara kendaraan bermesin yang mengeluarkan asap dan sepeda ramah lingkungan, untuk jarak dekat menurutmu pilihan yang paling baik adalah …",
      pilihan: ["mobil karena lebih keren", "motor karena paling cepat", "semua sama saja", "sepeda karena tidak menimbulkan polusi"],
      kunci: 3
    },
    {
      soal: "Sebuah desa belum punya listrik dan ingin mengangkut hasil panen. Di antara pilihan berikut, yang paling realistis dan bijak adalah …",
      pilihan: ["menggunakan alat sederhana yang tersedia seperti gerobak/tenaga hewan", "menunggu pesawat", "memaksa mobil tanpa bahan bakar", "mengirim dengan internet"],
      kunci: 0
    },
    {
      soal: "Menurutmu, apakah penting tetap mengenalkan transportasi tradisional kepada anak-anak di zaman mobil ini?",
      pilihan: ["tidak penting sama sekali", "penting, agar mereka tahu sejarah perjalanan manusia", "hanya membuang waktu", "hanya untuk orang tua"],
      kunci: 1
    },

    // ---------- Subbab: Komunikasi ----------
    {
      soal: "Menurutmu, cara paling bijak berkomunikasi agar tetap dekat dengan kakek yang jauh adalah …",
      pilihan: ["hanya mengirim sekali setahun", "tidak perlu menghubungi", "rajin menelepon dan sesekali berkunjung", "menanti kakek datang sendiri"],
      kunci: 2
    },
    {
      soal: "Teknologi memungkinkan kabar tersebar sangat cepat tetapi berisiko hoaks. Sikap paling bijak saat menerima kabar adalah …",
      pilihan: ["langsung menyebarkan", "mempercayai semua kabar", "mengabaikan kebenaran", "memeriksa kembali kebenarannya sebelum menyebar"],
      kunci: 3
    },
    {
      soal: "Antara mengirim surat yang hangat namun lama dan pesan cepat namun singkat untuk sebuah ucapan penting kepada nenek, menurutmu pilihan yang paling berkesan adalah …",
      pilihan: ["menyesuaikan dengan kondisi, yang penting tetap menyapa nenek", "tidak perlu menyapa", "hanya mengirim gambar", "menunggu nenek bertanya dulu"],
      kunci: 0
    },
    {
      soal: "Setuju atau tidak, apakah bertamu langsung lebih hangat daripada sekadar mengirim pesan? Alasan yang paling tepat adalah …",
      pilihan: ["pesan lebih hangat", "bertemu langsung mempererat hubungan lebih dalam", "tidak ada bedanya", "bertamu membuang waktu"],
      kunci: 1
    },
    {
      soal: "Seorang teman ingin terus-menerus memakai ponsel saat bermain di rumahmu. Keputusan paling bijak adalah …",
      pilihan: ["ikut bermain ponsel terus", "mengabaikannya", "mengajaknya bermain bersama tanpa ponsel agar lebih dekat", "menyembunyikan ponselnya diam-diam"],
      kunci: 2
    },

    // ---------- Subbab: Rumah, pakaian & kebutuhan ----------
    {
      soal: "Ada kampung yang ingin membangun rumah dari beton dan baja di daerah yang panas tanpa ventilasi. Menurutmu keputusan yang lebih bijak adalah …",
      pilihan: ["membangun tanpa ventilasi", "mengabaikan kenyamanan", "meniru persis model asing", "menyesuaikan desain agar tetap sejuk dan sesuai lingkungan"],
      kunci: 3
    },
    {
      soal: "Menurutmu, mengapa pakaian adat sebaiknya tetap dipakai di acara tertentu walaupun jarang dipakai sehari-hari?",
      pilihan: ["agar budaya tetap lestari dan dikenali generasi muda", "karena pakaian adat lebih nyaman untuk olahraga", "agar cepat usang", "tidak ada alasannya"],
      kunci: 0
    },
    {
      soal: "Antara mengikuti tren pakaian terus-menerus atau tetap memakai yang layak dan hemat, sikap yang lebih bijak adalah …",
      pilihan: ["selalu membeli tren terbaru", "menjaga pembelian bijak tanpa harus selalu ikut tren", "tidak memakai baju", "membeli semua yang ada di toko"],
      kunci: 1
    },
    {
      soal: "Menurutmu, apakah penting bagi keluarga membiasakan hidup sederhana meski teknologi memudahkan segalanya?",
      pilihan: ["tidak penting, boleh boros", "hanya untuk orang miskin", "penting agar tidak boros dan tetap menghargai", "hanya orang tua yang perlu"],
      kunci: 2
    },

    // ---------- Subbab: Permainan ----------
    {
      soal: "Agar anak tidak kecanduan permainan digital, keputusan paling bijak dari orang tua adalah …",
      pilihan: ["membiarkan bebas tanpa batas", "melarang sama sekali", "memberi ponsel lebih banyak", "membatasi waktu dan menawarkan permainan aktif"],
      kunci: 3
    },
    {
      soal: "Menurutmu, permainan mana yang lebih membantu melatih kebersamaan dengan teman sebaya?",
      pilihan: ["permainan tradisional yang dimainkan bersama", "permainan digital sendirian", "menonton saja", "merebut mainan teman"],
      kunci: 0
    },
    {
      soal: "Andai kamu harus memilih satu kegiatan sore ini antara main game di layar atau main kelereng dengan teman di halaman, pilihan yang lebih menyehatkan dan seru bersama adalah …",
      pilihan: ["main game sendirian", "bermain kelereng dengan teman di halaman", "tidur", "duduk diam"],
      kunci: 1
    },
    {
      soal: "Menurutmu, cara yang baik memperkenalkan permainan tradisional kepada anak-anak yang terbiasa main gawai adalah …",
      pilihan: ["memaksa tanpa menjelaskan", "menertawakan permainan lama", "mengajak bermain langsung dengan seru dan menyenangkan", "melarang gawai total"],
      kunci: 2
    },

    // ---------- Subbab: Pekerjaan & IPTEK ----------
    {
      soal: "Sesuai prinsip penggunaan teknologi yang bijak, keputusan paling tepat saat mesin di sekolah rusak adalah …",
      pilihan: ["membuangnya", "mengabaikannya", "menjual suku cadang", "melapor dan memperbaikinya agar tetap bermanfaat"],
      kunci: 3
    },
    {
      soal: "Menurutmu, apakah perkembangan IPTEK selalu membawa kebaikan?",
      pilihan: ["tidak selalu, bergantung cara kita memakai dan menyikapinya", "selalu baik tanpa kecuali", "tidak pernah baik", "hanya baik untuk yang berkuasa"],
      kunci: 0
    },
    {
      soal: "Ketika mesin dapat menggantikan banyak pekerjaan manusia, keputusan paling bijak manusia adalah …",
      pilihan: ["berhenti bekerja total", "belajar keterampilan baru agar tetap berguna", "menolak semua mesin", "bergantung sepenuhnya pada mesin"],
      kunci: 1
    },
    {
      soal: "Seorang petani memilih memakai traktor untuk mempercepat panen tetapi juga menjaga tanah agar tetap subur. Penilaianmu terhadap keputusan tersebut adalah …",
      pilihan: ["salah karena memakai mesin", "tidak penting", "tepat karena manusiawi dan menjaga lingkungan", "terlalu ribet"],
      kunci: 2
    },

    // ---------- Subbab: Dampak perubahan ----------
    {
      soal: "Sebuah keluarga menyadari teknologi memudahkan tetapi khawatir anggotanya menjadi kurang akrab. Keputusan paling seimbang yang mereka ambil adalah …",
      pilihan: ["melarang semua gawai", "membiarkan semua bermain sendiri", "meninggalkan rumah", "memadukan pemakaian teknologi dengan kegiatan bersama tanpa gawai"],
      kunci: 3
    },
    {
      soal: "Menurutmu, apakah lebih baik menerima semua perubahan atau menolak semua perubahan?",
      pilihan: ["yang bijak adalah menerima manfaat dan tetap menjaga nilai baik", "menerima semua tanpa pikir", "menolak semua", "tidak peduli"],
      kunci: 0
    },
    {
      soal: "Teknologi membuat banyak hal cepat, tetapi bisa membuat orang malas bergerak dan kurang bersosialisasi. Solusi paling tepat adalah …",
      pilihan: ["memakai teknologi terus-menerus", "membatasi pemakaian dan tetap aktif bersama orang lain", "berhenti memakai teknologi selamanya", "menyendiri"],
      kunci: 1
    },
    {
      soal: "Andai kamu menilai suatu perubahan lebih banyak mudaratnya bagi keluarga, keputusan yang paling tepat adalah …",
      pilihan: ["ikut saja karena zaman berubah", "bersikap masa bodoh", "menghindari hal yang merugikan dan memakai yang bermanfaat", "menyalahkan semua teknologi"],
      kunci: 2
    },
    {
      soal: "Menurutmu, kapan sebaiknya masyarakat tetap mempertahankan kebiasaan lama?",
      pilihan: ["selalu menolak cara baru", "hanya saat terpaksa", "tidak pernah perlu", "ketika kebiasaan itu memberi nilai baik dan tidak merugikan"],
      kunci: 3
    },

    // ---------- Subbab: Situs budaya ----------
    {
      soal: "Ada sebuah makam bersejarah di kampungmu akan diubah menjadi lahan parkir. Pandangan yang paling tepat menurutmu adalah …",
      pilihan: ["mempertahankan makam karena nilai sejarah dan mencari lahan lain", "mendukung pembangunan parkir", "mengabaikan nilai sejarah", "merelakan tanpa berpikir"],
      kunci: 0
    },
    {
      soal: "Menurutmu, cara terbaik agar wisatawan tetap bisa menikmati candi tanpa merusaknya adalah …",
      pilihan: ["membiarkan siapa saja mencorat-coret", "membuat aturan menjaga dan menyediakan pemandu", "menutup candi selamanya", "menghapus cerita candi"],
      kunci: 1
    },
    {
      soal: "Antara menjadikan tempat bersejarah sebagai area komersial bebas atau area pelestarian terkontrol, pilihan yang lebih bijak adalah …",
      pilihan: ["menjadikan bebas komersial", "membiarkan rusak", "melestarikan dengan kontrol agar sejarah tetap terjaga", "tidak peduli"],
      kunci: 2
    },
    {
      soal: "Menurutmu, seberapa penting peran sekolah dan keluarga dalam menumbuhkan rasa cinta terhadap situs budaya?",
      pilihan: ["tidak penting", "hanya penting untuk orang dewasa", "itu urusan pemerintah saja", "sangat penting karena anak belajar menghargai sejarah sejak dini"],
      kunci: 3
    },
    {
      soal: "Andai kamu menemukan ada orang yang mencoret dinding candi, tindakan paling bertanggung jawab adalah …",
      pilihan: ["melapor pada petugas dan menegur agar berhenti", "ikut mencoret", "berpura-pura tidak melihat", "merekam lalu menyebarkan tanpa bertindak"],
      kunci: 0
    }
  ]
};

// Catatan: untuk memudahkan pemuatan di aplikasi belajar, pastikan file
// ini dipanggil sebelum kode kuis yang membaca const bankSoalIPASBab2.
