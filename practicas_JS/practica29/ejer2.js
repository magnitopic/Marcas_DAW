let random = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

let combination = [];
let rnd;
while (combination.length != 6) {
	rnd = random(1, 49);
	if (!combination.includes(rnd)) {
		combination.push(rnd);
	}
}

alert(`Esta es la combinación que te va a hacer rico:\n${combination} y reintegro ${random(0,9)}`)

console.log(combination);
