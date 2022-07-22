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
let randomColor;
const randomColorGenerator = function () {
  return (randomColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16));
};

userColor.onchange = (e) => {
  console.log(e.target.value);
};

let rows = 10;

let currentColor = "#000000";

//functions
const gridSize = function () {
  gridRules.style.cssText = `box-sizing: border-box;
    border: 1px solid black; width: calc(100% / ${rows}); height: calc(100% / ${rows});`;
};

const addColor = function (color = "#000000") {
  const squares = document.querySelectorAll(".grid");
  squares.forEach((square) =>
    square.addEventListener("mouseenter", () => {
      currentColor = color;
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
  addColor();
};

createDiv();

// const state = function (color) {
//     //changes color based on input
//     currentColor = color;
//     const squares = document.querySelectorAll(".grid");
//   squares.forEach((square) =>
//     square.addEventListener("mouseenter", () => {
//       square.style.backgroundColor = `${currentColor}`;
//     })
//   );
// };

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
  rows = +input;
  createDiv();
  gridText.textContent = `${rows} x ${rows}`;
};

const rainbowGenerator = function () {};

//functionality for buttons
//reset button
document.querySelector("#reset").addEventListener("click", clearGrid);

//resize button
document.querySelector("#resize").addEventListener("click", resize);

//rainbow
document.querySelector("#rainbow-picker").addEventListener("click", () => {
  const squares = document.querySelectorAll(".grid");
  squares.forEach((square) =>
    square.addEventListener("mouseenter", () => {
      randomColorGenerator();
      currentColor = randomColor;
      square.style.backgroundColor = `${currentColor}`;
      console.log(randomColor);
    })
  );
});

document.querySelector("#black").addEventListener("click", () => {
  addColor();
});

//functionality for color picker

/*

each color button changes a state
the state modifies which color is current

user

*/
