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

function fun2() {
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

if (condition is true) {
  statement is executed
}
Example

function test (myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);
test(true) returns the string It was true, and test(false) returns the string It was false.

//When test is called with a value of true, the if statement evaluates myCondition to see if it is true or not. Since it is true, the function returns It was true. When we call test with a value of false, myCondition is not true and the statement in the curly braces is not executed and the function returns It was false.