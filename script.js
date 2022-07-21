"use strict";
/*

User picks a number a

number is then passed to formula to find out how many
squares to add (a x a)

after divs are made select ALL of them and add class list with loop

css grid width/height calculation is then changed to a

*/
const gridContainer = document.querySelector(".grid-container");

// const styleSheet = document.querySelector("#stylesheet");
const gridRules = document.styleSheets[0].cssRules[4];

const gridSize = function () {
  gridRules.style.cssText = `box-sizing: border-box;
  border: 1px solid black; width: calc(100% / ${rows}); height: calc(100% / ${rows});`;
  console.log(gridRules);
};

let rows = 10;

const createDiv = function () {
  let squares = rows * rows;

  gridSize();
  for (let i = 0; i < squares; i++) {
    const div = document.createElement("div");
    div.classList = "grid";
    gridContainer.appendChild(div);
  }
};
// gridContainer.appendChild()

document.querySelector("#reset").addEventListener("click", createDiv);
