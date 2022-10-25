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


Return Largest Numbers in Arrays
//Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

//Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].




function largestOfFour(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++ ) {
    result.push(math.max(...arr[i]))
  }
  return result;
}




Confirm the Ending
//Check if a string (first argument, str) ends with the given target string (second argument, target).

//This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

[Simple Version with ES5]

function confirmEnding(str, target) {
  if (str.endsWith(target)) {
    return true;
  }
  return false;
}

function confirmEnding(str, target) {
  return str.substr(-target.length) === target
 }
 
 confirmEnding("Bastian", "n");
//



Repeat a String Repeat a String
//Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num) {
  if (num <= 0) return "";
  return str.repeat(num);
}

console.log(repeatStringNumTimes("abc", 4));

-- 2

function repeatStringNumTimes(str, num) {
  var final = ""
  if (num <= 0) return "";
  for (var i = 0; i<num; i++) {
    final += str;
  }
  return final;
  
}

console.log(repeatStringNumTimes("abc", 4));


//
Truncate a String
//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + '...'
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);



//

Finders Keepers
//Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i += 1 )
    if (func(arr[i])) {
      return arr[i];
    }
    return undefined;
}
 

findElement([1, 2, 3, 4], num => num % 2 === 0);

Boo who
//Check if a value is classified as a boolean primitive. Return true or false.

//Boolean primitives are true and false.

function booWho(bool) {
  if (typeof bool == "boolean") {
    return true;
  }
  return false;
}

booWho(null);


//

Title Case a Sentence
//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

//For the purpose of this exercise, you should also capitalize connecting words like the and of.

//titleCase("I'm a little tea pot") should return the string I'm A Little Tea Pot.

function titleCase(str) {
  var words = str.toLowerCase().split(" ");
  for (var i=0; i < words.length; i++ ) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

titleCase("I'm a little tea pot");

Slice and Splice
//You are given two arrays and an index.

//Copy each element of the first array into the second array, in order.

//Begin inserting elements at index n of the second array.

//Return the resulting array. The input arrays should remain the same after the function runs.

//frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].


function frankenSplice(arr1, arr2, n) {
  let newArr = [];
  newArr.push(...arr2.slice(0,n), ...arr1, ...arr2.slice(n));
  return newArr
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);




Falsy Bouncer
//Remove all falsy values from an array. Return a new array; do not mutate the original array.

//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

//Hint: Try converting each value to a Boolean.

// bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].

function bouncer(arr) {
  return arr.filter(element => Boolean(element));
}

bouncer([7, "ate", "", false, 9]);



Where do I Belong
//Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

//For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

//Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.



function getIndexToIns(arr, num) {
  return arr.filter(val => num > val).length;
}

getIndexToIns([40, 60], 50);



Mutations
//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

//For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

//The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

//Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.


function mutation(arr) {
  var firstWord = arr[0].toLowerCase();
  var secondWord = arr[1].toLowerCase();

  for (var i = 0; i< secondWord.length; i++) {
    if (firstWord.indexOf(secondWord[i])=== -1) return false
  }
  return true;
}

mutation(["hello", "hey"]);

// it will return false


Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.


function chunkArrayInGroups(arr, size) { 
  let result = [];

  for (let i = 0; i< arr.length; i += size){
    result.push(arr.slice(i,i + size));
  }
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);









