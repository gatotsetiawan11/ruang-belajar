// ======================================================
// DASHBOARD (v2 - sesi nyata via get_my_profile)
// ======================================================
document.addEventListener("DOMContentLoaded", initDashboard);

const LOGIN_MODE_KEY    = "login_mode";
const SESSION_TOKEN_KEY = "student_session_token";

// dom refs
const userInitialEl   = document.getElementById("userInitial");
const navbarNameEl    = document.getElementById("navbarUserName");
const heroNameEl      = document.getElementById("heroUserName");

const profileNameEl   = document.getElementById("profileName");
const profileNisnEl   = document.getElementById("profileNisn");
const profileCodeEl   = document.getElementById("profileCode");
const profileClassEl  = document.getElementById("profileClass");
const sessionNoteEl   = document.getElementById("sessionNote");
const logoutBtn       = document.getElementById("logoutButton");


async function initDashboard() {
    const mode  = sessionStorage.getItem(LOGIN_MODE_KEY);
    const token = sessionStorage.getItem(SESSION_TOKEN_KEY);

    // belum login -> index
    if (mode !== "student" || !token) {
        window.location.href = "index.html";
        return;
    }

    // set default segera (anti-flicker) dari cache lokal
    const cachedName = sessionStorage.getItem("student_name");
    if (cachedName) {
        navbarNameEl.textContent = cachedName;
        userInitialEl.textContent = (cachedName[0] || "S").toUpperCase();
    }

    // 1. validasi sesi & ambil profil dari server
    await loadProfile(token);

    logoutBtn.addEventListener("click", () => handleLogout(token));
}


async function loadProfile(token) {
    try {
        const { data, error } = await window.db.rpc("get_my_profile", { p_token: token });

        if (error) throw error;
        if (!data || data.length === 0) throw new Error("Respons kosong.");
        const p = data[0];

        if (!p.success) {
            // token tak valid / kadaluarsa -> kembalikan ke login & bersihkan
            showFatal(p.message || "Sesi berakhir.");
            return;
        }

        // isi UI dari profil server (sumber kebenaran)
        const name = p.full_name || "Siswa";

        navbarNameEl.textContent  = name;
        heroNameEl.textContent    = name;
        userInitialEl.textContent = (name[0] || "S").toUpperCase();

        profileNameEl.textContent  = p.full_name || "-";
        profileNisnEl.textContent  = p.nisn || "-";
        profileCodeEl.textContent  = p.student_code || "-";
        profileClassEl.textContent = p.class_name || "-";

        sessionStorage.setItem("student_name", p.full_name || "");
        sessionStorage.setItem("student_nisn", p.nisn || "");

    } catch (e) {
        console.error("Profile load error:", e);
        showFatal("Tidak dapat memuat profil.");
    }
}


// sesi bermasalah -> bersihkan & ke login
function showFatal(msg) {
    if (sessionNoteEl) sessionNoteEl.textContent = msg;
    // tampilkan tombol keluar utk kembali
    // (atau langsung logout otomatis). Utk keamanan sederhana:
    // kita beri waktu lalu lempar ke login
    setTimeout(() => {
        sessionStorage.clear();
        window.location.href = "index.html";
    }, 2000);
}


async function handleLogout(token) {
    try {
        // panggil RPC logout utk hapus sesi di server
        if (token) await window.db.rpc("logout_student", { p_token: token });
    } catch (e) {
        console.warn("Logout server warning:", e);
    }

    sessionStorage.clear();
    window.location.href = "index.html";
}
