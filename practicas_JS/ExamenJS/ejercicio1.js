let button = document.querySelector("button");
const expresionEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
const EXPREGULARPASS = / ^(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z]).{8,16}$/;

button.addEventListener("click", (e) => {
	e.stopPropagation();
	e.preventDefault();
	let email = document.querySelector("#email").value;
	let pass = document.querySelector("#pass").value;
	let errors = document.querySelectorAll(".error");

	if (email == "") {
		errors[0].innerText = "Por favor, introduzca un Email";
		errors[0].style.display = "flex";
	} else if (!expresionEmail.test(email)) {
		errors[0].innerText = "Por favor inserte un Email válido";
		errors[0].style.display = "flex";
	} else {
		errors[0].style.display = "none";
	}
	if (pass == "") {
		errors[1].innerText = "Por favor, introduzca una Contraseña";
		errors[1].style.display = "flex";
	} else if (!EXPREGULARPASS.test(pass)) {
		errors[1].innerText = "Por favor inserte una Contraseña válida";
		errors[1].style.display = "flex";
	} else {
		errors[1].style.display = "none";
	}
});
