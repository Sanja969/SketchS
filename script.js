
"use strict";
window.onload = () => {
  newGrid(16);
};

function gridSize() {
  let x = parseInt(
    prompt(
      "Pick the number of square per grid. The number need to be between 1 and 20"
    )
  );
  newGrid(x);
}


function newGrid(x) {
  const gridBox = document.querySelector(".gridBox");
  gridBox.innerHTML = "";
  let count = [];
  const square = [];

  let y = 1080 / x;

  if (x < 4 || x > 100) {
    alert("You picked the wrong number!");
    return;
  }
  document.querySelector(".gridNumber").textContent = x + "x" + x;

  for (let j = 0; j < x; j++) {
    count[j] = [];
    square[j] = document.createElement("div");
    square[j].classList.add("row");
    gridBox.appendChild(square[j]);
    square[j].style.height = y + "px";
    square[j].style.display = "flex";

    for (let i = 0; i < x; i++) {
      count[j][i] = 0;
      square[j][i] = document.createElement("div");
      square[j][i].classList.add("square");
      square[j].appendChild(square[j][i]);
      //square[j][i].style.border = "2px solid rgb(237, 237, 237)";
      square[j][i].style.flex = "1";

      square[j][i].addEventListener("mouseover", function () {
        count[j][i]++;
        let c = count[j][i] / 10;
        square[j][i].style.backgroundColor = "rgb(0, 0, 0," + c + ")";
      });
    }
  }
}