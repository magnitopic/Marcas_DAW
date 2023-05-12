const submitButton = document.querySelector("#register");
const errorBox = document.querySelector("#error-box");

submitButton.addEventListener("click", (e) => {
	e.preventDefault();

	let flag = false;
	let structure = "";
	const name = document.querySelector("#name").value;
	const email = document.querySelector("#email").value;
	const genero = document.querySelector("input[name='genero']:checked");
	const terms = document.querySelector("#terms").checked;

	if (name == "") {
		structure += "<li>Por favor completa el nombre</li>";
		flag = true;
	}
	if (email == "") {
		structure += "<li>Por favor completa el email</li>\n";
		flag = true;
	}
	if (genero == null) {
		structure += "<li>Por favor selecciona el sexo</li>\n";
		flag = true;
	}
	if (terms == false) {
		structure += "<li>Por favor acepta los términos y condiciones</li>\n";
		flag = true;
	}

	if (flag) errorBox.style.display = "flex";
	else errorBox.style.display = "none";

	errorBox.innerHTML = structure;
});
