const users = [
	{
		name: "Juan",
		age: 25,
		city: "Madrid",
		hobby: "fútbol",
	},
	{
		name: "María",
		age: 30,
		city: "Barcelona",
		hobby: "leer",
	},
	{
		name: "Pedro",
		age: 20,
		city: "Madrid",
		hobby: "programar",
	},
	{
		name: "Laura",
		age: 35,
		city: "Barcelona",
		hobby: "programar",
	},
	{
		name: "Pablo",
		age: 27,
		city: "Madrid",
		hobby: "poker",
	},
];

const madrid = users.filter((user) => {
	return user.city === "Madrid";
});

console.log(madrid);

const mayores25 = users.filter((user) => {
	return user.age > 25;
});
console.log(mayores25);

const programador = users.find((user) => {
	return user.hobby === "programar";
});
console.log(programador);