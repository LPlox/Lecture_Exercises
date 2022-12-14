function testLogicalAnd(val) {
  // Only change code below this line
  if (val <= 50 && val >= 25) {
    return 'Yes'
  }
  // Only change code above this line
  return "No";
}

console.log(testLogicalAnd(25)) //should return the string Yes
console.log(testLogicalAnd(24)) //should return the string Yes
console.log(testLogicalAnd(51)) //should return the string No
console.log(testLogicalAnd(50)) //should return the string Yes
console.log(testLogicalAnd(80)) //should return the string No