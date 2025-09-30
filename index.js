function count() {
 const val = document.getElementById("text").value;
 document.getElementById("Letters").textContent=val.length;
 document.getElementById("Words").textContent =val.trim() ? val.trim().split(/\s+/).length:0;
}

function resetText() {
  const textarea = document.getElementById("text");
  const letterCount = document.getElementById("Letters");
  const wordCount = document.getElementById("Words");
  textarea.value = "";
  letterCount.textContent = 0;
  wordCount.textContent = 0;  
    confirm("Are you sure you want to clear");
}
