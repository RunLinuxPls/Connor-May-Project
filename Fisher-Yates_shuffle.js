export function shuffleArray(ary) {
  if (ary === []) return [] // If the array is empty return a copy of the empty array
  let arrayCopy = ary;  // Copy the input to produce a new array
  let curId = arrayCopy.length - 1;  // Start at the end
  while (0 != curId) {  // There remain elements to shuffle
    let randId = Math.floor(Math.random() * curId);   // Pick a remaining element
    let tmp = arrayCopy[curId];  // Copy the current index
    arrayCopy[curId] = arrayCopy[randId]; // Replace the current index value with the random index value
    arrayCopy[randId] = tmp;  // Replace the random index value with the copy of the current index value
    curId --;  // Move to the next index
  }
  return arrayCopy;
}