const guessnumber = document.getElementById("guessNumber");
const submit = document.getElementById("goo");
const refresh = document.getElementById("refresh");
const error = document.getElementById("error");
let data = document.getElementById("inputData");
let reply = document.getElementById("reply");
let attempts = document.getElementById("attempts");
const min = 1;
const max = 100;
const guess = Math.floor(Math.random() * (max - min + 1) + min);
let running = true;
let answer;
let count = 0;

submit.onclick = function () {
  if (running) {
    answer = Number(data.value);
    if (isNaN(answer)) {
      error.textContent = `Please enter a valid number`;
      reply.textContent = ``;
    } else if (answer < min || answer > max) {
      error.textContent = `Please Enter a valid Number between ${min} and ${max}`;
      reply.textContent = ``;
    } else {
      count++;
      if (answer < guess) {
        reply.textContent = `The Guessed Number ${answer} is too LOW`;
      } else if (answer > guess) {
        reply.textContent = `The Guessed Number ${answer} is too High`;
      } else {
        reply.textContent = `The Guessed Number is correct`;
        guessnumber.textContent = `${guess}`;
        running = false;
      }
      attempts.textContent = `Attempts : ${count}`;
      error.textContent = ``;
      console.log(guess);
    }
  }
};

refresh.onclick = function(){
    location.reload();
}