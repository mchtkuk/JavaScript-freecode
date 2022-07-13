let myStr = "This is the first sentence.";
myStr += "This is the second sentence.";
console.log(myStr);


const myList = [["cips", 14],["kola", 5],["patlican", 7],["salam", 5],["salatalık", 5]];

console.log(myList);


function functionWithArgs(x, y) {
    console.log(x + y);
  }
  
  functionWithArgs(1,2);
  functionWithArgs(7,9);


  function timesFive(x){
    return x * 5;
  }
  const answer = timesFive();


  // Global Scope and Functions
 // In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.
  
 // Variables which are declared without the let or const keywords are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with let or const.
  
  

  // Declare the myGlobal variable below this line
const myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line

function  fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}



//Local Scope and Functions
//Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.
//Here is a function myTest with a local variable called loc.

function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
console.log(loc);

//The myTest() function call will display the string foo in the console. The console.log(loc) line (outside of the myTest function) will throw an error, as loc is not defined outside of the function.

//The editor has two console.logs to help you see what is happening. Check the console as you code to see how it changes. Declare a local variable myVar inside myLocalScope and run the tests.

//Note: The console will still display ReferenceError: myVar is not defined, but this will not cause the tests to fail.


//Understanding Undefined Value returned from a Function
//A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.

Example

let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);

//addSum is a function without a return statement. The function will change the global sum variable but the returned value of the function is undefined.

//Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.


//Assignment with a Returned Value
//If you'll recall from our discussion about Storing Values with the Assignment Operator, everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable.

//Assume we have pre-defined a function sum which adds two numbers together, then:
ourSum = sum(5, 12);
//will call the sum function, which returns a value of 17 and assigns it to the ourSum variable.

//Call the processArg function with an argument of 7 and assign its return value to the variable processed.

// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

processed = processArg(7);

// output will be 2

//if statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as Boolean conditions and they may only be true or false.

//When the condition evaluates to true, the program executes the statement inside the curly braces. When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.

//Pseudocode

// if (x true) {statement is executed}
Example

function test (myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);
test(true) //returns the string It was true, and test(false) returns the string It was false.

//When test is called with a value of true, the if statement evaluates myCondition to see if it is true or not. Since it is true, the function returns It was true. When we call test with a value of false, myCondition is not true and the statement in the curly braces is not executed and the function returns It was false.


//Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.

//The same effect could be achieved by nesting an if statement inside another if:

if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
//will only return Yes if num is greater than 5 and less than 10. The same logic can be written as:
if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
//Replace the two if statements with one statement, using the && operator, which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return the string No.


//The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

//The logical or operator is composed of two pipe symbols: (||). This can typically be found between your Backspace and Enter keys.

//The pattern below should look familiar from prior waypoints:

if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
//will return Yes only if num is between 5 and 10 (5 and 10 included). The same logic can be written as:

if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
//Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside.

function testLogicalOr(val) {
  // Only change code below this line

  if (val > 20 || val < 10) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);


//When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. With an else statement, an alternate block of code can be executed.

if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}

//Combine the if statements into a single if/else statement.


function testElse(val) {
  let result = "";
if (val > 5) {
  result = "Bigger than 5";
}
  else {
    result = "5 or Smaller"
  }

  return result;
}

testElse(4);

//If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.

if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}


//Order is important in if, else if statements.
//The function is executed from top to bottom so you will want to be careful of what statement comes first.
//Take these two functions as an example.

//Here's the first:

function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
//And the second just switches the order of the statements:


function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}

//While these two functions look nearly identical if we pass a number to both we get different outputs.


bar(0)
foo(0) // will return the string Less than one, and bar(0) will return the string Less than two.


//if/else statements can be chained together for complex logic. Here is pseudocode of multiple chained if / else if statements:

if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
} else {
  statementN
}

//Golf Code

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return names[0];
  }
  else if (strokes <= par - 2) {
    return names[1];
  }
  else if (strokes == par - 1) {
    return names[2];
  }
  else if (strokes == par) {
    return names[3];
  }
  else if (strokes == par + 1) {
    return names[4];
  }
  else if (strokes == par + 2) {
    return names[5];
  }
  else if (strokes >= par + 3) {
    return names[6];
  }

  // Only change code above this line
}

golfScore(5, 4);

console.log(golfScore(5,4))

//

//In a switch statement you may not be able to specify all possible values as case statements. Instead, you can add the default statement which will be executed if no matching case statements are found. Think of it like the final else statement in an if/else chain.

//A default statement should be the last case.

switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
  default:
    defaultStatement;
    break;
}
//Write a switch statement to set answer for the following conditions:
a - apple
b - bird
c - cat
//default - stuff

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
  case "a":
    answer = "apple";
    break;
  case "b":
    answer = "bird";
    break;
  case "c":
    answer = "cat";
    break;
  default:
    answer = "stuff";
    break;

  }
  


  // Only change code above this line
  return answer;
}

switchOfStuff(1);

console.log(switchOfStuff(""));


//

//If you have many options to choose from, a switch statement can be easier to write than many chained if/else if statements. The following:

if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
//can be replaced with:

switch (val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}
//Change the chained if/else if statements into a switch statement.

function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

  switch (val) {
    case "bob":
    answer = "Marley";
    break;
    case 42: 
    answer = "The Answer";
    break;
    case 1:
    answer = "There is no #1";
    break;
    case 99: 
    answer = "Missed me by this much!";
    break;
    case 7:
    answer = "Ate Nine";
    break;
    case "John":
    answer = "";
    break;
    case 156:
    answer = "";
    break;
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);

console.log(chainToSwitch());

//When a return statement is reached, the execution of the current function stops and control returns to the calling location.

Example

function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();

//The above will display the string Hello in the console, and return the string World. The string byebye will never display in the console, because the function exits at the return statement.

//Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.

//Hint
//Remember that undefined is a keyword, not a string.

  // Setup
function abTest(a, b) {
  // Only change code below this line
if (a < 0 || b < 0) {
  return undefined;
}


  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);
console.log(abTest(2,2))

//In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

//Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

//Count Change	Cards
//+1	2, 3, 4, 5, 6
//0	7, 8, 9
//-1	10, 'J', 'Q', 'K', 'A'
//You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

//Example Outputs: -3 Hold or 5 Bet

//Hint
//Do NOT reset count to 0 when value is 7, 8, or 9.
//Do NOT return an array.
//Do NOT include quotes (single or double) in the output.

let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;
    case 7:
    case 8:
    case 9:
      count += 0;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count -= 1;
      break;
  }

  return count + (count > 0 ? " Bet" : " Hold")
  
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

console.log(cc(''))

//

//You may have heard the term object before.

//Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.

//Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.

//Here's a sample cat object:

const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
//In this example, all the properties are stored as strings, such as name, legs, and tails. However, you can also use numbers as properties. You can even omit the quotes for single-word string properties, as follows:

const anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
//owever, if your object has any non-string properties, JavaScript will automatically typecast them as strings.


//Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table.

//Here is an example of using a variable to access a property:

const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);

//The string Doberman would be displayed in the console.


// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line

console.log(player);

// the string Montana would be displayed in the console.


//Updating Object Properties
//After you've created a JavaScript object, you can update its properties at any time just like you would update any other variable. You can use either dot or bracket notation to update.

//For example, let's look at ourDog:

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
//Since he's a particularly happy dog, let's change his name to the string Happy Camper. 

//Here's how we update his object's name property: ourDog.name = "Happy Camper"; or ourDog["name"] = "Happy Camper"; Now when we evaluate ourDog.name, instead of getting Camper, we'll get his new name, Happy Camper.


// Setup
const myDogg = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line

myDogg.name = "Happy Coder";


//


//Add New Properties to a JavaScript Object
//You can add new properties to existing JavaScript objects the same way you would modify them.

//Here's how we would add a bark property to ourDog:

ourDog.bark = "bow-wow";
or

ourDog["bark"] = "bow-wow";

//

const myDoggg = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDoggg.bark = "woof";

//Delete Properties from a JavaScript Object
//We can also delete properties from objects like this:

delete ourDogggg.bark;


// Setup
const myDoggggg = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line

delete myDoggggg.tails;

//


//sing Objects for Lookups
//Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to lookup values rather than a switch statement or an if/else chain. This is most useful when you know that your input data is limited to a certain range.

//Here is an example of a simple reverse alphabet lookup:

const alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  24:"C",
  25:"B",
  26:"A"
};

alpha[2];
alpha[24];

const value = 2;
alpha[value];

//alpha[2] is the string Y, alpha[24] is the string C, and alpha[value] is the string Y.


//Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.

// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
   var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",
  };

  result = lookup[val];
  // Only change code above this line
  return result;
}

console.log(phoneticLookup("charlie"));


//

//Testing Objects for Properties
//Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.

//Example

const myObj = {
  top: "hat",
  bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");

//The first hasOwnProperty returns true, while the second returns false.

//Accessing Nested Objects
//The sub-properties of objects can be accessed by chaining together the dot or bracket notation.

//Here is a nested object:

const ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};

ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;
ourStorage.cabinet["top drawer"].folder2 
//would be the string secrets, and ourStorage.desk.drawer would be the string stapler.

//Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use bracket notation.

const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];

// will display the "maps" value


// Accessing Nested Arrays
// As we have seen in earlier examples, objects can contain both nested objects and nested arrays. Similar to accessing nested objects, array bracket notation can be chained to access nested arrays.

// Here is an example of how to access a nested array:

const ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];

ourPets[0].names[1];
ourPets[1].names[0];
ourPets[0].names[1] 
// would be the string Fluffy, and ourPets[1].names[0] would be the string Spot.

// Using dot and bracket notation, set the variable secondTree to the second item in the trees list from the myPlants object.

const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];

//


//Record Collection **
//You are given an object literal representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.

//You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

//Your function must always return the entire record collection object.
//If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
//If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
//If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
//If value is an empty string, delete the given prop property from the album.
//Note: A copy of the recordCollection object is used for the tests.

const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  }
  else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  }
  else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  }
  else if (value === "") {
    delete records[id][prop];
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));


// 

// Iterate with JavaScript While Loops
// You can run the same code multiple times by using a loop.

// The first type of loop we will learn is called a while loop because it runs while a specified condition is true and stops once that condition is no longer true.

const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}
// In the code example above, the while loop will execute 5 times and append the numbers 0 through 4 to ourArray.

// Let's try getting a while loop to work by pushing values to an array.

// Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.


// Setup
const myArray = [];

// Only change code below this line

var ii = 5;
while (ii > -1) {
    myArray.push(ii);
    ii--;
}

console.log(myArray);

// [ 5, 4, 3, 2, 1, 0 ]

//

//Iterate with JavaScript For Loops
//You can run the same code multiple times by using a loop.

//The most common type of JavaScript loop is called a for loop because it runs for a specific number of times.

//For loops are declared with three optional expressions separated by semicolons:

//for (a; b; c), where a is the initialization statement, b is the condition statement, and c is the final expression.

//The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.

//The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. When the condition is false at the start of the iteration, the loop will stop executing. This means if the condition starts as false, your loop will never execute.

//The final expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement your loop counter.

//In the following example we initialize with i = 0 and iterate while our condition i < 5 is true. We'll increment i by 1 in each loop iteration with i++ as our final expression.

const ourrArray = [];

for (let i = 0; i < 5; i++) {
  ourrArray.push(i);
}
 // ourrArray will now have the value [0, 1, 2, 3, 4].

// Use a for loop to push the values 1 through 5 onto myArray.

// Setup
const myArrayy = [];

// Only change code below this line

for (let i = 1; i < 6; i++) {
  myArrayy.push(i);
}

console.log(myArrayy)

// [ 1, 2, 3, 4, 5 ]


// Iterate Odd Numbers With a For Loop
// For loops don't have to iterate one at a time. By changing our final-expression, we can count by even numbers.

// We'll start at i = 0 and loop while i < 10. We'll increment i by 2 each loop with i += 2.

// const ourArray = [];

for (let i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
// ourArray will now contain [0, 2, 4, 6, 8]. Let's change our initialization so we can count by odd numbers.

// Push the odd numbers from 1 through 9 to myArray using a for loop.

// Setup
const myArrayyy = [];

// Only change code below this line

for (let i = 1; i < 11; i +=2) {
  myArrayyy.push(i);
}

console.log(myArrayyy);

// [ 1, 3, 5, 7, 9 ]

// Backwards =

// Setup
const myArrayyyy = [];

// Only change code below this line

for (let i = 9; i > 0; i -= 2) {
  myArrayyyy.push(i);
}

console.log(myArrayyyy)
// [ 9, 7, 5, 3, 1 ]

// Iterate Through an Array with a For Loop

//Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.

// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;

for (var ii = 0; ii < myArr.length; ii++) {
  total += myArr[ii];
}

console.log(total);

// it will output the total = 20

//Nesting For Loops
//If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. Here is an example:

const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

//This outputs each sub-element in arr one at a time. Note that for the inner loop, we are checking the .length of arr[i], since arr[i] is itself an array.

// replacing loops using Recursion

function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
}

console.log(sum([1], 0)) 
console.log(sum([2, 3, 4], 1))
console.log(sum([2, 3, 4, 5], 3))

//sum([1], 0) should equal 0.
//sum([2, 3, 4], 1) should equal 2.
//sum([2, 3, 4, 5], 3) should equal 9.


//Profile Lookup
//We have an array of objects representing different people in our contacts lists.

//A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

//The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

//If both are true, then return the "value" of that property.

//If name does not correspond to any contacts then return the string No such contact.

//If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.


// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
for (var i = 0; i < contacts.length; i++) {
    if(contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property";
    }
  }
  return "No such contact";
  // Only change code above this line
}

lookUpProfile("Akira", "likes");



//generate Random Fractions with JavaScript
//Random numbers are useful for creating random behavior.

//JavaScript has a Math.random() function that generates a random decimal number between 0 (inclusive) and 1 (exclusive). Thus Math.random() can return a 0 but never return a 1.

//Note: Like Storing Values with the Assignment Operator, all function calls will be resolved before the return executes, so we can return the value of the Math.random() function.

//Change randomFraction to return a random number instead of returning 0.

function randomFraction() {

  // Only change code below this line

  return Math.random();

  // Only change code above this line
}


console.log(randomFraction);



//Generate Random Whole Numbers with JavaScript
//It's great that we can generate random decimal numbers, but it's even more useful if we use it to generate random whole numbers.

//Use Math.random() to generate a random decimal.
//Multiply that random decimal by 20.
//Use another function, Math.floor() to round the number down to its nearest whole number.
//Remember that Math.random() can never quite return a 1 and, because we're rounding down, it's impossible to actually get 20. This technique will give us a whole number between 0 and 19.

//Putting everything together, this is what our code looks like:

Math.floor(Math.random() * 20);
//We are calling Math.random(), multiplying the result by 20, then passing the value to Math.floor() function to round the value down to the nearest whole number.

//Use this technique to generate and return a random whole number between 0 and 9.

function randomWholeNum() {

  // Only change code below this line

  return Math.floor(Math.random() * 10);;
}

//

//Generate Random Whole Numbers within a Range
//Instead of generating a random whole number between zero and a given number like we did before, we can generate a random whole number that falls within a range of two specific numbers.

//To do this, we'll define a minimum number min and a maximum number max.

//Here's the formula we'll use. Take a moment to read it and try to understand what this code is doing:

Math.floor(Math.random() * (max - min + 1)) + min

//Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.

function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  // Only change code above this line
}


console.log(randomRange(200,10));

// it will output the random numbers between 200-10.

//Use the parseInt Function
//The parseInt() function parses a string and returns an integer. Here's an example:

const a = parseInt("007");
//The above function converts the string 007 to the integer 7. If the first character in the string can't be converted into a number, then it returns NaN.

//Use parseInt() in the convertToInteger function so it converts the input string str into an integer, and returns it.

function convertToInteger(str) {
  return parseInt(str)
}

console.log(convertToInteger("56"));

//


//Use the parseInt Function with a Radix
//The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.

//The function call looks like:

parseInt(string, radix);
//And here's an example:

const aa = parseInt("11", 2);
//The radix variable says that 11 is in the binary system, or base 2. This example converts the string 11 to an integer 3.

//Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.

function convertToInteger(str) {
  return parseInt(str, 2)
}

convertToInteger("10011");


//The following function uses an if/else statement to check a condition:

function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater or equal";
  }
}
//This can be re-written using the conditional operator:

function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}
//Use the conditional operator in the checkEqual function to check if two numbers are equal or not. The function should return either the string Equal or the string Not Equal.

function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);


//Use Multiple Conditional (Ternary) Operators
//In the previous challenge, you used a single conditional operator. You can also chain them together to check for multiple conditions.

//In the checkSign function, use multiple conditional operators - following the recommended format used in findGreaterOrEqual - to check if a number is positive, negative or zero. The function should return positive, negative or zero.

function checkSign(num) {
  return ( num === 0) ? "zero"
  : ( num < 0) ? "negative"
  : "positive";
}

checkSign(10);

// Use Recursion to Create a Countdown

//In a previous challenge, you learned how to use recursion to replace a for loop. Now, let's look at a more complex function that returns an array of consecutive integers starting with 1 through the number passed to the function.

//As mentioned in the previous challenge, there will be a base case. The base case tells the recursive function when it no longer needs to call itself. It is a simple case where the return value is already known. There will also be a recursive call which executes the original function with different arguments. If the function is written correctly, eventually the base case will be reached.

//For example, say you want to write a recursive function that returns an array containing the numbers 1 through n. This function will need to accept an argument, n, representing the final number. Then it will need to call itself with progressively smaller values of n until it reaches 1. You could write the function as follows:

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));
//The value [1, 2, 3, 4, 5] will be displayed in the console.

//At first, this seems counterintuitive since the value of n decreases, but the values in the final array are increasing. This happens because the push happens last, after the recursive call has returned. At the point where n is pushed into the array, countup(n - 1) has already been evaluated and returned [1, 2, ..., n - 1].

//We have defined a function called countdown with one parameter (n). The function should use recursion to return an array containing the integers n through 1 based on the n parameter. If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself and must not use loops of any kind.

// Only change code below this line
function countdown(n){
  if (n <= 0) {
   return [];
 } else {
   const countArray = countdown(n - 1);
   countArray.unshift(n);
   return countArray;
 }
}
// Only change code above this line

console.log(countdown(5));

// it will output [ 5, 4, 3, 2, 1 ]


// Use Recursion to Create a Range of Numbers
//Continuing from the previous challenge, we provide you another opportunity to create a recursive function to solve a problem.

//We have defined a function named rangeOfNumbers with two parameters. The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.

function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
      return [];
  }
  else {
    const countArray = rangeOfNumbers(startNum, endNum - 1);
    countArray.push(endNum);
    return countArray; 
  }
};



console.log(rangeOfNumbers(1, 5)); [ 1, 2, 3, 4, 5 ]
console.log(rangeOfNumbers(6, 9)); [ 6, 7, 8, 9 ]
console.log(rangeOfNumbers(4, 4)); [ 4 ]

// END OF THE BASIC JS
