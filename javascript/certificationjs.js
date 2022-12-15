//Palindrome Checker

//Return true if the given string is a palindrome. Otherwise, return false.

//A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

//Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

//We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

//We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2. 


function palindrome(str) {
    const palindromeChecker = str
    .toLowerCase()
    .match(/[a-z0-9]/g);

    return palindromeChecker.join('') === 
    palindromeChecker.reverse()
    .join('');
}

//  palindrome("eye") will output true


//

// Roman Numeral Converter
// Convert the given number into a roman numeral.

function convertToRoman(num) {
    var roman = "";
  
    var romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  
    for (var i = 0; i < numbers.length; i++) {
      while (num >= numbers[i]) {
        roman += romanNumeral[i];
        num -= numbers[i];
      }
    }
  
    return roman;
  }

  //

  Caesars Cipher
  //One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
  
  //A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
  
  //Write a function which takes a ROT13 encoded string as input and returns a decoded string.
  
  //All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

  function rot13(str) {
    // Create a string of all the uppercase letters in the alphabet
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    // Create an empty result string
    var result = "";
  
    // Loop through the input string
    for (var i = 0; i < str.length; i++) {
      // Get the character at the current position in the string
      var char = str[i];
  
      // Check if the character is an uppercase letter
      if (upperCase.indexOf(char) !== -1) {
        // Shift the letter by 13 places
        var shiftedChar = (upperCase.indexOf(char) + 13) % 26;
        result += upperCase[shiftedChar];
      }
      // Otherwise, the character is not a letter, so add it to the result string as-is
      else {
        result += char;
      }
    }
  
    return result;
  }

  //

  Telephone Number Validator
/*Return true if the passed string looks like a valid US phone number.

//The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

//For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false
*/

function telephoneCheck(phoneNumber) {
  // Regular expression to match the phone number pattern
  const pattern = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/;

  // Check if the phone number matches the pattern
  if (pattern.test(phoneNumber)) {
    // If the country code is provided, check if it is 1
    if (phoneNumber.startsWith("1")) {
      return true;
    } else {
      // If the country code is not provided, check if the area code is present
      const areaCode = phoneNumber.match(/^\(?(\d{3})\)?/);
      return areaCode != null;
    }
  } else {
    return false;
  }
}


//

Cash Register
/*Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.*/

function checkCashRegister(price, cash, cid) {
  let change = cash*100 - price*100;
  let cidTotal = 0;
  for (let elem of cid) {
    cidTotal += elem[1]*100
    console.log(cidTotal)
  }
  if(change > cidTotal) {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  } else if (change === cidTotal) {
    return {status: "CLOSED", change: cid}
  }
  else {
    let answer = []
    cid = cid.reverse()
    let moneyUnits= {"ONE HUNDRED":10000, "TWENTY": 2000, "TEN": 1000, "FIVE": 500, "ONE":100, "QUARTER":25, "DIME":10, "NICKEL":5, "PENNY": 1}
    for(let elem of cid) {
      let holder =[elem[0], 0]
      elem[1] = elem[1]*100
      while(change >= moneyUnits[elem[0]] && elem[1] > 0) {
        change -= moneyUnits[elem[0]]
        elem[1] -= moneyUnits[elem[0]]
        holder[1] += moneyUnits[elem[0]]/100
      }
      if (holder[1]>0) {
        answer.push(holder)
      }
    }
    if (change > 0 ){
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    return {status: "OPEN", change: answer}
  }
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

// END OF JS