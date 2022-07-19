"use strict";
/*

User picks a number a

number is then passed to formula to find out how many
squares to add (a x a)

after divs are made select ALL of them and add class list with loop

css grid width/height calculation is then changed to a

*/
const gridContainer = document.querySelector(".grid-container");

let input;

let rows = 2;

const createAndAddDiv = function () {
  let squares = rows * rows;

  for (let i = 0; i < squares; i++) {
    const div = document.createElement("div");
    div.classList = "grid";
    gridContainer.appendChild(div);
    const grids = document.querySelectorAll(".grid");
    grids.forEach((grid) => {
      grid.style.width = `calc(100% / ${rows})`;
      grid.style.height = `calc(100% / ${rows})`;
    });
  }
};
// gridContainer.appendChild()

document.querySelector("#reset").addEventListener("click", createAndAddDiv);
