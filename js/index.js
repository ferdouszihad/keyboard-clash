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
const resultCount = document.getElementById("result-count"); //life on gameplay Nav

//Event listener for playBtn
playBtn.addEventListener("click", function () {
  playGroundSection.classList.remove("hidden");
  homeSection.classList.add("hidden");
  isGamePlayOn = true;
  getRandomChar();
});

function getRandomChar() {
  //showing a random alphabet on screen
  const random = parseInt((Math.random() * 25).toFixed(0));
  const randomChar = allAlphabets[random];
  screenText.innerText = randomChar;

  //making the key color orange
  for (let key of keysBtn) {
    if (key.innerText.toLowerCase() == randomChar.toLowerCase()) {
      key.style.background = "orange";
    } else {
      key.style.background = "white";
    }
  }
  // random alphabet is showing on screen and key background also changed now
}

//adding key event To Our whole Document
document.addEventListener("keyup", (e) => {
  //checking if user hit enter and game play is not on then it triggering on play buttons
  if (e.key == "Enter" && !isGamePlayOn) {
    playBtn.click();
    restartBtn.click();
  }

  //if gameplay is not running  then dont run the function
  if (!isGamePlayOn) return;

  //the scoring system will work  if user hit only on the buttons that are alphabets

  if (allAlphabets.indexOf(e.key.toLowerCase()) != -1) {
    //true-block::  if user hit in the right button showing on screen
    if (e.key.toLowerCase() == screenText.innerText.toLowerCase()) {
      //success audio will sound
      audio.src = "./../assests/audio/success.mp3";
      audio.play();

      //score incrementing
      scoreCount.innerText = parseInt(scoreCount.innerText) + 1;

      //it will call the function again for changing the alphabet
      getRandomChar();
      return;
    }
    //false block:: if user hit on the wrong key
    else {
      //error audio will sound
      audio.src = "./../assests/audio/wrong.mp3";
      audio.play();
      //life and global variable for life  are decrementing
      lifeCount.innerText = parseInt(lifeCount.innerText) - 1;
      life--;

      //adding a dynamic transparent red gradient on display
      displayContainer.style.background =
        "linear-gradient( rgb(0,0,0,0) ,rgb(100,0,0," +
        (1 - life / 5) +
        ")) ,#ddd";

      //now we will check the life . if it zero.  game will over
      if (life == 0) {
        //ending gameplay to ignore the other keyboard events
        isGamePlayOn = false;

        //Now hiding the playground and displaying the result
        playGroundSection.classList.add("hidden");
        //showing result background
        resultSection.classList.remove("hidden");
        resultSection.classList.add("flex");
        resultCount.innerText = scoreCount.innerText;
      }
    }
  }
});

restartBtn.addEventListener("click", function () {
  //on Clicking restart gameplay will on
  isGamePlayOn = true;
  //reseting the scores and life
  scoreCount.innerText = 0;
  lifeCount.innerText = 5;
  life = 5;

  //hiding result
  resultSection.classList.remove("flex");
  resultSection.classList.add("hidden");

  // showing playground
  playGroundSection.classList.remove("hidden");

  // reseting transparent red gradient on display
  display.style.background =
    "linear-gradient( rgb(0,0,0,0) ,rgb(100,0,0,0)) ,#ddd";
});
