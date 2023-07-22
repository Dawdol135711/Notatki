const colors = document.querySelector(".colors");
const colorsBtn = document.querySelector(".colors-btn");
const colorsBtn2 = document.querySelector(".btn");
const sizing = document.querySelector(".sizing");
const sizingBtn = document.querySelector(".sizing-btn");
const conect = document.querySelector(".conect")
const conectBtn = document.querySelector('.conect-btn')

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

