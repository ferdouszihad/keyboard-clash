let life = 5;
let isGamePlayOn = false;
const lang = "abcdefghijklmnopqrstuvwxyz".split("");
const audio = new Audio();
console.log(lang);

document.getElementById("play").addEventListener("click", function () {
  const home = document.getElementById("home");
  const playGround = document.getElementById("play-ground");
  playGround.classList.remove("hidden");
  home.classList.add("hidden");
  isGamePlayOn = true;
  getRandomChar();
});

function getRandomChar() {
  const random = parseInt((Math.random() * 25).toFixed(0));
  const randomChar = lang[random];
  //
  const screen = document.getElementById("screen");
  screen.innerText = randomChar;

  const allkeys = document.getElementsByTagName("kbd");
  for (let key of allkeys) {
    if (key.innerText == randomChar.toLowerCase()) {
      key.style.background = "orange";
    } else {
      key.style.background = "white";
    }
  }

  console.log(randomChar);
}

document.addEventListener("keyup", (e) => {
  if (e.key == "Enter" && !isGamePlayOn) {
    document.getElementById("play").click();
    document.getElementById("restart-btn").click();
  }
  if (!isGamePlayOn) return;
  console.log(e.key);
  const screen = document.getElementById("screen");
  if (e.key.length == 1 && isNaN(e.key)) {
    if (e.key.toLowerCase() == screen.innerText.toLowerCase()) {
      //   screen.innerText = "KILLED";
      audio.src = "./../assests/audio/success.mp3";
      audio.play();
      const score = document.getElementById("score");
      score.innerText = parseInt(score.innerText) + 1;

      //   setTimeout(() => {
      //     getRandomChar();
      //   }, 500);
      getRandomChar();
    } else {
      audio.src = "./../assests/audio/wrong.mp3";
      audio.play();
      const lifeContainer = document.getElementById("life");
      lifeContainer.innerText = parseInt(lifeContainer.innerText) - 1;
      life--;
      const display = document.getElementById("display");
      display.style.background =
        "linear-gradient( rgb(0,0,0,0) ,rgb(100,0,0," +
        (1 - life / 5) +
        ")) ,#ddd";
      console.log(life);
      if (life == 0) {
        isGamePlayOn = false;
        const play = document.getElementById("play-ground");
        play.classList.add("hidden");
        const result = document.getElementById("result");
        result.classList.remove("hidden");
        result.classList.add("flex");
        const resultNumber = document.getElementById("result-number");
        const score = document.getElementById("score");
        resultNumber.innerText = score.innerText;
      }
    }
  }
});

document.getElementById("restart-btn").addEventListener("click", function () {
  isGamePlayOn = true;
  document.getElementById("score").innerText = 0;
  document.getElementById("life").innerText = 5;
  life = 5;
  const result = document.getElementById("result");
  result.classList.remove("flex");
  result.classList.add("hidden");
  const playGround = document.getElementById("play-ground");
  playGround.classList.remove("hidden");
  const display = document.getElementById("display");
  display.style.background =
    "linear-gradient( rgb(0,0,0,0) ,rgb(100,0,0,0)) ,#ddd";
});
