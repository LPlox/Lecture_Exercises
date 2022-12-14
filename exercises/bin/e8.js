/**
 * 75 Golf Code HARD!
 * In the game of Golf, each hole has a par, meaning, the average number of strokes
 * a golfer is expected to make in order to sink the ball in the hole to complete
 * the play. Depending on how far above or below par your strokes are, there is a
 * different nickname.
 *
 * Your function will be passed par and strokes arguments. Return the correct string
 * according to this table which lists the strokes in order of priority; top (highest)
 * to bottom (lowest):
 *
 * 
 * Strokes	Return
 * 1	"Hole-in-one!"
 * <= par - 2	"Eagle"
 * par - 1	"Birdie"
 * par	"Par"
 * par + 1	"Bogey"
 * par + 2	"Double Bogey"
 * >= par + 3	"Go Home!"
 * par and strokes will always be numeric and positive. We have added an array of all 
 * the names for your convenience.
 */

const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  // Only change code below this line

  return "Change Me";
  // Only change code above this line
}

console.log(golfScore(4, 1)); // should return the string Hole-in-one!
console.log(golfScore(4, 2)); // should return the string Eagle
console.log(golfScore(5, 2)); // should return the string Eagle
console.log(golfScore(4, 3)); // should return the string Birdie
console.log(golfScore(4, 4)); // should return the string Par
console.log(golfScore(1, 1)); // should return the string Hole-in-one!
console.log(golfScore(5, 5)); // should return the string Par
console.log(golfScore(4, 5)); // should return the string Bogey
console.log(golfScore(4, 6)); // should return the string Double Bogey
console.log(golfScore(4, 7)); // should return the string Go Home!
console.log(golfScore(5, 9)); // should return the string Go Home!