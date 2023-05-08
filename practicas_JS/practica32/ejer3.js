let button = document.querySelector(".btn");
let code = document.querySelector(".color-code");

button.addEventListener("click", (e) => {
	let newColor = "#"+ Math.floor(Math.random() * 16777215)
		.toString(16)
		.toUpperCase();
	code.innerText = newColor;
	code.style.background = newColor;
});
