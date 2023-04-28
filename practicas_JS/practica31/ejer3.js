const container = document.querySelector(".app");

container.textContent = "Soy un texto en el centro";

const colours = ["red", "green", "blue", "yellow", "pink", "purple", "orange"];

const colour = colours[Math.floor(Math.random() * colours.length)];

if (colour === "red" || colour === "green" || colour === "blue") {
	container.style.cssText = `
	background-color: ${colour};
	width: 100px;
	height: 100px;`;
} else if (colour === "yellow" || colour === "pink" || colour === "purple") {
	container.style.cssText = `
	background-color: ${colour};
	width: 200px;
	height: 200px;`;
} else if (colour === "orange") {
	container.style.cssText = `
	background-color: ${colour};
	width: 200px;
	height: 200px;`;
}
