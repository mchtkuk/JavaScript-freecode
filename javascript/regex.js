
// REGULAR EXPRESSIONS

// Using the Test Method
// Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.

// If you want to find the word the in the string The dog chased the cat, you could use the following regular expression: /the/. Notice that quote marks are not required within the regular expression.

// JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.

let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
// The test method here returns true.

// Apply the regex myRegex on the string myString using the .test() method.

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line


console.log(myRegex)

//

//Find More Than the First Match
//So far, you have only been able to extract or search a pattern once.

let testStrr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStrr.match(ourRegex);
//Here match would return ["Repeat"].

//To search or extract a pattern more than once, you can use the global search flag: g.

let repeatRegex = /Repeat/g;
testStrr.match(repeatRegex);
//And here match returns the value ["Repeat", "Repeat", "Repeat"]

//Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.

//Note
//You can have multiple flags on your regex like /search/gi

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let resultt = twinkleStar.match(starRegex); // Change this line

//Match Anything with Wildcard Period
//Sometimes you won't (or don't need to) know the exact characters in your patterns. Thinking of all words that match, say, a misspelling would take a long time. Luckily, you can save time using the wildcard character: .

//The wildcard character . will match any one character. The wildcard is also called dot and period. You can use the wildcard character just like any other character in the regex. For example, if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words.

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);
//Both of these test calls would return true.

//Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun. Your regex should use the wildcard character.

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let resultz = unRegex.test(exampleStr);

//


//Match Single Character with Multiple Possibilities
//You learned how to match literal patterns (/literal/) and wildcard character (/./). Those are the extremes of regular expressions, where one finds exact matches and the other matches everything. There are options that are a balance between the two extremes.

//You can search for a literal pattern with some flexibility with character classes. Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.

//For example, you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters a, i, or u.

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);
//In order, the four match calls would return the values ["big"], ["bag"], ["bug"], and null.

//Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.

//Note: Be sure to match both upper- and lowercase vowels.

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let resultr = quoteSample.match(vowelRegex); // Change this line

console.log(resultr.length);


//Match Letters of the Alphabet
//You saw how you can use character sets to specify a group of characters to match, but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet). Fortunately, there is a built-in feature that makes this short and simple.

//Inside a character set, you can define a range of characters to match using a hyphen character: -.

//For example, to match lowercase letters a through e you would use [a-e].

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegexx = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);
//In order, the three match calls would return the values ["cat"], ["bat"], and null.

//Match all the letters in the string quoteSample.

//Note: Be sure to match both uppercase and lowercase letters.

let quoteSamplee = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // Change this line
let resulttt = quoteSamplee.match(alphabetRegex); // Change this line

//Match Numbers and Letters of the Alphabet
//Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers.

//For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.

//Also, it is possible to combine a range of letters and numbers in a single character set.

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);
//Create a single regex that matches a range of letters between h and s, and a range of numbers between 2 and 6. Remember to include the appropriate flags in the regex.


let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line

console.log(myRegex)



//Match Single Characters Not Specified
//So far, you have created a set of characters that you want to match, but you could also create a set of characters that you do not want to match. These types of character sets are called negated character sets.

//To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match.

//For example, /[^aeiou]/gi matches all characters that are not a vowel. Note that characters like ., !, [, @, / and white space are matched - the negated vowel character set only excludes the vowel characters.

//Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.

let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

console.log(result)
// running tests
// tests completed
// console output
[ ' ', 'b', 'l', 'n', 'd', ' ', 'm', 'c', '.' ]


//Match Characters that Occur One or More Times
//Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. This means it occurs at least once, and may be repeated.

//You can use the + character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.

//For example, /a+/g would find one match in abc and return ["a"]. Because of the +, it would also find a single match in aabc and return ["aa"].

//If it were instead checking the string abab, it would find two matches and return ["a", "a"] because the a characters are not in a row - there is a b between them. Finally, since there is no a in the string bcd, it wouldn't find a match.

//You want to find matches when the letter s occurs one or more times in Mississippi. Write a regex that uses the + sign.

let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // Change this line
let result = difficultSpelling.match(myRegex);

console.log(result)
// running tests
// tests completed
// console output
[ 'ss', 'ss' ]


//


//Match Characters that Occur Zero or More Times
//The last challenge used the plus + sign to look for characters that occur one or more times. There's also an option that matches characters that occur zero or more times.

//The character to do this is the asterisk or star: *.

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);
//In order, the three match calls would return the values ["goooooooo"], ["g"], and null.

//For this challenge, chewieQuote has been initialized as the string Aaaaaaaaaaaaaaaarrrgh! behind the scenes. Create a regex chewieRegex that uses the * character to match an uppercase A character immediately followed by zero or more lowercase a characters in chewieQuote. Your regex does not need flags or character classes, and it should not match any of the other quotes.


// Only change code below this line
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);

//Find Characters with Lazy Matching
//In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.

//You can apply the regex /t[a-z]*i/ to the string "titanic". This regex is basically a pattern that starts with t, ends with i, and has some letters in between.

//Regular expressions are by default greedy, so the match would return ["titani"]. It finds the largest sub-string possible to fit the pattern.

//However, you can use the ? character to change it to lazy matching. "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].

//Note: Parsing HTML with regular expressions should be avoided, but pattern matching an HTML string with regular expressions is completely fine.

//Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". Remember the wildcard . in a regular expression matches any character.


// 
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);

console.log(myRegex);


//Find One or More Criminals in a Hunt
//Time to pause and test your new regex writing skills. A group of criminals escaped from jail and ran away, but you don't know how many. However, you do know that they stay close together when they are around other people. You are responsible for finding all of the criminals at once.

//Here's an example to review how to do this:

//The regex /z+/ matches the letter z when it appears one or more times in a row. It would find matches in all of the following strings:

"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"
//But it does not find matches in the following strings since there are no letter z characters:

""
"ABC"
"abcabc"
//Write a greedy regex that finds one or more criminals within a group of other people. A criminal is represented by the capital letter C.


let reCriminals = /C+/; // Change this line

console.log(reCriminals)


// Match All Letters and Numbers
//Using character classes, you were able to search for all letters of the alphabet with [a-z]. This kind of character class is common enough that there is a shortcut for it, although it includes a few extra characters as well.

//The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (_).

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);
//All four of these test calls would return true.

//These shortcut character classes are also known as shorthand character classes.

//Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.

// 
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w+?/gi; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

console.log(alphabetRegexV2)


// Restrict Possible Usernames

//Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

//You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

//Usernames can only use alpha-numeric characters.

//The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

//Username letters can be lowercase and uppercase.

//Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

//Change the regex userCheck to fit the constraints listed above.


let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]+\d\d+$/i; // Change this line
let result = userCheck.test(username);