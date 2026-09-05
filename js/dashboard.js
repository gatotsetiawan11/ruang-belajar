<Artifact identifier="dashboard-js-full" type="text/javascript" language="javascript" title="dashboard.js - Logika Lengkap"> ```javascript // ========================================================= // DASHBOARD.JS - LOGIKA LENGKAP // =========================================================
document.addEventListener("DOMContentLoaded", () => {

// ============================================
// CEK LOGIN
// ============================================
const token = localStorage.getItem("student_token");
const studentName = localStorage.getItem("student_name");

if (!token) {
window.location.href = "index.html";
return;
}

document.getElementById("greet").textContent = Halo, ${studentName}!;
document.getElementById("kelasBadge").textContent = "Siswa";

// ============================================
// DATA BAB PER MAPEL (Kelas 3)
// ============================================
const DATA_MAPEL = {
'Pendidikan Pancasila': {
icon: '🦅',
aksenMapel: 'mp-pancasila',
aksenBab: 'bab-pancasila',
label: 'Bab',
daftar: [
'Aku Anak Indonesia',
'Aku Patuh Aturan',
'Berbeda Itu Indah',
'Ayo Mengenal Pancasila'
]
},
'Bahasa Indonesia': {
icon: '📖',
aksenMapel: 'mp-indo',
aksenBab: 'bab-indo',
label: 'Bab',
daftar: [
'Petualangan Ken dan Alif',
'Semangat Si Pantang Menyerah',
'Bintang Inspirasiku',
'Tulis Ceritamu',
'Sahabat Sungai Mahakam',
'Istana yang Membawa Bencana',
'Dengarkan Dongeng Seru',
'Dongengku, Karyaku'
]
},
'Matematika': {
icon: '➕',
aksenMapel: 'mp-mtk',
aksenBab: 'bab-mtk',
label: 'Bab',
daftar: [
'Bilangan Cacah sampai 1.000',
'Kalimat Matematika',
'Pengukuran Panjang dan Berat',
'Unsur-Unsur Bangun Datar',
'Penyajian Data dalam Tabel'
]
},
'IPAS': {
icon: '🔬',
aksenMapel: 'mp-ipas',
aksenBab: 'bab-ipas',
label: 'Bab',
daftar: [
'Keajaiban Tubuhku',
'Dahulu, Kini, dan Nanti',
'Peduli dan Berbagi',
'Siklus Hidup yang Menakjubkan',
'Bijak Berbelanja Kebutuhan',
'Energi, sang Pemberi Kekuatan',
'Jejak Penjelajah',
'Rahasia Tiga Wujud Zat'
]
},
'Bahasa Inggris': {
icon: '🌍',
aksenMapel: 'mp-inggris',
aksenBab: 'bab-inggris',
label: 'Chapter',
daftar: [
'My Self',
'My Family',
"My Family's Activities at Home",
'My School',
'My Classroom',
'My Teacher'
]
}
};

const DATA_LEVEL = [
{ kode: 'C1', nama: 'Mengingat', ket: 'mengingat materi', cls: 'lv-c1' },
{ kode: 'C2', nama: 'Memahami', ket: 'memahami konsep', cls: 'lv-c2' },
{ kode: 'C3', nama: 'Menerapkan', ket: 'menerapkan konsep', cls: 'lv-c3' },
{ kode: 'C4', nama: 'Menganalisis', ket: 'menganalisis masalah', cls: 'lv-c4' },
{ kode: 'C5', nama: 'Mengevaluasi', ket: 'menilai / mengevaluasi',cls: 'lv-c5' }
];

// State aktif
let mapelAktif = null;

// ============================================
// REFERENSI ELEMEN
// ============================================
const kelasSection = document.getElementById('kelasSection');
const mapelSection = document.getElementById('mapelSection');
const babSection = document.getElementById('babSection');
const levelSection = document.getElementById('levelSection');

const classList = document.getElementById('classList');
const mapelList = document.getElementById('mapelList');
const babList = document.getElementById('babList');
const levelList = document.getElementById('levelList');

// ============================================
// RENDER KELAS (1–6)
// ============================================
const classes = [1, 2, 3, 4, 5, 6];
classList.innerHTML = '';

classes.forEach(kelas => {
const card = document.createElement('div');
card.className = 'card';
card.innerHTML = `

<div class="icon">📚</div> <h3>Kelas ${kelas}</h3> <p>Materi dan latihan</p> `;
card.addEventListener('click', () => {
if (kelas === 3) {
showMapel();
} else {
alert('Materi kelas ini belum tersedia');
}
});

classList.appendChild(card);
});

// ============================================
// FUNGSI TAMPILKAN SECTION
// ============================================
function showSection(section) {
// Sembunyikan semua
kelasSection.classList.add('hidden');
mapelSection.classList.add('hidden');
babSection.classList.add('hidden');
levelSection.classList.add('hidden');

// Tampilkan yang diminta
section.classList.remove('hidden');
section.scrollIntoView({ behavior: 'smooth' });
}

// ============================================
// SECTION MAPEL
// ============================================
function showMapel() {
mapelList.innerHTML = '';

for (const [nama, m] of Object.entries(DATA_MAPEL)) {
const card = document.createElement('div');
card.className = 'card ' + m.aksenMapel;
card.innerHTML = `

<div class="icon">${m.icon}</div> <h3>${nama}</h3> <p>Kelas 3</p> `;
card.addEventListener('click', () => showBab(nama));
mapelList.appendChild(card);
}

showSection(mapelSection);
}

// ============================================
// SECTION BAB
// ============================================
function showBab(mapel) {
mapelAktif = mapel;
const m = DATA_MAPEL[mapel];

document.getElementById('judulBab').textContent =
${m.icon} ${mapel};

babList.innerHTML = '';

m.daftar.forEach((judulBab, idx) => {
const item = document.createElement('div');
item.className = 'list-item ' + m.aksenBab;
item.innerHTML = <span class="label">${m.label} ${idx + 1}</span> <span class="nama">${judulBab}</span> ;

item.addEventListener('click', () => showLevel(mapel, idx + 1));
babList.appendChild(item);
});

showSection(babSection);
}

// ============================================
// SECTION LEVEL
// ============================================
function showLevel(mapel, noBab) {
const m = DATA_MAPEL[mapel];
const namaBab = m.daftar[noBab - 1];

document.getElementById('judulLevel').textContent =
${m.icon} ${mapel} — ${m.label} ${noBab}: ${namaBab};

levelList.innerHTML = '';

DATA_LEVEL.forEach(lv => {
const item = document.createElement('div');
item.className = 'list-item ' + lv.cls;
item.innerHTML = <span class="label">${lv.kode}</span> <span class="nama">${lv.nama}</span> <span class="keterangan">${lv.ket}</span> ;

item.addEventListener('click', () => {
// Ganti dengan halaman latihan/soal
window.location.href =
latihan.html?kelas=3&mapel=${encodeURIComponent(mapel)}&bab=${noBab}&level=${lv.kode};
});

levelList.appendChild(item);
});

showSection(levelSection);
}

// ============================================
// TOMBOL KEMBALI
// ============================================
document.getElementById('backFromMapel').addEventListener('click', () => {
showSection(kelasSection);
});

document.getElementById('backFromBab').addEventListener('click', () => {
showMapel(); // render ulang mapel
});

document.getElementById('backFromLevel').addEventListener('click', () => {
if (mapelAktif) {
showBab(mapelAktif); // kembali ke bab mapel yang sama
} else {
showSection(mapelSection);
}
});

// ============================================
// LOGOUT
// ============================================
document.getElementById('logoutBtn').addEventListener('click', () => {
localStorage.clear();
window.location.href = 'index.html';
});

});
