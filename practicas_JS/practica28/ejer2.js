let ciudades = [];
let nCiudades = parseInt(prompt("Cuantas ciudades quieres recoger?", "4"));

for (let i = 0; i < nCiudades; i++) {
	ciudades.push(prompt("Introduce una ciudad: "));
}

for (let i = 0; i < ciudades.length; i++) {
	alert("Ciudad " + (i + 1) + ": " + ciudades[i]);
}
