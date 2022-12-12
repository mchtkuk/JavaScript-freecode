Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

//For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let sumBetween = 0;
     for (let i = min; i <= max; i++ ) {
       sumBetween += i;
     }
     return sumBetween;
  }
  
  sumAll([1, 4]);

  // output = 10

//

Diff Two Arrays
//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

//Note: You can return the array with its elements in any order.

function diffArrays(arr1, arr2) {
  return arr1
  .concat(arr2)
  .filter(item => !arr1.includes(item) || !arr2.includes(item));
};


Seek And Destroyer

//You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

//Note: You have to use the arguments object.

function destroyer(arr, ...valsToRemove) {
  return arr.filter(elem => !valsToRemove.includes(elem));
}

Türkcell Questions;
Lucky Number

// input = 75 output should be = 'fail' // 7v1 + 5v2 = 7+25 = 32
// input = 135 output should be = 'pass' // 1v1 + 3v2 + 5v3 = 1+9+125 = 135

function isLuckyHuaweiNumber (number) {
  const res = String(number)
  .split("")
  .reduce((acc, val, ind) => {
    acc += Math.pow(+val, ind+1)
    return acc;

  }, 0);
  return res=== number ? 'pass' : 'fail';
}

Substract Product and Sum 

// input = 234 output = 15
// product of digits = 2*3*4 = 24
// sum of digits = 2+3+4 = 9
// result = 24-9 = 15

function productAndSum (input) {
  let sum = 0;
  let product = 1;
   while (input > 0) {
    let digit = input % 10
    sum += digit;
    product *= digit;
    input = Math.pow(input / 10) 
   }
   return product - sum; 
}

//

Wherefore art thou
//Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

//For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  const souceKeys = Object.keys(source);

  // filter the collection
  return collection.filter(obj => {
    for (let i = 0; i < souceKeys.length; i++) {
      if (!obj.hasOwnProperty(souceKeys[i]) ||
          obj[souceKeys[i]] !== source[souceKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}

// test here
whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);


//

Spinal Tap Case
//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  return str
  .split(/\s|_|(?=[A-Z])/)
  .join()
  .toLowerCase();
}

// spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap.


Pig Latin
//Pig Latin is a way of altering English Words. The rules are as follows:

//- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

//- If a word begins with a vowel, just add way at the end.

//Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.


function translatePigLatin(str) {
  return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

translatePigLatin("consonant");


//

Search and Replace
//Perform a search and replace on the sentence using the arguments provided and return the new sentence.

//First argument is the sentence to perform the search and replace on.

//Second argument is the word that you will be replacing (before).

//Third argument is what you will be replacing the second argument with (after).

//Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

function myReplace(str, before, after) {
  const strArr = str.split(" ");
  const [wordToReplace] = strArr.filter(item => item === before);
  const replacement = wordToReplace[0] === wordToReplace[0].toUpperCase()
    ? after[0].toUpperCase() + after.slice(1)
    : after[0].toLowerCase() + after.slice(1);
  return strArr.map(item => (item === before ? replacement : item)).join(" ");
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


// 

DNA Pairing
// Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

// The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
  var pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  var arr = str.split("");
  return arr.map(x => [x, pairs[x]]);
}

pairElement("GCG");

//

Missing letters
//Find the missing letter in the passed letter range and return it.

//If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (charCode !== str.charCodeAt(0) + i) {
      return String.fromCharCode(charCode - 1);
    }
  }
  return undefined;
}
fearNotLetter("abce");


//

Sorted Union
//Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

//In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

//The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

//Check the assertion tests for examples.

function uniteUnique(...arr) {
  return [...new Set(arr.flat())];
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//

Convert HTML Entities

//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  // Using a regex, replace characters with it's corresponding html entity
  return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}

convertHTML("Dolce & Gabbana");

//

Sum All Odd Fibonacci Numbers
//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

//The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

//For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.


function sumFibs(num) {
  // Every third Fibbonaci number is even
  //   and the rest are odd
  let f0 = 0;
  let f1 = 1;
  let f2 = 1;

  // Generate triples until num is reached
  let sum = 0;
  while (f1 <= num) {
    // Update sum
    sum += f1;
    if (f2 <= num) sum += f2;

    // Compute next three Fibonacci numbers
    [f0, f1] = [f1 + f2, f2 + (f1 + f2)];
    f2 = f0 + f1;
  }

  return sum;
}

//

Sum All Primes
//A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

//Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.


function sumPrimes(num) {
  let primes = [];
  for (let i = 2; i <= num; i++) {
    if (primes.every((prime) => i % prime !== 0))
      primes.push(i);
  }
  return primes.reduce((sum, prime) => sum + prime, 0);
}


//



Smallest Common Multiple
//Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

//The range will be an array of two numbers that will not necessarily be in numerical order.

//For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.


function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const numberDivisors = max - min + 1;
  // Largest possible value for SCM
  let upperBound = 1;
  for (let i = min; i <= max; i++) {
    upperBound *= i;
  }
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    let divisorCount = 0;
    for (let i = min; i <= max; i++) {
      // Count divisors
      if (multiple % i === 0) {
        divisorCount += 1;
      }
    }
    if (divisorCount === numberDivisors) {
      return multiple;
    }
  }
}

smallestCommons([1, 5]);

//

Drop it
//Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

//Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.


function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

// test here
dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});


//

Steamroller
//Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  const flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

steamrollArray([1, [2], [3, [[4]]]]);

//

Binary Agents
//Return an English translated sentence of the passed binary string.

//The binary string will be space separated.

function binaryAgent(str) {
  return String.fromCharCode(
    ...str.split(" ").map(function(char) {
      return parseInt(char, 2);
    })
  );
}

// test here
binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);


//

Everything Be True
//Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

//In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

//In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

//Remember, you can access object properties through either dot notation or [] notation.

function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.every(obj => obj[pre]);
}
truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");

//

Arguments Optional
//Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

//For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

//Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

//If either argument isn't a valid number, return undefined.

function addTogether() {
  const [first, second] = arguments;
  if (typeof(first) !== "number")
    return undefined;
  if (arguments.length === 1)
    return (second) => addTogether(first, second);
  if (typeof(second) !== "number")
    return undefined;
  return first + second;
}

//

Make a Person
//Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
//Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

const Person = function(firstAndLast) {
  // Only change code below this line
  let fullName = firstAndLast;
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return fullName.split(" ")[0];
  };

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };


  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};

const bob = new Person('Bob Ross');
bob.getFullName();

//

Map the Debris
//According to Kepler's Third Law, the orbital period of two point masses orbiting each other in a circular or elliptic orbit is:

//Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

//The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

//The values should be rounded to the nearest whole number. The body being orbited is Earth.

//The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const a = 2 * Math.PI;
  const newArr = [];

  const getOrbPeriod = function(obj) {
    const c = Math.pow(earthRadius + obj.avgAlt, 3);
    const b = Math.sqrt(c / GM);
    const orbPeriod = Math.round(a * b);
    // create new object
    return {name: obj.name, orbitalPeriod: orbPeriod};
  };

  for (let elem in arr) {
    newArr.push(getOrbPeriod(arr[elem]));
  }

  return newArr;
}

// test here
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);

//


