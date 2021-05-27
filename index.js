"use strict";
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;


console.log(number);

document.querySelector(".check").addEventListener("click", () => {
    const guessValue = Number(document.querySelector("input").value);
  console.log(score);
  if (!guessValue) {
    document.querySelector(".message").textContent = "Not a number!";
  } else if (guessValue === number) {
    document.querySelector(".message").textContent = "🎉 Correct number!";
    document.querySelector(".number").textContent = guessValue;
    document.querySelector("body").style.background = "#60b347";
    document.querySelector(".check").disabled = true;
  } else if (guessValue !== number) {
    score--;
    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent =
      guessValue > number ? "⬆ Too high!" : "⬇ Too low!";
    if (score <= 0) {
      document.querySelector(".message").textContent = "Game over! 😑";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector(".check").disabled = false;
  document.querySelector("body").style.background = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("input").value = '';
});
