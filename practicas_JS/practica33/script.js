const submitButton = document.querySelector("#register");
const name = document.querySelector("#name").value;
const email = document.querySelector("#email").value;
const terms = document.querySelector("input[name='genero']:checked").value;

submitButton.addEventListener("click", (e)=>{
	e.preventDefault();
	console.log(terms);
})