let button = document.querySelector("#submitButton");
let p = document.querySelector("#empty");
let input = document.querySelector("#input");

button.addEventListener("click", (e) => {
	e.preventDefault();
	p.innerText = input.value;
	if (input.value.length < 5)
		p.classList.add("red");
	else
		p.classList.remove("red");
	document.querySelector("#form").reset();
});
