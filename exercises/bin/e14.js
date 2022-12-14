/**
 * 101 Nesting For Loops
 * 
 * If you have a multi-dimensional array, you can use the same logic as the 
 * prior waypoint to loop through both the array and any sub-arrays.
 * 
 * Tasks
 * Modify function multiplyAll so that it returns the product of all 
 * the numbers in the sub-arrays of arr.
 */

function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line

  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
multiplyAll([[1], [2], [3]]) //should return 6
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]) //should return 5040
multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]]) //should return 54