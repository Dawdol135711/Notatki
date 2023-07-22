// Functionality for showing notes
const colors = document.querySelector(".colors");
const colorsBtn = document.querySelector(".colors-btn");
const colorsBtn2 = document.querySelector(".btn");
const sizing = document.querySelector(".sizing");
const sizingBtn = document.querySelector(".sizing-btn");
const conect = document.querySelector(".conect");
const conectBtn = document.querySelector(".conect-btn");

function showadd() {
	colors.classList.toggle("show");
}
colorsBtn.addEventListener("click", showadd);

function sizingVisible() {
	sizing.classList.toggle("show");
}
sizingBtn.addEventListener("click", sizingVisible);

function conectVisible() {
	conect.classList.toggle("show");
}
conectBtn.addEventListener("click", conectVisible);

// Functionality for calculation *2,36
const inputs = document.querySelectorAll(".calcInput");
const calc = document.querySelector(".calc");
function calcShow() {
	inputs.forEach(element => {
		element.classList.toggle("show");
	});
}
calc.addEventListener("click", calcShow);
// const calcValue = document.querySelector(".in")
// const equals = document.querySelector(".out")
// const value = calcValue.value

// function debug(){
// 	console.log(value);
// 	equals.value = value;
// }
// calcValue.addEventListener("input", debug)

const calcValue = document.querySelector(".in");
const equals = document.querySelector(".out");

function debug() {
  const value = parseFloat(calcValue.value);

  if (!isNaN(value)) {
    equals.value = value*2.36;
  } else {
    equals.value = "Wprowadź liczbę!";
  }
}

calcValue.addEventListener("input", debug);