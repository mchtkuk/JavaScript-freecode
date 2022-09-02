Convert Celsius to Fahrenheit
//The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

//You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.

//

function convertCtoF(celsius) {
    let fahrenheit = (celsius) * 9/5 + 32;
    return fahrenheit;
  }
  
  convertCtoF(30);
  
  
  console.log(convertCtoF(0))


Reverse a String
//Reverse the provided string.

//You may need to turn the string into an array before you can reverse it.

//Your result must be a string.

function reverseString(str) {
    return str.split("").reverse().join("");
  }
  
  reverseString("hello");


  //

//
Factorialize a Number
//Return the factorial of the provided integer.

//If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

//Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

//Only integers greater than or equal to zero will be supplied to the function.


function factorialize(num) {
  var result = num;
  if (num === 0 || num === 1) 
  return num = 1;
  while (num > 1) {
    num--;
    result *= num;
  }
  return result;
}
 

//

Find the Longest Word in a String
//eturn the length of the longest word in the provided sentence.

//Your response should be a number.

function findLongestWordLength(str) {
  let strArr = str.split(" ");
  let longestWord = "";

  for ( let i = 0; i < strArr.length; i++) {
    if (strArr[i].length >= longestWord.length) {
      longestWord = strArr[i];
    }
  }
  return longestWord.length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

// running tests
// tests completed
// console output
6


//