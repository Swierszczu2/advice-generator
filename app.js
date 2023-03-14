const newAdvice = document.getElementById("advice-button");
const adviceContent = document.querySelector(".advice");
const adviceNumber = document.querySelector(".advice-number");

async function getAdvice() {
  const apiUrl = "https://api.adviceslip.com/advice";
  const response = await fetch(apiUrl);
  const data = await response.json();
  adviceContent.textContent = `"${data.slip.advice}"`;
  adviceNumber.textContent = `ADVICE #${data.slip.id}`;
}

newAdvice.addEventListener("click", () => {
  getAdvice();
});

//onload
getAdvice();
