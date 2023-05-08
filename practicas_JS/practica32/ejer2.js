let opt = document.querySelector("#languages");
let p = document.querySelector("#text");
opt.addEventListener("change", (e) => {
	p.innerText = "El lenguaje elegido es: " + opt.value;
});
