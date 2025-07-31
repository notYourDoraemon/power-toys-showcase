const tips = [
  "Pro Tip: Use Ctrl+Win+T to pin any window on top, works like a charm if you work like multitasking like me",
  "You can install PowerToys using the Microsoft Store.",
  "OCR lets you grab text from anywhere on your screen.",
  "PowerToys works best on updated Windows 10 or 11 (i use arch linux btw)."
];
function showRandomTip() {
  const tipDiv = document.getElementById("tip");
  tipDiv.textContent = tips[Math.floor(Math.random() * tips.length)];
}
window.addEventListener("DOMContentLoaded", showRandomTip);
document.getElementById("tip").addEventListener("click", showRandomTip);
document.getElementById("goUsage").addEventListener("click", function() {
  window.location.href = "usage.html";
});

const tipDiv = document.getElementById("tip");
tipDiv.addEventListener("mouseenter", () => {
  tipDiv.style.background = "#d2e4fc";
  tipDiv.style.cursor = "pointer";
});
tipDiv.addEventListener("mouseleave", () => {
  tipDiv.style.background = "transparent";
});
