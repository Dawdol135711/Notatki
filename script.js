const colors = document.querySelector(".colors");
const colorsBtn = document.querySelector(".colors-btn");
const colorsBtn2 = document.querySelector(".btn");

function showadd() {
	colors.classList.toggle("show");
}
colorsBtn.addEventListener("click", showadd);
