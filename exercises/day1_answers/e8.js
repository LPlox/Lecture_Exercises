function nextInLine(arr, item) {
	// Only change code below this line
	arr.push(item);
	return arr.shift();
	// Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Testing the functions
console.log("should be [1,2,3,4,5]: " + JSON.stringify(testArr));
nextInLine(testArr, 6);
console.log("should be [2,3,4,5,6]: " + JSON.stringify(testArr));
console.log("should return a number: " + nextInLine([], 5));
console.log("should return 1: " + nextInLine([], 1));
console.log("should return 2: " + nextInLine([2], 1));
console.log("should return 5: " + nextInLine([5, 6, 7, 8, 9], 1));
nextInLine(testArr, 10);
console.log("should be 10: " + testArr[4]);
