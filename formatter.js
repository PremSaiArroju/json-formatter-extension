const params = new URLSearchParams(window.location.search);
const rawJSON = params.get("json");
const output = document.getElementById("output");
const copyBtn = document.getElementById("copyBtn");

let pretty = "";

try {
  const parsed = JSON.parse(rawJSON);
  pretty = JSON.stringify(parsed, null, 2);
  output.textContent = pretty;
} catch (err) {
  output.textContent = "❌ Invalid JSON:\n\n" + err.message;
  pretty = "";
}

copyBtn.addEventListener("click", () => {
  if (pretty) {
    navigator.clipboard.writeText(pretty).catch(err => {
      console.error("Copy failed:", err);
    });
  }
});