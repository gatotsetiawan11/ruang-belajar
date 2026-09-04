// =====================================================
// DASHBOARD — PROGRES & NAVIGASI LATIHAN (2 tingkat)
// =====================================================
document.addEventListener("DOMContentLoaded", init);

const TOKEN_KEY = "student_session_token";
const chapterList = document.getElementById("chapterList");
const greetEl     = document.getElementById("greet");
const kelasBadge  = document.getElementById("kelasBadge");

let studentClass = "";

async function init() {
  const token = sessionStorage.getItem(TOKEN_KEY);
  if (!token) { window.location.href = "index.html"; return; }

  // sapa & ambil kelas siswa dari profil
  try {
    const { data } = await window.db.rpc("get_my_profile", { p_token: token });
    const p = Array.isArray(data) ? data[0] : data;
    if (p && p.success) {
      studentClass = p.class_name || "";
      greetEl.textContent = `Halo, ${p.full_name}!`;
      kelasBadge.textContent = studentClass || "-";
    }
  } catch (e) { console.error(e); }

  await loadChapters(token);
}

async function loadChapters(token) {
  try {
    const { data, error } = await window.db.rpc("get_dashboard_progress", { p_token: token });
    if (error) throw error;
    const chapters = Array.isArray(data) ? data : [];
    computeSummary(chapters);
    renderChapters(chapters, token);
  } catch (e) {
    console.error(e);
    chapterList.innerHTML = `<p class="empty">Gagal memuat bab.</p>`;
  }
}

function computeSummary(ch) {
  const lulus = ch.reduce((s, c) => s + (c.completed_exercises||0), 0);
  const total = ch.reduce((s, c) => s + (c.total_exercises||0), 0);
  document.getElementById("statLulus").textContent  = lulus;
  document.getElementById("statActive").textContent = ch.length;
  document.getElementById("statTotal").textContent  = total;
}

function renderChapters(chapters, token) {
  if (!chapters.length) {
    chapterList.innerHTML = `<p class="empty">Belum ada bab/pelajaran.</p>`;
    return;
  }
  chapterList.innerHTML = "";
  chapters.forEach((ch) => {
    const card = document.createElement("section");
    card.className = "chapter-card";
    const pct = ch.total_exercises ? Math.round((ch.completed_exercises / ch.total_exercises) * 100) : 0;
    card.innerHTML = `
      <div class="chapter-head" data-loaded="0">
        <div class="chapter-info">
          <h3>${ch.chapter_title}</h3>
          <span class="chapter-class">Kelas ${ch.target_class || "-"} · ${ch.completed_exercises}/${ch.total_exercises} selesai</span>
        </div>
        <div class="chapter-progress">
          <span class="mini-bar"><i style="width:${pct}%"></i></span>
          <span class="mini-label">${pct}%</span>
          <span class="toggle-btn">▾</span>
        </div>
      </div>
      <div class="chapter-exercises" data-exwrap></div>
    `;
    card.querySelector(".chapter-head").addEventListener("click", () =>
      toggleExercises(card, ch, token));
    chapterList.appendChild(card);
  });
}

async function toggleExercises(card, ch, token) {
  const head  = card.querySelector(".chapter-head");
  const wrap  = card.querySelector("[data-exwrap]");
  const btn   = card.querySelector(".toggle-btn");

  // sudah dibuka sebelumnya? cukup toggle
  if (wrap.dataset.loaded === "1") {
    const open = wrap.classList.toggle("open");
    btn.textContent = open ? "▴" : "▾";
    head.style.background = open ? "#f1f5f9" : "";
    return;
  }

  try {
    const { data, error } = await window.db.rpc("get_exercises_with_progress", {
      p_token: token, p_chapter_id: ch.chapter_id
    });
    if (error) throw error;
    const exs = Array.isArray(data) ? data : [];
    wrap.innerHTML = exs.length
      ? exs.map(buildExerciseRow).join("")
      : `<p class="empty">Belum ada latihan di bab ini.</p>`;

    wrap.classList.add("open");
    wrap.dataset.loaded = "1";
    btn.textContent = "▴";
    head.style.background = "#f1f5f9";
  } catch (e) {
    console.error(e);
    wrap.innerHTML = `<p class="empty">Gagal memuat latihan.</p>`;
  }
}

function buildExerciseRow(ex) {
  const stMap = {
    'belum':       { label: "Belum Dikerjakan", cls: "st-new"  },
    'lulus':       { label: "Lulus",             cls: "st-pass" },
    'belum_lulus': { label: "Belum Lulus",       cls: "st-fail" }
  };
  const st = stMap[ex.status] || stMap.belum;
  const label = ex.status === "belum" ? "Kerjakan" : "Ulangi";

  return `
    <div class="ex-row">
      <div class="ex-info">
        <span class="ex-title">${ex.title}</span>
        ${ex.status !== "belum" ? `<span class="best">Skor: <b>${ex.best_score}</b></span>` : ""}
        <span class="status-pill ${st.cls}">${st.label}</span>
      </div>
      <a class="btn-primary" href="latihan.html?exercise=${ex.id}">${label}</a>
    </div>
  `;
}

document.getElementById("logoutBtn").addEventListener("click", async () => {
  const token = sessionStorage.getItem(TOKEN_KEY);
  if (token) { try { await window.db.rpc("logout_student", { p_token: token }); } catch (e) {} }
  sessionStorage.removeItem(TOKEN_KEY);
  window.location.href = "index.html";
});
