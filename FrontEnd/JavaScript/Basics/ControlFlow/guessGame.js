var secretNumber = 9;

var guess = Number(prompt("Guess a number"));

if(guess === secretNumber) {
  alert("You guessed it!");
} else if(guess < secretNumber) {
  alert("Too low. Try Again.");
} else {
  alert("Too high. Try Again.");
}