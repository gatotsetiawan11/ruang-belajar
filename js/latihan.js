// ======================================================
// LATIHAN — tampilkan soal + badge LEVEL (C1..C6)
// Ambil exercise_id dari URL ?exercise=NN
// ======================================================

document.addEventListener("DOMContentLoaded", initLatihan);

const LOGIN_MODE_KEY    = "login_mode";
const SESSION_TOKEN_KEY = "student_session_token";

// Mapping level (Bloom 6 tingkat)
const LEVEL_LABELS = {
    1: { c: "C1", label: "Mengingat" },
    2: { c: "C2", label: "Memahami" },
    3: { c: "C3", label: "Menerapkan" },
    4: { c: "C4", label: "Menganalisis" },
    5: { c: "C5", label: "Mengevaluasi" },
    6: { c: "C6", label: "Mencipta" }
};
const LEVEL_COLORS = {
    1: "#94a3b8", 2: "#3b82f6", 3: "#10b981",
    4: "#f59e0b", 5: "#ef4444", 6: "#8b5cf6"
};

// dom
const statusEl   = document.getElementById("practiceStatus");
const titleEl    = document.getElementById("exerciseTitle");
const formEl     = document.getElementById("questionForm");
const listEl     = document.getElementById("questionList");
const resultBox  = document.getElementById("resultBox");
const logoutBtn  = document.getElementById("logoutButton");

let questions = [];
let answers = {};


async function initLatihan() {
    // validasi sesi
    const mode  = sessionStorage.getItem(LOGIN_MODE_KEY);
    const token = sessionStorage.getItem(SESSION_TOKEN_KEY);
    if (mode !== "student" || !token) {
        window.location.href = "index.html";
        return;
    }

    // ambil exercise_id dari ?exercise=..
    const params = new URLSearchParams(window.location.search);
    const exerciseId = params.get("exercise");

    logoutBtn.addEventListener("click", () => {
        sessionStorage.clear();
        window.location.href = "index.html";
    });

    if (!exerciseId) {
        statusEl.textContent = "Tidak ada ID latihan di URL (?exercise=NNN).";
        return;
    }

    await loadQuestions(exerciseId);
}


async function loadQuestions(exerciseId) {
    statusEl.textContent = "Mengambil soal…";

    try {
        // ambil daftar soal untuk exercise tsb (level ikut terbawa)
        // --- asumsikan RPC get_questions_for_exercise mengembalikan level ---
        const { data, error } = await window.db.rpc("get_questions_for_exercise", {
            p_exercise_id: Number(exerciseId)
        });

        if (error) throw error;

        questions = Array.isArray(data) ? data : [];

        if (questions.length === 0) {
            statusEl.textContent = "Belum ada soal untuk latihan ini.";
            titleEl.textContent = `Latihan #${exerciseId}`;
            return;
        }

        statusEl.textContent = "";
        titleEl.textContent = `Latihan #${exerciseId} · ${questions.length} soal`;
        renderQuestions();

    } catch (e) {
        console.error("Load soal error:", e);
        statusEl.textContent = "Gagal memuat soal. Cek id latihan & schema.";
    }
}


function renderQuestions() {
    formEl.hidden = false;
    listEl.innerHTML = "";

    questions.forEach((q, idx) => {
        const card = document.createElement("article");
        card.className = "question-card";

        // badge level
        const lv = Number(q.level) || 1;
        const meta = LEVEL_LABELS[lv] || LEVEL_LABELS[1];
        const color = LEVEL_COLORS[lv];

        const options = [
            { key: "A", val: q.option_a },
            { key: "B", val: q.option_b },
            { key: "C", val: q.option_c },
            { key: "D", val: q.option_d }
        ].filter(o => o.val); // buang kosong

        card.innerHTML = `
            <div class="question-head">
                <span class="q-num">Soal ${idx + 1}</span>
                <span class="q-level" style="background:${color}">${meta.c} · ${meta.label}</span>
            </div>
            <p class="q-text">${q.question_text || ""}</p>
            <div class="q-options">
                ${options.map(opt => `
                    <label class="q-option">
                        <input type="radio" name="q_${q.question_id || q.id}" value="${opt.key}">
                        <span class="opt-key">${opt.key}.</span>
                        <span class="opt-text">${opt.val}</span>
                    </label>
                `).join("")}
            </div>
        `;

        listEl.appendChild(card);
    });

    formEl.addEventListener("submit", handleSubmit);
}


function collectAnswers() {
    const picked = {};
    // ambil pilihan radio utk tiap soal
    [...formEl.querySelectorAll('input[type="radio"]:checked')].forEach(inp => {
        const qId = Number(inp.name.split("_")[1]);
        picked[qId] = inp.value;
    });
    return picked;
}


async function handleSubmit(e) {
    e.preventDefault();
    const picked = collectAnswers();

    // sederhana: pastikan semua soal terjawab
    const answeredCount = Object.keys(picked).length;
    if (answeredCount !== questions.length) {
        alert(`Masih ada ${questions.length - answeredCount} soal belum dijawab.`);
        return;
    }

    // ---- koreksi di sisi server via RPC (sederhana) ----
    // Untuk contoh ini, kita tampilkan hanya info tersimpan.
    // (Implementasi submit + scoring dari RPC otomatis bisa paket berikutnya.)

    alert(`Semua ${answeredCount} soal terjawab. Simulasi submit pada server dapat dilanjutkan.`);
    resultBox.hidden = false;
    resultBox.textContent = "Jawaban telah dikumpulkan (contoh) — koreksi otomatis dapat dilampirkan lewat RPC submit_exercise.";
}
