var introduction = ["Hello", "I", "am", "Sarah"];

var [greeting, , , name] = ["Hello", "I", "am", "Sarah"];
const { 0: greeting, 3: name } = introduction;

console.log(greeting); //"Hello"
console.log(name); //"Sarah"
