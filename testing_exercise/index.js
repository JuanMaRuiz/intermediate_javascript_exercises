/**
 * Exercise 1
 * Write a function called replaceWith that takes in a string, a character to replace and a character to replace it with
 * and returns the string with the replacements. Write tests to make sure this is case sensitive
 */

const replaceWith = (str, charA, charB) => {
  return (str.indexOf(charA) !== -1) ? replaceWith(str.replace(charA, charB), charA, charB) : str;
};

/**
 * Exercise 2:
 * Write a function called `expand` which takes an array and a number and returns a copy of the array with as many
 * numbers as specified
 */
const expand = (arr, repeater) => {
  let output = [];
  while(repeater >= 1) {
    output = output.concat(arr);
    repeater--;
  }
  return output;
};

/**
 * Exercise 3:
 * Write a function called `acceptNumbersOnly` which takes in any number of arguments and returns `true` if all of them are numbers.
 * Watch out for `NaN` - it is a `typeof "number"`!
 * Examples:
 *  - acceptNumbersOnly(1,"foo") // false
 *  - acceptNumbersOnly(1,2,3,4,5,6,7) // true
 *  - acceptNumbersOnly(1,2,3,4,5,6,NaN) // false
 */

const acceptNumbersOnly = (...args) => {
  return args.filter( arg => {
    return typeof arg !== 'number' || Number.isNaN(arg);
  }).length > 0 ? false : true;
};

/**
 * Exercise 4:
 * Write a function called `mergeArrays` which takes in two arrays and returns one array with the values sorted
 */

const mergeArrays = (arr1, arr2) => {
  return arr1.concat(arr2).sort((prev, next) => prev > next);
};

module.exports = {
  replaceWith,
  expand,
  acceptNumbersOnly,
  mergeArrays,
}