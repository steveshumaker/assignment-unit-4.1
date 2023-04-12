console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log(`Test - helloName should say "Hello, Steve!": ${helloName('Steve')}`);


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
}

console.log(`Test - should output 5: ${addNumbers(2, 3)}`);
console.log(addNumbers(5, 5));
console.log(addNumbers(7, 10));
console.log(addNumbers(1, 0));


// 4. Function to multiply three numbers & return the result
function multiplyThree(x, y, z){
  return x*y*z;
}

console.log(`Test - multiplyThree should return 18: ${multiplyThree(2, 3, 3)}`);
console.log(`Test - multiplyThree should return 125: ${multiplyThree(5, 5, 5)}`);
console.log(`Test - multiplyThree should return 48: ${multiplyThree(4, 3, 4)}`);


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } 
    return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  if (array.length > 0) {
    return array[array.length - 1];
  }
  return 'undefined';
}

console.log(`This is a test of an empty array, getLast should return "undefined": ${getLast([])}`);
console.log(`This is a test of [2, 3, 4], getLast should return 4: ${getLast([2, 3, 4])}`);
console.log(`This is a test of [5, 6, 7, 8, 9], getLast should return 9: ${getLast([5, 6, 7, 8, 9])}`);


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find --> bummer
function find( value, array ){
  for (x of array) {
    if (x === value) {
      return true;
    }
  }
  return false;
}

console.log(`This is a test of 3, [2, 3, 4] and should return true: ${find(3, [2, 3, 4])}`);
console.log(`This is a test of 7, [4, 5, 6] and should return false: ${find(7, [4, 5, 6])}`);



// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  startLetter = string[0];
  if (letter === startLetter) {
    return true;
  }
    return false;

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );
console.log( 'isFirstLetter - should say true', isFirstLetter('t', 'the brown dog') );


// 9. Function to return the sum of all numbers in an array
function sumAll(numArray) {
  let sum = 0;
  // TODO: loop to add items
  for (x of numArray) {
    sum += x;
  }
  return sum;
}

console.log(`Test - sumAll should return 15: ${sumAll([3, 9, 3])}`);
console.log(`Test - sumAll should return 18.5: ${sumAll([14, 2.5, 2])}`);


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function posOnly (array) {

  let posArray = [];

  for (x of array) {
    if (x > 0) {
      posArray.push(x);
    }
  }

  return posArray;

}

console.log(`posOnly with array [2, 3, 4] should return [2, 3, 4]: ${posOnly([2, 3, 4])}`);
console.log(`posOnly with array [2, 3, -4] should return [2, 3]: ${posOnly([2, 3, -4])}`);
console.log(`posOnly with array [-2, -3, -4] should return []: ${posOnly([-2, -3, -4])}`);
console.log(`posOnly with array [0, -1, 4] should return [4]: ${posOnly([0, -1, 4])}`);


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

/* Codewars - Disemvowel Trolls
** The purpose of this function is to combat trolls by
** removing each vowel from their comment. This function
** will accept a string as an input, and return a string 
** with the vowels removed. For the purposes of this
** problem, y is not a vowel.
*/

/* I originally did this using a for in loop to iterate over the string,
** then a for of loop to iterate over each vowel. If the value of str at
** index x was equal to any value in vowels, I
** then used str.replace. This worked, but at a certain string
** length it would remove an index != the vowel/string index I wanted to remove.
** I had trouble figuring this out, so looked up ways to see if a value is in an array,
** and found the array.includes method...and that was a lot easier.
*/

function disemvowel(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (x of str) {
    if (vowels.includes(x.toLowerCase())) {
      str = str.replace(x, '');
    }
  }
  return str;
}

console.log(`testing noVowels with 'tEst', expect 'tst': ${noVowels('tEst')}`);
console.log(`testing noVowels with 'No offense but,\nYour writing is among the worst I've ever read', expect 'tst': ${disemvowel("No offense but,\nYour writing is among the worst I've ever read")}`);



