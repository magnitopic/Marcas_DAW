let buttonSubmit = document.querySelector("#submit");
let userMessage = document.querySelector("#userMessage");
let select = document.querySelector("select");
let buttons = document.querySelectorAll(".switchButtons");

let CompruebaUser = (e) => {
	e.stopPropagation();
	e.preventDefault();

	let inputValue = document.querySelector("#user").value;

	if (
		inputValue === "admin" ||
		inputValue === "facturación" ||
		inputValue === "marketing"
	) {
		userMessage.innerText = "Bienvenido " + inputValue;
		userMessage.style.display = "flex";
		userMessage.style.color = "black";
	} else {
		userMessage.innerText = "Usuario no válido";
		userMessage.style.display = "flex";
		userMessage.style.color = "red";
	}
};

let checkYear = () => {
	if (select.value != "a") alert(select.value);
};

let checkButtons = () => {
	buttons[0].disabled = !buttons[0].disabled;
	buttons[1].disabled = !buttons[1].disabled;
};

buttonSubmit.addEventListener("click", CompruebaUser);
select.addEventListener("change", checkYear);
buttons[0].addEventListener("click", checkButtons);
buttons[1].addEventListener("click", checkButtons);
