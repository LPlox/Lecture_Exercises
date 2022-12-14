function checkScope() {
	let i = "function scope";
	if (true) {
		let j = "block scope";
		console.log("Block scope i is: ", j);
	}
	console.log("Function scope i is: ", i);
	return i;
}

checkScope();
