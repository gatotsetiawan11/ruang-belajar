// =====================================================
// DASHBOARD — PROGRES & NAVIGASI LATIHAN
// =====================================================
document.addEventListener("DOMContentLoaded", init);
const TOKEN_KEY = "student_session_token";

const chapterList = document.getElementById("chapterList");
const greetEl = document.getElementById("greet");
const kelasBadge = document.getElementById("kelasBadge");

async function init() {
  const token = sessionStorage.getItem(TOKEN_KEY);
  if (!token) { window.location.href = "index.html"; return; }

  // ambil profil utk sapaan & kelas
  try {
    const { data } = await window.db.rpc("get_my_profile", { p_token: token });
    const p = Array.isArray(data) ? data[0] : data;
    if (p && p.success) {
      greetEl.textContent = `Halo, ${p.full_name}! Siap belajar hari ini?`;
      kelasBadge.textContent = p.class_name || "-";
      window.__studentClass = p.class_name || "";
    }
  } catch (e) { console.error(e); }

  await loadChapters(token);
}

async function loadChapters(token) {
  // data bab + progres dari RPC
  const { data, error } = await window.db.rpc("get_dashboard_progress", { p_token: token });
  if (error) { chapterList.innerHTML = `<p class="empty">Gagal memuat bab.</p>`; return; }

  const chapters = Array.isArray(data) ? data : [];
  computeSummary(chapters);
  renderChapters(chapters, token);
}

function computeSummary(chapters) {
  const totLulus = chapters.reduce((s,c)=> s + c.completed_exercises, 0);
  const totSemua = chapters.reduce((s,c)=> s + c.total_exercises, 0);
  document.getElementById("statLulus").textContent = totLulus;
  document.getElementById("statSelesai").textContent = chapters.length;
  document.getElementById("statSemua").textContent = totSemua;
}

function renderChapters(chapters, token) {
  if (!chapters.length) {
    chapterList.innerHTML = `<p class="empty">Belum ada bab/pelajaran.</p>`;
    return;
  }

  chapterList.innerHTML = "";
  chapters.forEach(ch => {
    const card = document.createElement("section");
    card.className = "chapter-card";
    const progressLabel = `${ch.completed_exercises}/${ch.total_exercises} latihan`;

    card.innerHTML = `
      <div class="chapter-head" data-chid="${ch.chapter_id}">
        <div class="chapter-info">
          <h3>${ch.chapter_title}</h3>
          <span class="chapter-class">Kelas ${ch.target_class || "-"}</span>
        </div>
        <div class="chapter-progress">
          <span class="mini-bar"><i style="width:${ch.total_exercises? (ch.completed_exercises/ch.total_exercises*100):0}%"></i></span>
          <span class="mini-label">${progressLabel}</span>
          <button class="toggle-btn">▾</button>
        </div>
      </div>
      <div class="chapter-exercises" data-exwrap></div>
    `;

    const head = card.querySelector(".chapter-head");
    head.addEventListener("click", () => toggleExercises(card, ch, token));
    chapterList.appendChild(card);
  });
}

async function toggleExercises(card, ch, token) {
  const wrap = card.querySelector("[data-exwrap]");
  // sudah pernah dibuka? toggle saja
  if (wrap.dataset.loaded === "1") {
    wrap.classList.toggle("open");
    card.querySelector(".toggle-btn").textContent = wrap.classList.contains("open") ? "▴" : "▾";
    return;
  }

  const { data, error } = await window.db.rpc("get_exercises_with_progress", {
    p_token: token,
    p_chapter_id: ch.chapter_id
  });
  if (error) { wrap.innerHTML = `<p class="empty">Gagal memuat latihan.</p>`; return; }

  const exs = Array.isArray(data) ? data : [];
  if (!exs.length) { wrap.innerHTML = `<p class="empty">Belum ada latihan di bab ini.</p>`; return; }

  wrap.innerHTML = exs.map(buildExerciseRow).join("");
  wrap.classList.add("open");
  wrap.dataset.loaded = "1";
  card.querySelector(".toggle-btn").textContent = "▴";
}

function buildExerciseRow(ex) {
  const stateMap = {
    'belum':        {label:'Belum Dikerjakan', cls:'st-new'},
    'lulus':        {label:'Lulus',            cls:'st-pass'},
    'belum_lulus':  {label:'Belum Lulus',      cls:'st-fail'}
  };
  const st = stateMap[ex.status] || stateMap.belum;
  const actionLabel = ex.status === 'belum' ? 'Kerjakan' : 'Ulangi';

  return `
    <div class="ex-row">
      <div class="ex-info">
        <span class="ex-title">${ex.title}</span>
        <span class="ex-pass">KKM ${ex.pass_score}</span>
        <span class="status-pill ${st.cls}">${st.label}</span>
        ${ex.status!=='belum' ? `<span class="best-score">Terbaik: <b>${ex.best_score}</b></span>` : ''}
      </div>
      <a class="auth-primary-button" href="latihan.html?exercise=${ex.id}">${actionLabel}</a>
    </div>
  `;
}

document.getElementById("logoutBtn").addEventListener("click", async () => {
  const token = sessionStorage.getItem(TOKEN_KEY);
  if (token) { try { await window.db.rpc("logout_student", { p_token: token }); } catch(e){} }
  sessionStorage.removeItem(TOKEN_KEY);
  window.location.href = "index.html";
});
