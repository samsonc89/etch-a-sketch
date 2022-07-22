"use strict";
/*

User picks a number a

number is then passed to formula to find out how many
squares to add (a x a)

after divs are made select ALL of them and add class list with loop

css grid width/height calculation is then changed to a

*/
const gridContainer = document.querySelector(".grid-container");
const gridRules = document.styleSheets[0].cssRules[4];
const userColor = document.querySelector("#color");
const gridText = document.querySelector("#grid-size");

userColor.onchange = (e) => {
  console.log(e.target.value);
};

let rows = 10;

let currentColor = "rgb(0, 0, 0)";

const gridSize = function () {
  gridRules.style.cssText = `box-sizing: border-box;
    border: 1px solid black; width: calc(100% / ${rows}); height: calc(100% / ${rows});`;
};

const addSquares = function () {
  const squares = document.querySelectorAll(".grid");
  squares.forEach((square) =>
    square.addEventListener("mouseenter", () => {
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
  addSquares();
};

createDiv();
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

//functionality for reset button
document.querySelector("#reset").addEventListener("click", clearGrid);

//functionality for resize button
document.querySelector("#resize").addEventListener("click", resize);

//functionality for color picker

/*

each color button changes a state
the state modifies which color

user

*/
