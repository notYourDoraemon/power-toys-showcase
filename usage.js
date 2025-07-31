const markFeature = document.querySelectorAll('.feature img')[2];
markFeature.addEventListener('click', function() {
  if (markFeature.style.opacity === "0.5") {
    markFeature.style.opacity = "1";
  } else {
    markFeature.style.opacity = "0.5";
  }
});


let cursorCount = 0;
document.getElementById("countBtn").addEventListener("click", function() {
  cursorCount += 1;
  document.getElementById("cursorCount").textContent = cursorCount;
  if(cursorCount % 3 === 0){
    document.getElementById("cursorCount").style.background = "#ffee88";
  } else {
    document.getElementById("cursorCount").style.background = "#e1eaf7";
  }
});
const pinDiv = document.querySelector('.feature');
pinDiv.addEventListener('mouseenter', function() {
  pinDiv.style.background = "#dbf5ff";
});
pinDiv.addEventListener('mouseleave', function() {
  pinDiv.style.background = "#f1f6ff";
});
