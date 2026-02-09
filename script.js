let step = 0;

const title = document.getElementById("title");
const text = document.getElementById("text");
const mainBtn = document.getElementById("mainBtn");
const fakeNo = document.getElementById("fakeNo");

mainBtn.addEventListener("click", () => {
  step++;

  if (step === 1) {
    title.innerText = "Good choice 😌";
    text.innerHTML =
      "Now listen carefully…<br>I’m about to ask something important.";
    mainBtn.innerText = "Okay 😳";
  } else if (step === 2) {
    title.innerText = "Don’t panic 😏";
    text.innerHTML = "This question might change your day.";
    mainBtn.innerText = "Ask it already 🙄";
  } else if (step === 3) {
    title.innerText = "Here it comes 😌💘";
    text.innerHTML = "<strong>Will you be my Valentine 🥹💌?</strong>";
    mainBtn.innerText = "Yes 😌❤️";
    fakeNo.innerText = "No 💀";
  } else if (step === 4) {
    window.location.href = "yes.html";
  }
});

// Fake No button behavior
fakeNo.addEventListener("mouseenter", () => {
  fakeNo.innerText = "Nice try 🤭";
  fakeNo.style.transform = `translate(${Math.random() * 150 - 75}px, ${Math.random() * 150 - 75}px)`;
  
});
