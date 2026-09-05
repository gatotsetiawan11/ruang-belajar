// =====================================================
// LOGIN — Masuk siswa (NISN / Phone / Email) + PIN
// Cocok dengan index.html
// =====================================================
document.addEventListener("DOMContentLoaded", initLogin);

// ---- Konstanta key (harus SAMA dgn dashboard.js & latihan.js) ----
const SESSION_TOKEN_KEY = "student_session_token";
const LOGIN_MODE_KEY    = "student_login_mode";
const REGISTER_MODE_KEY = "auth_register_mode";
const PENDING_NISN_KEY  = "auth_pending_nisn";
const PENDING_ID_TYPE_KEY = "auth_pending_id_type";
const PENDING_NAME_KEY  = "auth_pending_name";

// ---- Elemen Step 1 (identitas) ----
const nisnSection   = document.getElementById("nisnSection");
const nisnForm      = document.getElementById("nisnForm");
const identityType  = document.getElementById("identityType");
const nisnInput     = document.getElementById("nisnInput");
const identityLabel = document.getElementById("identityLabel");
const fieldHelp     = document.getElementById("fieldHelp");
const nisnMessage   = document.getElementById("nisnMessage");
const nisnButton    = document.getElementById("nisnButton");

// ---- Elemen Step 2 (PIN) ----
const pinSection        = document.getElementById("pinSection");
const selectedIdentity  = document.getElementById("selectedIdentity");
const pinForm           = document.getElementById("pinForm");
const pinInput          = document.getElementById("pinInput");
const pinMessage        = document.getElementById("pinMessage");
const pinButton         = document.getElementById("pinButton");
const changeNisnButton  = document.getElementById("changeNisnButton");

// ---- Elemen Step Reset/aktivasi ----
const pinResetSection   = document.getElementById("pinResetSection");
const pinResetIdentity  = document.getElementById("pinResetIdentity");
const goActivationButton= document.getElementById("goActivationButton");

// ---- state ----
let loginIdentifier = "";   // nisn / phone / email yg dimasukkan
let loginType       = "nisn";

// ---------- helper tampilkan pesan ----------
function showMsg(el, text, ok) {
  el.textContent = text;
  el.hidden = false;
  el.className = "auth-message " + (ok ? "ok" : "err");
}
function hideMsg(el){ el.hidden = true; el.textContent=""; }

// ---------- Step 1: ganti tipe identitas ----------
identityType.addEventListener("change", () => {
  const t = identityType.value;
  const meta = {
    nisn:   { label:"NISN",   help:"NISN terdiri dari tepat 10 angka.",            ph:"10 digit NISN" },
    phone:  { label:"Nomor WhatsApp", help:"Contoh: 081234567890",                  ph:"0812xxxxxxx" },
    email:  { label:"Email",  help:"Alamat email aktif.",                           ph:"nama@email.com" }
  }[t] || meta.nisn;
  identityLabel.textContent = meta.label;
  fieldHelp.textContent     = meta.help;
  nisnInput.placeholder     = meta.ph;
});

// ---------- Step 1: submit identitas ----------
nisnForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  hideMsg(nisnMessage);
  const t    = identityType.value;
  const val  = nisnInput.value.trim();

  // validasi ringan sesuai tipe
  if (t === "nisn" && !/^\d{10}$/.test(val)) {
    showMsg(nisnMessage, "NISN harus tepat 10 angka.", false);
    return;
  }
  if (t === "phone" && !/^08\d{8,11}$/.test(val.replace(/\s/g,''))) {
    showMsg(nisnMessage, "Nomor WhatsApp tidak valid.", false);
    return;
  }
  if (t === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
    showMsg(nisnMessage, "Email tidak valid.", false);
    return;
  }

  loginIdentifier = val;
  loginType       = t;

  // tampilkan step PIN
  selectedIdentity.textContent = val;
  nisnSection.hidden = true;
  pinSection.hidden  = false;
  pinInput.value = "";
  pinInput.focus();
});

// ---------- kembali ke step identitas ----------
changeNisnButton.addEventListener("click", (e) => {
  e.preventDefault();
  pinSection.hidden  = true;
  nisnSection.hidden = false;
});

// ---------- Step 2: submit PIN -> panggil login ----------
pinForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  hideMsg(pinMessage);

  const pin = pinInput.value.trim();
  if (!/^\d{6}$/.test(pin)) {
    showMsg(pinMessage, "PIN harus 6 digit angka.", false);
    return;
  }

  pinButton.disabled = true;

  try {
    // panggil RPC login_student (versi 3-arg - yg isi tabel sessions)
    const { data, error } = await window.db.rpc("login_student", {
      p_identifier: loginType === "nisn" ? loginIdentifier
                   : loginType === "phone" ? loginIdentifier
                   : loginIdentifier.toLowerCase().trim(),
      p_type:   loginType,
      p_pin:    pin
    });

    if (error) throw new Error(error.message);

    const result = Array.isArray(data) ? data[0] : data;

    if (!result || result.success !== true) {
      const code = result && result.error_code;
      const pemetaan = {
        NOT_FOUND:         "Identitas / PIN salah.",
        ACCOUNT_INACTIVE:  "Akun tidak aktif.",
        ACCOUNT_LOCKED:    "Akun terkunci. Coba lagi nanti.",
        INVALID_CREDENTIALS:"Identitas atau PIN salah.",
        PIN_NOT_READY:     "Akun belum memiliki PIN."
      };
      showMsg(pinMessage, (code && pemetaan[code]) || "Gagal masuk.", false);
      pinButton.disabled = false;
      return;
    }

    if (!result.session_token) {
      throw new Error("Token sesi tidak tersedia.");
    }

    // ---- Simpan sesi ----
    sessionStorage.clear();
    sessionStorage.setItem(LOGIN_MODE_KEY, "student");
    sessionStorage.setItem(SESSION_TOKEN_KEY, result.session_token);

    if (result.full_name)  sessionStorage.setItem("student_name", result.full_name);
    if (result.nisn)       sessionStorage.setItem("student_nisn", result.nisn);
    if (result.student_id) sessionStorage.setItem("student_id", result.student_id);

    // ---- Jika harus ganti PIN ----
    if (result.pin_must_change === true) {
      sessionStorage.setItem(REGISTER_MODE_KEY, "activation");
      sessionStorage.setItem(PENDING_NISN_KEY, loginIdentifier);
      sessionStorage.setItem(PENDING_ID_TYPE_KEY, loginType);
      if (result.full_name) sessionStorage.setItem(PENDING_NAME_KEY, result.full_name);
      window.location.href = "register.html";
      return;
    }

    // ---- sukses ----
    window.location.href = "dashboard.html";

  } catch (err) {
    console.error(err);
    showMsg(pinMessage, err.message || "Terjadi kesalahan.", false);
    pinButton.disabled = false;
  }
});

function initLogin() {
  // pastikan tidak ada sisa token yg basi jika pengguna logout
  // (opsional - jangan hapus bila mau langsung paksa login baru)
}
