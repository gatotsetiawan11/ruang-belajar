// ======================================================
// DASHBOARD
// Halaman setelah login berhasil.
// - memvalidasi sesi lokal
// - menampilkan identitas dari sesi (yang disimpan saat login)
// - tombol keluar
//
// CATATAN sesi saat ini adalah token acak lokal (development).
// ======================================================

document.addEventListener("DOMContentLoaded", initDashboard);

// storage keys (harus sama dengan login.js)
const LOGIN_MODE_KEY    = "login_mode";
const SESSION_TOKEN_KEY = "student_session_token";

// placeholder utk info profil (opsional: saat ini hanya token & identifier yg tersimpan)
// Bila diperlukan ambil detail siswa via RPC berdasarkan token - utk saat ini
// dashboard memakai info yg dikirim saat login (student_code tdk disimpan penuh).
// Di sini kita tampilkan yg tersedia; untuk detail lengkap perlu endpoint profile.

const sessionTokenEl = document.getElementById("sessionNote");
const userInitialEl  = document.getElementById("userInitial");
const navbarNameEl   = document.getElementById("navbarUserName");
const logoutBtn      = document.getElementById("logoutButton");

// Field yang tampil
const heroNameEl    = document.getElementById("heroUserName");
const profileNameEl = document.getElementById("profileName");
const profileNisnEl = document.getElementById("profileNisn");
const profileCodeEl = document.getElementById("profileCode");
const profileClassEl= document.getElementById("profileClass");


function initDashboard() {
    const mode = sessionStorage.getItem(LOGIN_MODE_KEY);

    // Belum login (mode bukan 'student') -> lempar ke index
    if (mode !== "student") {
        window.location.href = "index.html";
        return;
    }

    // ambil token (validasi minimal: ada)
    const token = sessionStorage.getItem(SESSION_TOKEN_KEY);
    if (!token) {
        window.location.href = "index.html";
        return;
    }

    // --- isi UI ---
    // Info nama/nisn: FLOW LOGIN BELUM MENYIMPAN detail lengkap. Karena itu
    // kita tampilkan petunjuk & data sesi yg tersedia.
    // Untuk produksi, idealnya RPC profile dipanggil utk ambil nama dari token.
    // (dibahas di catatan lanjutan.)

    // contoh default
    const fallbackName = "Siswa";
    heroNameEl.textContent = fallbackName;
    navbarNameEl.textContent = fallbackName;
    profileNameEl.textContent = "(ambil dari progres / future RPC)";
    userInitialEl.textContent = "S";

    // catatan sesi utk keperluan dev
    if (sessionTokenEl) {
        const shortToken = token.length > 16 ? token.slice(0, 16) + "…" : token;
        sessionTokenEl.textContent = "Mode pengembangan — token sesi (lokal): " + shortToken;
    }

    // event logout
    logoutBtn.addEventListener("click", handleLogout);
}


function handleLogout() {
    if (confirm("Yakin ingin keluar?")) {
        sessionStorage.clear();
        window.location.href = "index.html";
    }
}
