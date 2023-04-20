let gastos = [];
let flag = true;
let opt;

let showMenu = () => {
	return parseFloat(
		prompt(
			"Seleccione una opción:\n1. Añadir un gasto\n2. Mostrar gastos \
			\n3. Eliminar un gasto\n4. Modificar un gasto\n5. Salir"
		)
	);
};

let newGasto = () => {
	let nuevoGasto = parseFloat(prompt("Introduce el valor del nuevo gasto:"));
	gastos.push(nuevoGasto);
};

let printGastos = () => {
	let message = "";
	gastos.forEach((element, index) => {
		message += `ID movimiento: ${index + 1} Gasto: ${element}€\n`;
	});
	return message;
};

let delGasto = () => {
	let pos = parseFloat(
		prompt(
			`Introduce el número de movimiento a eliminar:\n${printGastos()}`
		)
	);
	gastos.splice(pos - 1, 1);
	alert(`Valor eliminado. Lista de gastos actual:\n${printGastos()}`);
};

let modGasto = () => {
	let pos = parseFloat(
		prompt(
			`Introduce el número de movimiento a modificar:\n${printGastos()}`
		)
	);
	let newValue = parseFloat(prompt("Introduce la nueva cantidad:"));
	gastos[pos - 1] = newValue;
	alert(`Valor modificado. Lista de gastos actual:\n${printGastos()}`);
};

while (flag) {
	opt = showMenu();
	switch (opt) {
		case 1:
			newGasto();
			break;
		case 2:
			alert(printGastos());
			break;
		case 3:
			delGasto();
			break;
		case 4:
			modGasto();
			break;
		case 5:
			alert("Adios!");
			flag = false;
			break;
		default:
			alert("Opción no valida");
			break;
	}
}
