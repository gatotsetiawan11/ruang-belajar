function showReport(res) {
  const passed = res.passed;
  resultBox.hidden = false;
  resultBox.className = "practice-result " + (passed ? "report-pass" : "report-fail");

  const message = passed
    ? "<strong>🎉 Selamat!</strong> Kamu lulus latihan ini."
    : "<strong>📖 Tetap semangat!</strong> Coba pelajari lagi materinya.";

  // tombol: ulangi (mulai attempt baru) + kembali ke dashboard
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
