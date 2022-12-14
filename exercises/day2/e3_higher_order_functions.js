/**
 * Write functions to sort/modify the object array
 * Use console.log() to check your answers.
 */

var grades = [
	{ name: "John", grade: 8, sex: "M" },
	{ name: "Sarah", grade: 12, sex: "F" },
	{ name: "Bob", grade: 16, sex: "M" },
	{ name: "Johnny", grade: 2, sex: "M" },
	{ name: "Ethan", grade: 4, sex: "M" },
	{ name: "Paula", grade: 18, sex: "F" },
	{ name: "Donald", grade: 5, sex: "M" },
	{ name: "Jennifer", grade: 13, sex: "F" },
	{ name: "Courtney", grade: 15, sex: "F" },
	{ name: "Jane", grade: 9, sex: "F" },
];

// Only change code below this line

// 1. Get all the names of the students in a new array

// 2. Get all the objects in another array if the students grades are below 10

// 3. Print out all the sexes in the console (don’t save it to a variable)

/**
 * Write functions to sort/modify the object array
 * Use console.log() to check your answers.
 */

var students = [
	{ name: "John", grade: 8, sex: "M" },
	{ name: "Sarah", grade: 12, sex: "F" },
	{ name: "Bob", grade: 16, sex: "M" },
	{ name: "Johnny", grade: 2, sex: "M" },
	{ name: "Ethan", grade: 4, sex: "M" },
	{ name: "Paula", grade: 18, sex: "F" },
	{ name: "Donald", grade: 5, sex: "M" },
	{ name: "Jennifer", grade: 13, sex: "F" },
	{ name: "Courtney", grade: 15, sex: "F" },
	{ name: "Jane", grade: 9, sex: "F" },
];

// Only change code below this line

// 1. Get all the names of the students in a new array
const gradesNames = grades.map((students) => {
	return students.name;
});
console.log(gradesNames);
// 2. Get all the objects in another array if the students grades are below 10
let filterGrades = grades.filter((grade) => {
	return grade.grade < 10;
});
console.log(filterGrades);
// 3. Print out all the sexes in the console (don’t save it to a variable)
grades.forEach((sex) => {
	console.log(sex.sex);
});
