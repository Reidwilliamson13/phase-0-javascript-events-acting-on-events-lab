// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  // leftNumbers is "39"
  const left = parseInt(leftNumbers, 10);

  if (left < 320) {
    dodger.style.left = `${left + 1}px`;
  }
}
document.addEventListener("keydown", function (e) {
  if (e.key === "arrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "arrowRight") {
    moveDodgerRight();
  }
});

let myAge = 25;
if (myAge >= 18 && myAge <= 30) {
  console.log("Yipee, i'm going on vacation!");
} else {
  console.log("Ok, go on!");
}

function sayhi() {
  console.log("Hello world");
}
sayhi();
