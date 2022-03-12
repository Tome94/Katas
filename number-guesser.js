//generates a random number
function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let number = randomNum(1, 10);
console.log(number);

let prompt = require("prompt-sync")();
let attempts = 0;
let guesses = [];
while (prompt !== number) {
  let guess = prompt("Guess a number: ");
  console.log(typeof guess);
  if (!guesses.includes(guess) && /\d/.test(guess)) {
    attempts++;
  }
  if (isNaN(guess)) {
    console.log("Not a number");
  }
  if (guesses.includes(guess)) {
    console.log("you already guess this");
  }
  if (number > guess) {
    console.log("you guess too low");
  } else if (number < guess) {
    console.log("you guess too high");
  } else if (number == guess) {
    console.log(`you got it! It took ${attempts} guesses`);
    break;
  }
  guesses.push(guess);
}
//console.log (guesses)