/**
 * Arrays
 * 43 ACCESS MULTI-DIMENSIONAL ARRAYS WITH INDEXES
 * One way to think of a multi-dimensional array, is as an array of arrays. When you use brackets to access your array, the first set of brackets refers to the entries in the outer-most (the first level) array, and each additional pair of brackets refers to the next level of entries inside.
 *
 *
 * Note: There shouldn't be any spaces between the array name and the square brackets, like array [0][0] and even this array [0] [0] is not allowed. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.
 *
 * TASK
 * Using bracket notation select an element from myArray such that myData is equal to 8. Try to do the same for number 12.
 */

const myArray = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[[10, 11, 12], 13, 14],
];

// Only change code below this line
const firstNumber = myArray[0][0];
const secondNumber = myArray[0][0];

console.log(firstNumber);
console.log(secondNumber);
