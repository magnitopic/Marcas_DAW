const ciudades = ["Cuenca", "Granada", "Soria", "Madrid", "Teruel"];
const list = document.createElement("ul");

ciudades.forEach(e => {
	let element = document.createElement("li");
	if (e ==="Granada")
		element.setAttribute("title","Tierra Soñada");
	else if (e === "Madrid")
		element.classList.toggle("madrid");
	element.textContent = e;
	list.append(element);
});
document.querySelector("body").append(list);