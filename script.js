"use strict";
/*

User picks a number a

number is then passed to formula to find out how many
squares to add (a x a)

after divs are made select ALL of them and add class list with loop

css grid width/height calculation is then changed to a

*/
//declarations
const gridContainer = document.querySelector(".grid-container");
const gridRules = document.styleSheets[0].cssRules[4];
const userColor = document.querySelector("#color");
const gridText = document.querySelector("#grid-size");
const rainbowBtn = document.querySelector("#rainbow-picker");
const blackBtn = document.querySelector("#black");
const colorBtn = document.querySelectorAll("#color, label, .color-area");

let randomColor;
const randomColorGenerator = function () {
  return (randomColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16));
};

let rows = 16;
let currentState = "#000000";

//functions
const gridSize = function () {
  gridRules.style.cssText = `box-sizing: border-box;
    border: 1px solid black; width: calc(100% / ${rows}); height: calc(100% / ${rows});`;
};

const addColor = function (color = "#000000") {
  const squares = document.querySelectorAll(".grid");
  let currentColor;
  squares.forEach((square) =>
    square.addEventListener("mouseenter", () => {
      if (currentState == "random") {
        currentColor = randomColorGenerator();
      } else {
        currentColor = currentState;
      }
      square.style.backgroundColor = `${currentColor}`;
    })
  );
};

const createDiv = function () {
  let square = rows * rows;

  gridSize();

  for (let i = 0; i < square; i++) {
    const div = document.createElement("div");
    div.classList = "grid";
    gridContainer.appendChild(div);
  }
};

createDiv();
addColor();
blackBtn.classList.add("selected");
/*
SET state to black
nned to change the state for when rainbow is selected. when resizing, it goes to last color
currentColor = currentState
*/

const clearGrid = function () {
  const squares = document.querySelectorAll(".grid");
  squares.forEach((square) => {
    square.style.backgroundColor = "";
  });
};

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

const resize = function () {
  removeAllChildNodes(gridContainer);
  let input = prompt("How many rows would you like?", Number());
  if (input <= 0 || input > 100) {
    alert("Not a valid size. You have broken the page!");
  } else {
    rows = +input;
    createDiv();
    addColor();
    gridText.textContent = `${rows} x ${rows}`;
  }
};

//functionality for buttons
//reset button
document.querySelector("#reset").addEventListener("click", clearGrid);

//resize button
document.querySelector("#resize").addEventListener("click", resize);

//rainbow
rainbowBtn.addEventListener("click", () => {
  currentState = "random";
  blackBtn.classList.remove("selected");
  colorBtn.forEach((btn) => btn.classList.remove("selected"));
  rainbowBtn.classList.add("selected");
});

blackBtn.addEventListener("click", () => {
  currentState = "#000000";
  rainbowBtn.classList.remove("selected");
  colorBtn.forEach((btn) => btn.classList.remove("selected"));
  blackBtn.classList.add("selected");
});

//functionality for color picker
document.querySelector(".color-area").addEventListener("change", (e) => {
  currentState = e.target.value;
  rainbowBtn.classList.remove("selected");
  blackBtn.classList.remove("selected");
  colorBtn.forEach((btn) => btn.classList.add("selected"));
});

/*

each color button changes a state
the state modifies which color is current

user

*/
