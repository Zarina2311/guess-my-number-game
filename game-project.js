let range;
let answer;

// guess button
let guessButton = document.querySelector(".submit");
function handleGuessClick(event) {
  event.preventDefault();
  let guess = document.querySelector(".number").value;

  if (answer === undefined) {
    alert("Please choose a range");
  } else if (guess === "") {
    alert("Please enter a number");
  } else if (guess > range || guess < 0) {
    alert("The guess is out of range");
  } else if (guess < answer) {
    alert("The answer is higher. Try again!");
  } else if (guess > answer) {
    alert ("The answer is lower. Try again!");
  } else {
    alert("Great job! That's the correct number!");
  }
}
guessButton.addEventListener("click", handleGuessClick);

// range buttons
let range10Button = document.querySelector(".range10");
let range50Button = document.querySelector(".range50");
let range100Button = document.querySelector(".range100");

function handleRange10Click(event) {
  range10Button.classList.add('selected');
  range50Button.classList.remove('selected');
  range100Button.classList.remove('selected');
  range = 10;
  answer = Math.floor(Math.random() * range);
};

function handleRange50Click(event) {
  range10Button.classList.remove('selected');
  range50Button.classList.add('selected');
  range100Button.classList.remove('selected');
  range = 50;
  answer = Math.floor(Math.random() * range);
};

function handleRange100Click(event) {
  range10Button.classList.remove('selected');
  range50Button.classList.remove('selected');
  range100Button.classList.add('selected');
  range = 100;
  answer = Math.floor(Math.random() * range);
};

range10Button.addEventListener("click", handleRange10Click);
range50Button.addEventListener("click", handleRange50Click);
range100Button.addEventListener("click", handleRange100Click);








/*

let answer = Math.floor(Math.random() * 100);

let alertPopUp = document.querySelector(".submit");

function handleClick(event) {
  event.preventDefault();
  let guess = document.querySelector(".number").value;
  
if (guess === "") {
    alert("Please enter a number");
  } else if (guess < answer) {
    alert("The answer is higher. Try again!");
  } else if (guess > answer) {
    alert ("The answer is lower. Try again!");
  } else {
    alert("Great job! That's the correct number!");
  }
};

alertPopUp.addEventListener("click", handleClick);

*/