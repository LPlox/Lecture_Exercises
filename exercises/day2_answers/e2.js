const countRange = (min, max) => {
	let x = min;
	while (x !== max) {
		console.log(x);
		x++;
	}
};

document.addEventListener("click", () => console.log("Click"));
