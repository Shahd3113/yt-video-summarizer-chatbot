const btn = document.getElementById("summarizeBtn");
const urlInput = document.getElementById("urlInput");
const langSelect = document.getElementById("langSelect");
const statusEl = document.getElementById("status");
const resultEl = document.getElementById("result");
const summaryText = document.getElementById("summaryText");
const videoIdBadge = document.getElementById("videoIdBadge");
const lengthBadge = document.getElementById("lengthBadge");

function showStatus(message, type) {
  statusEl.textContent = message;
  statusEl.className = `status ${type}`;
}

function hideStatus() {
  statusEl.className = "status hidden";
}

async function summarize() {
  const url = urlInput.value.trim();
  const lang = langSelect.value;

  if (!url) {
    showStatus("من فضلك ادخل رابط فيديو", "error");
    return;
  }

  resultEl.className = "result-card hidden";
  btn.disabled = true;
  showStatus("⏳ بيجيب الترانسكريبت ويلخص... ممكن ياخد شوية وقت", "loading");

  try {
    const res = await fetch("/api/summarize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url, lang }),
    });

    const data = await res.json();

    if (!res.ok) {
      showStatus(`❌ ${data.error || "حصل خطأ"}`, "error");
      return;
    }

    hideStatus();
    videoIdBadge.textContent = `Video: ${data.video_id}`;
    lengthBadge.textContent = `${data.transcript_length_chars} حرف`;
    summaryText.textContent = data.summary;
    resultEl.className = "result-card";
  } catch (err) {
    showStatus(`❌ فشل الاتصال بالسيرفر: ${err.message}`, "error");
  } finally {
    btn.disabled = false;
  }
}

btn.addEventListener("click", summarize);
urlInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") summarize();
});
