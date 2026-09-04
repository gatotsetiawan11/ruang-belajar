// =====================================================
// LATIHAN — ambil soal, kirim jawaban, tampilkan laporan
// Cocok dengan markup latihan.html (id sesuai)
// =====================================================
document.addEventListener("DOMContentLoaded", initLatihan);

const SESSION_TOKEN_KEY = "student_session_token";

const LEVEL_LABELS = {
  1:{ c:"C1", label:"Mengingat"   },
  2:{ c:"C2", label:"Memahami"    },
  3:{ c:"C3", label:"Menerapkan"  },
  4:{ c:"C4", label:"Menganalisis"},
  5:{ c:"C5", label:"Mengevaluasi"},
  6:{ c:"C6", label:"Mencipta"    }
};
const LEVEL_COLORS = {
  1:"#94a3b8",2:"#3b82f6",3:"#10b981",
  4:"#f59e0b",5:"#ef4444",6:"#8b5cf6"
};

// --- ambil elemen sesuai id di HTML Anda ---
const statusEl = document.getElementById("practiceStatus");
const titleEl  = document.getElementById("exerciseTitle");
const formEl   = document.getElementById("questionForm");
const listEl   = document.getElementById("questionList");
const resultBox= document.getElementById("resultBox");
const submitBtn= document.getElementById("submitButton");

let questions = [];

async function initLatihan() {
  const token = sessionStorage.getItem(SESSION_TOKEN_KEY);
  if (!token) { window.location.href = "index.html"; return; }

  const params = new URLSearchParams(window.location.search);
  const exId = params.get("exercise");
  if (!exId) {
    statusEl.textContent = "Tidak ada ID latihan (?exercise=NNN).";
    return;
  }
  await loadQuestions(Number(exId));
}

async function loadQuestions(exId) {
  statusEl.textContent = "Memuat soal…";
  try {
    const { data, error } = await window.db.rpc("get_questions_for_exercise", {
      p_exercise_id: exId
    });
    if (error) throw error;
    questions = Array.isArray(data) ? data : [];

    if (!questions.length) {
      statusEl.textContent = "Belum ada soal untuk latihan ini.";
      titleEl.textContent = `Latihan #${exId}`;
      return;
    }

    statusEl.textContent = "";
    titleEl.textContent = `${questions.length} Soal`;
    renderQuestions();
  } catch (e) {
    console.error(e);
    statusEl.textContent = "Gagal memuat soal.";
  }
}

function renderQuestions() {
  formEl.hidden = false;
  listEl.innerHTML = "";

  questions.forEach((q, idx) => {
    const lv    = Number(q.level) || 1;
    const meta  = LEVEL_LABELS[lv] || LEVEL_LABELS[1];
    const color = LEVEL_COLORS[lv] || LEVEL_COLORS[1];

    const opts = [
      ["A", q.option_a], ["B", q.option_b],
      ["C", q.option_c], ["D", q.option_d]
    ].filter(o => o[1]);

    const card = document.createElement("article");
    card.className = "practice-question";
    card.innerHTML = `
      <div class="pq-head">
        <span class="pq-num">Soal ${idx + 1}</span>
        <span class="pq-level" style="background:${color}">${meta.c} · ${meta.label}</span>
      </div>
      <p class="pq-text">${q.question}</p>
      <div class="pq-options">
        ${opts.map(o => `
          <label class="pq-option">
            <input type="radio" name="q_${q.question_id}" value="${o[0]}">
            <span class="pq-key">${o[0]}.</span>
            <span>${o[1]}</span>
          </label>`).join("")}
      </div>`;
    listEl.appendChild(card);
  });

  // pasang listener submit (hindari dobel)
  formEl.removeEventListener("submit", handleSubmit);
  formEl.addEventListener("submit", handleSubmit);
}

function collectAnswers() {
  const out = [];
  questions.forEach(q => {
    const sel = formEl.querySelector(`input[name="q_${q.question_id}"]:checked`);
    if (sel) out.push({ question_id: q.question_id, chosen: sel.value });
  });
  return out;
}

async function handleSubmit(e) {
  e.preventDefault();
  const token  = sessionStorage.getItem(SESSION_TOKEN_KEY);
  const exId   = Number(new URLSearchParams(window.location.search).get("exercise"));
  const picked = collectAnswers();

  if (picked.length !== questions.length) {
    alert(`${questions.length - picked.length} soal belum dijawab.`);
    return;
  }

  submitBtn.disabled = true;
  statusEl.textContent = "Mengoreksi…";

  try {
    const { data, error } = await window.db.rpc("submit_exercise", {
      p_token: token,
      p_exercise_id: exId,
      p_answers: picked
    });
    if (error) throw error;

    const res = Array.isArray(data) ? data[0] : data;
    if (!res || !res.success) {
      statusEl.textContent = (res && res.message) || "Gagal mengumpulkan.";
      submitBtn.disabled = false;
      return;
    }

    formEl.hidden = true;
    statusEl.textContent = "";
    showReport(res);
  } catch (err) {
    console.error(err);
    statusEl.textContent = "Terjadi kesalahan saat mengoreksi.";
    submitBtn.disabled = false;
  }
}

function showReport(res) {
  const passed = res.passed;
  resultBox.hidden = false;
  resultBox.className = "practice-result " + (passed ? "report-pass" : "report-fail");

  const message = passed
    ? "<strong>🎉 Selamat!</strong> Kamu lulus latihan ini."
    : "<strong>📖 Tetap semangat!</strong> Coba pelajari lagi materinya.";

  const exerciseId = Number(new URLSearchParams(window.location.search).get("exercise"));

  resultBox.innerHTML = `
    <div class="report-title">Laporan Hasil Latihan</div>
    <div class="report-grid">
      <div class="report-stat"><span>Skor</span><b>${res.score}</b></div>
      <div class="report-stat"><span>Benar</span><b>${res.correct_count}/${res.total_questions}</b></div>
      <div class="report-stat"><span>Status</span><b>${passed ? "LULUS" : "BELUM"}</b></div>
    </div>
    <p class="report-msg">${message}</p>
    <div class="report-actions">
      <a class="report-action auth-primary-button" href="latihan.html?exercise=${exerciseId}">🔁 Ulangi Latihan</a>
      <a class="report-action link-dash" href="dashboard.html">Ke Halaman Belajar</a>
    </div>
  `;
}

// ---- logout ----
const logoutButton = document.getElementById("logoutButton");
if (logoutButton) {
  logoutButton.addEventListener("click", async () => {
    const token = sessionStorage.getItem(SESSION_TOKEN_KEY);
    if (token) {
      try { await window.db.rpc("logout_student", { p_token: token }); } catch (e) {}
    }
    sessionStorage.removeItem(SESSION_TOKEN_KEY);
    window.location.href = "index.html";
  });
}
