// ======================================================
// LATIHAN SISWA
// REGISTER + AKTIVASI (SHA-256, tanpa guest)
//
// MODE :
//   'self'       - registrasi siswa baru (masukan data,
//                   minimal 1 identitas, lalu set PIN)
//   'activation' - aktivasi : siswa sudah ada (pin bcrypt lama /
//                   pin_must_change) -> set PIN baru SHA-256
//
// PIN disimpan sebagai hash SHA-256 via RPC.
// TIDAK menyimpan pin plain.
// ======================================================

document.addEventListener("DOMContentLoaded", initRegisterPage);


// ======================================================
// STORAGE KEYS  (harus sama dengan login.js)
// ======================================================
const REGISTER_MODE_KEY    = "register_mode";
const PENDING_NISN_KEY     = "pending_nisn";
const PENDING_NAME_KEY     = "pending_student_name";
const PENDING_IDENTITY_KEY = "pending_identity";
const PENDING_ID_TYPE_KEY  = "pending_id_type";


// ======================================================
// DOM
// ======================================================
const modeBadge     = document.getElementById("modeBadge");
const modeTitle     = document.getElementById("modeTitle");
const modeDesc      = document.getElementById("modeDesc");

const dataForm      = document.getElementById("dataForm");
const regName       = document.getElementById("regName");
const regClass      = document.getElementById("regClass");
const regNisn       = document.getElementById("regNisn");
const regPhone      = document.getElementById("regPhone");
const regEmail      = document.getElementById("regEmail");
const regButton     = document.getElementById("regButton");
const regDataMessage= document.getElementById("regDataMessage");

const pinForm       = document.getElementById("pinForm");
const confirmName   = document.getElementById("confirmName");
const confirmIdentity=document.getElementById("confirmIdentity");
const modeNote      = document.getElementById("modeNote");
const regPin        = document.getElementById("regPin");
const regPinConfirm = document.getElementById("regPinConfirm");
const submitPinButton=document.getElementById("submitPinButton");
const regPinMessage = document.getElementById("regPinMessage");


// ======================================================
// STATE
// ======================================================
let currentMode = "self";
// Untuk mode activation: data siswa yang diarahkan dari login
let activationIdentity = "";
let activationType     = "nisn";
let activationName     = "";

// Data registrasi yang berhasil lalu lanjut set PIN
let pendingNewNisn     = "";
let pendingNewName     = "";


// ======================================================
// INIT
// ======================================================
function initRegisterPage() {

    // 1) Baca mode dari sessionStorage
    const storedMode = sessionStorage.getItem(REGISTER_MODE_KEY);

    if (storedMode === "activation") {
        currentMode = "activation";
        loadActivationContext();
    } else {
        currentMode = "self";
    }

    // 2) Keluar dulu jika datang tanpa mode jelas & tanpa perlu register
    //    (agar halaman dituju memang dari alur yang benar)
    if (currentMode === "self") {
        // opsional validasi data dari login, biarkan
    }

    renderModeUi();

    // 3) Event
    dataForm.addEventListener("submit", handleDataSubmit);
    pinForm.addEventListener("submit", handlePinSubmit);

    // numeric only untuk NISN
    regNisn.addEventListener("input", () => {
        regNisn.value = regNisn.value.replace(/\D/g, "").slice(0, 10);
    });

    // numeric only + max untuk phone (sisakan max 15)
    regPhone.addEventListener("input", () => {
        regPhone.value = regPhone.value.replace(/\D/g, "");
    });

    regPin.addEventListener("input", () => {
        regPin.value = regPin.value.replace(/\D/g, "").slice(0, 6);
    });

    regPinConfirm.addEventListener("input", () => {
        regPinConfirm.value = regPinConfirm.value.replace(/\D/g, "").slice(0, 6);
    });
}


// ======================================================
// LOAD CONTEXT AKTIVASI
// ======================================================
function loadActivationContext() {
    activationIdentity = sessionStorage.getItem(PENDING_NISN_KEY) || "";
    activationType     = sessionStorage.getItem(PENDING_ID_TYPE_KEY) || "nisn";
    activationName     = sessionStorage.getItem(PENDING_NAME_KEY) || "";

    // Fullname mungkin tak tersedia dari login (kalau status needs_pin_reset
    // dari get_student_account_status TIDAK mengembalikan nama).
    // Siasat: kita simpan identitas saja; boleh kosong nama. Bila tak ada,
    // admin/siswa harus konfirmasi identitas yg tertera.
}


// ======================================================
// RENDER UI BERDASAR MODE
// ======================================================
function renderModeUi() {
    if (currentMode === "activation") {
        modeBadge.textContent = "Aktivasi";
        modeTitle.textContent = "Setel PIN Baru";
        modeDesc.textContent  = "Akun Anda perlu menyetel PIN baru agar dapat digunakan.";

        // Tampilkan hanya form PIN (data sudah ada)
        dataForm.hidden = true;
        pinForm.hidden  = false;

        // Identitas tampil utk konfirmasi. Nama bisa kosong bila tak tersedia
        const identLabel = (activationType === "nisn" ? "NISN"
                          : activationType === "phone" ? "No WA"
                          : "Email");
        confirmIdentity.textContent = `${identLabel}: ${activationIdentity}`;
        confirmName.textContent = activationName || "(nama tidak tersedia)";

        modeNote.textContent =
            "Karena metode pengamanan PIN diperbarui, Anda perlu membuat PIN baru 6 digit. Pastikan ini benar-benar akun Anda.";
        regPin.focus();
        return;
    }

    // mode self
    modeBadge.textContent = "Pendaftaran";
    modeTitle.textContent = "Lengkapi Data Diri";
    modeDesc.textContent  = "Isi minimal satu identitas (NISN / no WhatsApp / email).";
    dataForm.hidden = false;
    pinForm.hidden  = true;
    regName.focus();
}


// ======================================================
// SUBMIT DATA (mode self)
// ======================================================
async function handleDataSubmit(event) {
    event.preventDefault();
    clearMessage(regDataMessage);

    const name  = regName.value.trim();
    const klass = regClass.value.trim();
    const nisn  = regNisn.value.trim();
    let phone   = regPhone.value.trim();
    const email = regEmail.value.trim().toLowerCase();

    // --- validasi ---
    const hasAnyIdentity = nisn || phone || email;
    let firstError = null;

    if (!hasAnyIdentity) firstError = "Isi minimal satu identitas (NISN, WhatsApp, atau email).";

    if (!firstError && nisn && !/^[0-9]{10}$/.test(nisn)) {
        firstError = "NISN harus tepat 10 digit (atau kosongkan).";
    }
    if (!firstError && phone && !/^\+?[0-9]{9,15}$/.test(phone)) {
        firstError = "Nomor WhatsApp tidak valid.";
    }
    if (!firstError && email && !/^\S+@\S+\.\S+$/.test(email)) {
        firstError = "Format email tidak valid.";
    }

    if (firstError) {
        showMessage(regDataMessage, firstError, "error");
        return;
    }

    setButtonLoading(regButton, true, "Menyimpan...");

    try {
        // Simpan si siswa. RPC `register_student` (lihat schema.sql lanjutan)
        // Mendaftarkan siswa baru lalu mengembalikan identitas terpilih & nama.
        const { data, error } = await window.db.rpc("register_student", {
            p_name  : name,
            p_class : klass,
            p_nisn  : nisn || null,
            p_phone : phone || null,   // raw; normalisasi done di server
            p_email : email || null
        });

        if (error) throw error;
        if (!data || !Array.isArray(data) || data.length === 0) {
            throw new Error("Tidak ada respons registrasi.");
        }

        const res = data[0];

        if (!res.success) {
            showMessage(regDataMessage, res.message || "Pendaftaran gagal.", "error");
            return;
        }

        // --- lanjut set PIN baru di form ini ---
        currentMode = "activation"; // reuse flow set pin
        pendingNewName = res.full_name;
        // simpan identitas yg baru utk konfirm akhir
        const chosenType = nisn ? "nisn" : phone ? "phone" : "email";
        const chosenVal  = nisn ? nisn : (phone ? phone : email);
        activationIdentity = chosenVal;
        activationType     = chosenType;
        activationName     = name;

        // simpan ke session supaya kalau refresh masih ingat sedang aktivasi baru
        sessionStorage.setItem(REGISTER_MODE_KEY, "activation");
        sessionStorage.setItem(PENDING_NISN_KEY, chosenVal);
        sessionStorage.setItem(PENDING_ID_TYPE_KEY, chosenType);
        sessionStorage.setItem(PENDING_NAME_KEY, name);

        showDataStepHidden_pinVisible();

    } catch (error) {
        console.error("Register error:", error);
        showMessage(regDataMessage, "Gagal mendaftar. Coba lagi.", "error");
    } finally {
        setButtonLoading(regButton, false, "Daftar");
    }
}

function showDataStepHidden_pinVisible() {
    dataForm.hidden = true;
    pinForm.hidden  = false;

    // update UI
    modeBadge.textContent = "Buat PIN";
    modeTitle.textContent = "Buat PIN Akun";
    modeDesc.textContent  = "Ingat baik-baik PIN 6 digit Anda.";
    confirmName.textContent = activationName || "-";
    const identLabel = (activationType === "nisn" ? "NISN"
                      : activationType === "phone" ? "No WA"
                      : "Email");
    confirmIdentity.textContent = `${identLabel}: ${activationIdentity}`;

    modeNote.textContent =
        "PIN Anda akan disimpan aman (ter-hash). Jangan beri tahu siapa pun.";
    clearMessage(regPinMessage);
    regPin.value = "";
    regPinConfirm.value = "";
    regPin.focus();
}


// ======================================================
// SUBMIT PIN (activation SET / self registration set)
// ======================================================
async function handlePinSubmit(event) {
    event.preventDefault();
    clearMessage(regPinMessage);

    if (!activationIdentity) {
        showMessage(regPinMessage, "Data identitas hilang. Silakan ulangi.", "error");
        return;
    }

    const pin = regPin.value;
    const pin2 = regPinConfirm.value;

    if (!/^[0-9]{6}$/.test(pin)) {
        showMessage(regPinMessage, "PIN harus 6 digit angka.", "error");
        regPin.focus();
        return;
    }
    if (pin !== pin2) {
        showMessage(regPinMessage, "PIN tidak sama. Cek ulang.", "error");
        regPinConfirm.value = "";
        regPinConfirm.focus();
        return;
    }

    setButtonLoading(submitPinButton, true, "Menyimpan...");

    try {
        // gunakan endpoint yang sama utk set pin: apabila siswa belum
        // punya pin_hash yang valid / bcrypt lama -> fungsi di SET,
        // atau sepenuh ganti SHA-256.
        const { data, error } = await window.db.rpc("set_student_pin", {
            p_identifier : activationIdentity,
            p_type       : activationType,
            p_pin        : pin
        });

        if (error) throw error;
        if (!data || !Array.isArray(data) || data.length === 0) {
            throw new Error("Respons set PIN tidak valid.");
        }

        const res = data[0];

        if (!res.success) {
            showMessage(regPinMessage, res.message || "Gagal menyimpan PIN.", "error");
            return;
        }

        // sukses -> bersihkan storage & arahkan login
        alert(res.message || "PIN berhasil disimpan. Silakan masuk.");
        sessionStorage.clear();
        window.location.href = "index.html";

    } catch (error) {
        console.error("Set pin error:", error);
        showMessage(regPinMessage, "Gagal menyimpan PIN. Coba lagi.", "error");
    } finally {
        setButtonLoading(submitPinButton, false, "Simpan");
    }
}


// ======================================================
// UTIL
// ======================================================
function showMessage(el, msg, type) {
    el.textContent = msg;
    el.className = `auth-message ${type}`;
    el.hidden = false;
}
function clearMessage(el) {
    el.textContent = "";
    el.className = "auth-message";
    el.hidden = true;
}
function setButtonLoading(btn, loading, text) {
    btn.disabled = loading;
    btn.textContent = text;
}
