// ======================================================
// LATIHAN SISWA
// LOGIN CLEAN - NISN / WhatsApp / Email (tanpa guest)
//
// FLOW:
// 1. Pilih jenis identitas + masukkan nilai
// 2. Cek status akun
// 3. registered        -> minta PIN
// 4. needs_pin_reset   -> redirect aktivasi
// 5. not_registered    -> redirect register
// 6. inactive          -> pesan
// 7. Login NISN/WA/email + PIN
// 8. PIN default/must_change -> aktivasi
// ======================================================

document.addEventListener("DOMContentLoaded", initLoginPage);


// ======================================================
// DOM
// ======================================================
const nisnSection        = document.getElementById("nisnSection");
const pinSection         = document.getElementById("pinSection");
const pinResetSection    = document.getElementById("pinResetSection");

// Identitas
const identityTypeSelect = document.getElementById("identityType");
const identityLabel      = document.getElementById("identityLabel");
const fieldHelp          = document.getElementById("fieldHelp");
const nisnForm           = document.getElementById("nisnForm");
const nisnInput          = document.getElementById("nisnInput");
const nisnButton         = document.getElementById("nisnButton");
const nisnMessage        = document.getElementById("nisnMessage");

// PIN
const pinForm            = document.getElementById("pinForm");
const pinInput           = document.getElementById("pinInput");
const pinButton          = document.getElementById("pinButton");
const pinMessage         = document.getElementById("pinMessage");
const selectedIdentity   = document.getElementById("selectedIdentity");
const changeNisnButton   = document.getElementById("changeNisnButton");

// Pin Reset
const pinResetIdentity   = document.getElementById("pinResetIdentity");
const goActivationButton = document.getElementById("goActivationButton");


// ======================================================
// STORAGE KEYS
// ======================================================
const LOGIN_MODE_KEY    = "login_mode";
const SESSION_TOKEN_KEY = "student_session_token";
const REGISTER_MODE_KEY = "register_mode";
const PENDING_NISN_KEY  = "pending_nisn";
const PENDING_NAME_KEY  = "pending_student_name";
const PENDING_IDENTITY_KEY = "pending_identity";     // untuk simpan input lengkap utk aktivasi
const PENDING_ID_TYPE_KEY  = "pending_id_type";


// ======================================================
// STATE
// ======================================================
let currentType = "nisn";   // 'nisn' | 'phone' | 'email'
let currentNisn = "";       // nilai identitas (disimpan agak generik)


// ======================================================
// PLACEHOLDER / LABEL MAP
// ======================================================
const IDENTITY_META = {
    nisn: {
        label: "NISN",
        placeholder: "10 digit NISN",
        help: "NISN terdiri dari tepat 10 angka.",
        pattern: /^[0-9]{10}$/
    },
    phone: {
        label: "Nomor WhatsApp",
        placeholder: "contoh: 081234567890",
        help: "Gunakan nomor WhatsApp yang terdaftar.",
        pattern: /^\+?[0-9]{9,15}$/
    },
    email: {
        label: "Email",
        placeholder: "contoh: siswa@email.com",
        help: "Gunakan email yang terdaftar.",
        pattern: /^\S+@\S+\.\S+$/
    }
};


// ======================================================
// INIT
// ======================================================
function initLoginPage() {
    sessionStorage.clear();

    showNisnStep();

    identityTypeSelect.addEventListener("change", handleTypeChange);
    nisnForm.addEventListener("submit", handleNisnSubmit);
    pinForm.addEventListener("submit", handlePinSubmit);
    changeNisnButton.addEventListener("click", handleChangeNisn);
    goActivationButton.addEventListener("click", goToActivation);
}


// ======================================================
// STEP CONTROL
// ======================================================
function hideAllSections() {
    nisnSection.hidden     = true;
    pinSection.hidden      = true;
    pinResetSection.hidden = true;
}

function showNisnStep() {
    hideAllSections();
    nisnSection.hidden = false;

    currentNisn = "";
    pinInput.value = "";
    clearMessage(nisnMessage);
    clearMessage(pinMessage);

    applyTypeToFields();   // set label/placeholder sesuai tipe
    nisnInput.focus();
}

function showPinStep(identity) {
    hideAllSections();
    pinSection.hidden = false;

    selectedIdentity.textContent = identity;
    pinInput.value = "";
    clearMessage(pinMessage);
    pinInput.focus();
}

function showPinResetStep(identity) {
    hideAllSections();
    pinResetSection.hidden = false;
    pinResetIdentity.textContent = identity;
}


// ======================================================
// TYPE CHANGE
// ======================================================
function handleTypeChange() {
    currentType = identityTypeSelect.value;
    nisnInput.value = "";
    clearMessage(nisnMessage);
    nisnInput.classList.remove("input-error");
    applyTypeToFields();
    nisnInput.focus();
}

function applyTypeToFields() {
    const meta = IDENTITY_META[currentType];
    identityLabel.textContent = meta.label;
    nisnInput.placeholder     = meta.placeholder;
    fieldHelp.textContent     = meta.help;

    // atur inputmode
    if (currentType === "nisn" || currentType === "phone") {
        nisnInput.inputMode = "numeric";
        nisnInput.setAttribute("pattern", "[0-9]*");
    } else {
        nisnInput.inputMode = "email";
        nisnInput.removeAttribute("pattern");
    }

    // handle change di nisnForm listener numeric tetap berjalan tapi
    // kita validasi di submit fungsi isValid sesuai tipe
}


// ======================================================
// NISN (IDENTITAS) SUBMIT
// ======================================================
function getCurrentTypeFromSelect() {
    return identityTypeSelect.value;
}

async function handleNisnSubmit(event) {
    event.preventDefault();

    clearMessage(nisnMessage);
    nisnInput.classList.remove("input-error");

    const type = getCurrentTypeFromSelect();
    const meta = IDENTITY_META[type];
    let value = nisnInput.value.trim();

    if (type === "email") value = value.toLowerCase();

    if (!meta.pattern.test(value)) {
        nisnInput.classList.add("input-error");
        showMessage(nisnMessage, getInvalidMessage(type), "error");
        nisnInput.focus();
        return;
    }

    setButtonLoading(nisnButton, true, "Memeriksa...");

    try {
        const { data, error } = await window.db.rpc(
            "get_student_account_status",
            { p_identifier: value, p_type: type }
        );

        if (error) throw error;
        if (!Array.isArray(data) || data.length === 0) {
            throw new Error("Status akun tidak tersedia.");
        }

        const status = data[0].account_status;

        currentType = type;
        currentNisn = value;

        if (status === "registered") {
            showPinStep(value);
            return;
        }

        if (status === "needs_pin_reset") {
            showPinResetStep(value);
            return;
        }

        if (status === "not_registered") {
            sessionStorage.setItem(REGISTER_MODE_KEY, "self");
            sessionStorage.setItem(PENDING_NISN_KEY, value);
            sessionStorage.setItem(PENDING_ID_TYPE_KEY, type);
            window.location.href = "register.html";
            return;
        }

        if (status === "inactive") {
            showMessage(nisnMessage,
                "Akun ini sedang tidak aktif. Silakan hubungi admin.",
                "error");
            return;
        }

        throw new Error("Status akun tidak dikenali.");

    } catch (error) {
        console.error("Account status error:", error);
        showMessage(nisnMessage,
            "Tidak dapat memeriksa akun. Silakan coba lagi.",
            "error");
    } finally {
        setButtonLoading(nisnButton, false, "Lanjut");
    }
}

function getInvalidMessage(type) {
    if (type === "nisn")  return "NISN harus terdiri dari tepat 10 angka.";
    if (type === "phone") return "Nomor WhatsApp tidak valid.";
    return "Format email tidak valid.";
}


// ======================================================
// GO TO ACTIVATION (PIN RESET)
// ======================================================
function goToActivation() {
    sessionStorage.setItem(REGISTER_MODE_KEY, "activation");
    sessionStorage.setItem(PENDING_NISN_KEY, currentNisn);
    sessionStorage.setItem(PENDING_ID_TYPE_KEY, currentType);
    window.location.href = "register.html";
}


// ======================================================
// PIN LOGIN
// ======================================================
async function handlePinSubmit(event) {
    event.preventDefault();

    clearMessage(pinMessage);
    pinInput.classList.remove("input-error");

    const type = currentType;
    const id   = currentNisn;

    if (!id) {
        showNisnStep();
        return;
    }

    const pin = pinInput.value.trim();

    if (!/^[0-9]{6}$/.test(pin)) {
        pinInput.classList.add("input-error");
        showMessage(pinMessage, "PIN harus terdiri dari tepat 6 angka.", "error");
        pinInput.focus();
        return;
    }

    setButtonLoading(pinButton, true, "Memeriksa...");

    try {
        const { data, error } = await window.db.rpc(
            "login_student",
            { p_identifier: id, p_type: type, p_pin: pin }
        );

        pinInput.value = "";

        if (error) throw error;
        if (!Array.isArray(data) || data.length === 0) {
            throw new Error("Respons login tidak valid.");
        }

        const result = data[0];

        if (!result.success) {
            handleLoginFailure(result);
            return;
        }

        if (!result.session_token) {
            throw new Error("Token sesi tidak tersedia.");
        }

        // Simpan sesi
        sessionStorage.clear();
        sessionStorage.setItem(LOGIN_MODE_KEY, "student");
        sessionStorage.setItem(SESSION_TOKEN_KEY, result.session_token);

        // Jika harus ganti PIN (mis. flow aktivasi)
        if (result.pin_must_change === true) {
            sessionStorage.setItem(REGISTER_MODE_KEY, "activation");
            sessionStorage.setItem(PENDING_NISN_KEY, id);
            sessionStorage.setItem(PENDING_ID_TYPE_KEY, type);
            if (result.full_name) sessionStorage.setItem(PENDING_NAME_KEY, result.full_name);
            window.location.href = "register.html";
            return;
        }

        window.location.href = "dashboard.html";

    } catch (error) {
        console.error("Login error:", error);
        showMessage(pinMessage, "Tidak dapat masuk. Silakan coba lagi.", "error");
    } finally {
        setButtonLoading(pinButton, false, "Masuk");
    }
}


// ======================================================
// LOGIN FAILURE
// ======================================================
function handleLoginFailure(result) {
    const code = result.error_code;

    if (code === "ACCOUNT_LOCKED") {
        showMessage(pinMessage,
            "Terlalu banyak percobaan PIN yang salah. Akun dikunci sementara. Silakan coba kembali beberapa saat lagi.",
            "error");
        return;
    }

    if (code === "ACCOUNT_INACTIVE") {
        showMessage(pinMessage,
            "Akun ini tidak aktif. Silakan hubungi admin.",
            "error");
        return;
    }

    // jangan bocorkan apakah identitas atau PIN yang salah
    showMessage(pinMessage, "Identitas atau PIN tidak sesuai.", "error");
    pinInput.focus();
}


// ======================================================
// CHANGE IDENTITAS
// ======================================================
function handleChangeNisn(event) {
    event.preventDefault();
    const previous = currentNisn;
    showNisnStep();
    if (previous) {
        nisnInput.value = previous;
        nisnInput.focus();
    }
}


// ======================================================
// MESSAGE
// ======================================================
function showMessage(element, message, type) {
    element.textContent = message;
    element.className = `auth-message ${type}`;
    element.hidden = false;
}

function clearMessage(element) {
    element.textContent = "";
    element.className = "auth-message";
    element.hidden = true;
}


// ======================================================
// BUTTON STATE
// ======================================================
function setButtonLoading(button, loading, text) {
    button.disabled = loading;
    button.textContent = text;
}
