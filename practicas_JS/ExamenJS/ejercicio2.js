let input = document.querySelector("#textInput");
let result = document.querySelector("#result");

input.addEventListener("input", () => {
	let text = document.querySelector("#textInput").value;

	if (text == "") {
		result.innerText = "por favor inserte información";
		result.style.color = "red";
	} else {
		result.style.color = "black";
		result.innerText = text;
	}
});
