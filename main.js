const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");

let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

function handleTryClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber");

  const userInput = Number(inputNumber.value);

  if (userInput > 10 || userInput < 0 || inputNumber.value == "") {
    alert("Insira um número válido");
    inputNumber.value = "";
    return
  }

  if (userInput == randomNumber) {
    toglleScreen();
    screen2.querySelector(
      "h2"
    ).innerText = `acertou em ${xAttempts} tentativas`;
  }

  inputNumber.value = "";
  xAttempts++;
}

function handleResetClick() {
  toglleScreen();
  xAttempts = 1;
  randomNumber = Math.round(Math.random() * 10);
}

function toglleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function handleEnterPress(e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick();
  }
}

btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", handleEnterPress);
