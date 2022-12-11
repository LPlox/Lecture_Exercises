/**
 * Objects
 * 93 ACCESSING NESTED OBJECTS
 * The sub-properties of objects can be accessed by chaining together the dot or bracket notation.
 *
 * TASK
 * Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use bracket notation.
 */

const myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};

const gloveBoxContents = undefined;
console.log(gloveBoxContents); //should console log maps
