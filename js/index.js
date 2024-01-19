//all global variables
let life = 5;
let isGamePlayOn = false;
const allAlphabets = "abcdefghijklmnopqrstuvwxyz".split("");
const audio = new Audio();

//all html objects
const homeSection = document.getElementById("home"); // The Home Page container
const playGroundSection = document.getElementById("play-ground"); // game-play container
const resultSection = document.getElementById("result"); // result container
const displayContainer = document.getElementById("display"); // result container

// all buttons
const playBtn = document.getElementById("play"); //play Button
const restartBtn = document.getElementById("restart-btn"); // restart Button
const keysBtn = document.getElementsByTagName("kbd"); // all keys in the keyboard container

// all text contents
const screenText = document.getElementById("screen-text"); // screen text on gameplay
const scoreCount = document.getElementById("score"); //score on gameplay Nav
const lifeCount = document.getElementById("life"); //life on gameplay Nav
const resultCount = document.getElementById("result-count"); //final score on result count

function getRandomChar() {
  const random = Math.random() * 25; //showing a random alphabet on screen start
  const randomIndex = parseInt(random).toFixed(0);
  const randomChar = allAlphabets[randomIndex];
  screenText.innerText = randomChar; //showing a random alphabet on screen end

  for (let key of keysBtn) {
    if (key.innerText == randomChar) {
      key.style.background = "orange"; //making the key color orange
    } else {
      key.style.background = "white";
    }
  }
}
//Event listener for playBtn

function reStart() {
  playGroundSection.classList.remove("hidden");

  resultSection.classList.remove("flex");
  resultSection.classList.add("hidden");

  homeSection.classList.remove("flex");
  homeSection.classList.add("hidden");

  isGamePlayOn = true;
  life = 5;
  lifeCount.innerText = 5;
  scoreCount.innerText = 0;
  getRandomChar();
}

playBtn.addEventListener("click", function () {
  reStart();
});

document.addEventListener("keyup", function (e) {
  //checking if user hit enter and game play is not on then it triggering on play buttons
  const pressedBtn = e.key;
  console.log(pressedBtn);
  if (pressedBtn == "Enter") {
    reStart();
  }

  if (isGamePlayOn == false) {
    return;
  }

  const indexOfPressedBtn = allAlphabets.indexOf(pressedBtn);
  if (indexOfPressedBtn == -1) {
    return;
  }

  if (pressedBtn == screenText.innerText.toLowerCase()) {
    audio.src = "./../assests/audio/success.mp3"; //success audio will sound
    audio.play();
    incrementCount("score"); //score incrementing with function
    getRandomChar(); // again calling for next alphabet
  } else {
    audio.src = "./../assests/audio/wrong.mp3"; //error audio will sound
    audio.play();
    decrementCount("life");
    life--;

    if (life == 0) {
      isGamePlayOn = false; //ending gameplay to ignore the other keyboard events
      playGroundSection.classList.add("hidden"); //hiding playground
      resultSection.classList.remove("hidden"); //showing result
      resultSection.classList.add("flex");
      resultCount.innerText = scoreCount.innerText;
    }
  }
});

restartBtn.addEventListener("click", function () {
  reStart();
});
