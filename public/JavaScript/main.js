// dom declaration
const startButton = document.getElementById("start");
const levelText = document.getElementById("level");
const modal = document.getElementById("modal_overlay");
const modalButton = document.getElementById("modal_button");
const scoreText = document.getElementById("score");

// arrayMain for referencing the random set of color
// arrayInGame for set of colors in every level always clear every level
const arrayBox = ["box_green", "box_yellow", "box_red", "box_blue"];
const arrayMain = [];
const arrayInGame = [];
let highestScore = 0;
let currentScore = 0;

// fuction to reset game 
function resetGame() {
    arrayMain.length = arrayInGame.length = currentScore = 0;
    levelText.innerText = "Level " + 1;

    startButton.innerText = "Start";
    disableBoxButton(true, true);
    disbleStartButton(false);
