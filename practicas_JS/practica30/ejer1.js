const parrafos = document.querySelectorAll("p");
parrafos.forEach((e) => {
	console.log(e.textContent);
});

const classParrafo = document.querySelectorAll(".parrafo");
classParrafo.forEach((e) => {
	console.log(e.textContent);
});

classParrafo.forEach((e) => {
	e.textContent = "Hola Mundo";
});

classParrafo.forEach((e) => {
	const newSpan = document.createElement("div");
	newSpan.innerText="Infiltrado"
	e.appendChild(newSpan);
});
