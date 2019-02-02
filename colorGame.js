var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");

init();

function init() {
  //modeBtn,eventlisteners
  setupModeButtons();
  setupSquares();
  reset();
}

resetBtn.addEventListener("click", function() {
  reset();
});

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    // squares[i].style.background = colors[i];
    //add click listeners to sqares
    squares[i].addEventListener("click", function() {
      //grab color of clicked sqare
      var clickedColor = this.style.background;
      //compare color to picked color
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!!!";
        changeColors(clickedColor);
        resetBtn.textContent = "Play Again!!!";
        h1.style.background = pickedColor;
      } else {
        this.style.background = "#232323";
        messageDisplay.textContent = "Try again!!!";
      }
    });
  }

  reset();
}
function setupModeButtons() {
  for (var i = 0; i < modeBtn.length; i++) {
    modeBtn[i].addEventListener("click", function() {
      modeBtn[0].classList.remove("selected");
      modeBtn[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
      reset();
    });
  }
}

function reset() {
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  resetBtn.textContent = "New Colors";
  messageDisplay.textContent = "";
  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
}

function changeColors(color) {
  //loop through all colors
  for (var i = 0; i < squares.length; i++) {
    //change each color to match given color
    squares[i].style.background = color;
  }
}
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
function generateRandomColors(num) {
  //make an array
  var arr = [];
  //repeat num times
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  //add num random colors to array
  //return that array
  return arr;
}

function randomColor() {
  //pick a 'red' from 0 to 255
  var r = Math.floor(Math.random() * 256);
  //pick a 'green' from 0 to 255
  var g = Math.floor(Math.random() * 256);
  //pick a 'blue' from 0 to 255
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
