const buttons1 = [...document.querySelectorAll(".one button")];
const buttons2 = [...document.querySelectorAll(".two button")];
const buttons3 = [...document.querySelectorAll(".three button")];
const checkButton = document.querySelector(".check");
const restartButton = document.querySelector(".restart");
const result = document.querySelector(".result");
const correctAnswers = [...document.querySelectorAll(".correct")];

const gameResult = {
  answer1: "",
  answer2: "",
  answer3: "",
  points: 0,
};

buttons1.forEach((button) => {
  button.addEventListener("click", function () {
    buttons1.forEach((button) => {
      button.style.border = "2px solid black";
    });
    this.style.border = "2px solid orange";
    gameResult.answer1 = this.dataset.check;
  });
});

buttons2.forEach((button) => {
  button.addEventListener("click", function () {
    buttons2.forEach((button) => {
      button.style.border = "2px solid black";
    });
    this.style.border = "2px solid orange";
    gameResult.answer2 = this.dataset.check;
  });
});

buttons3.forEach((button) => {
  button.addEventListener("click", function () {
    buttons3.forEach((button) => {
      button.style.border = "2px solid black";
    });
    this.style.border = "2px solid orange";
    gameResult.answer3 = this.dataset.check;
  });
});

checkGame = () => {
  if (!gameResult.answer1 || !gameResult.answer2 || !gameResult.answer3) {
    return alert("Opdowiedz na wszystkie pytania");
  } else {
    if (gameResult.answer1 === "true") {
      ++gameResult.points;
    }
    if (gameResult.answer2 === "true") {
      ++gameResult.points;
    }
    if (gameResult.answer3 === "true") {
      ++gameResult.points;
    }
  }
  result.textContent = `Poprawne odpowiedzi: ${gameResult.points}`;
  correctAnswers.forEach((answer) => {
    answer.style.backgroundColor = "green";
  });

  checkButton.removeEventListener("click", checkGame);
};

restartGame = () => {
  gameResult.playerAnswer1 = "";
  gameResult.playerAnswer2 = "";
  gameResult.playerAnswer3 = "";
  gameResult.points = 0;
  buttons1.forEach(
    (button) => (
      (button.style.border = "2px solid black"),
      (button.style.backgroundColor = "aliceblue")
    )
  );

  buttons2.forEach(
    (button) => (
      (button.style.border = "2px solid black"),
      (button.style.backgroundColor = "aliceblue")
    )
  );
  buttons3.forEach(
    (button) => (
      (button.style.border = "2px solid black"),
      (button.style.backgroundColor = "aliceblue")
    )
  );
  result.textContent = "Poprawne odpowiedzi:";
  checkButton.addEventListener("click", checkGame);
};

checkButton.addEventListener("click", checkGame);
restartButton.addEventListener("click", restartGame);
