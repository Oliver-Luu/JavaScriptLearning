//Ways to format strings using "", '', and ``
let myStr = "I am a \"double quoted\" string";
console.log(myStr);

myStr = 'I am a "double quoted" string';
console.log(myStr);

//Strings can be surrounded by either single quotes, double quotes, or backticks

//Backticks:

myStr = `I am a "double quoted" and 'single quoted' string`;
console.log(myStr);

/*
\' single quote
\" double quote
\\ backslash
\n new line
\r carriage return
\t tab
\b backspace
\f form feed
 */


myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);

//Adding strings together using various methods
myStr = "I come first. " + "I come second.";
console.log(myStr);

myStr += " I come third.";
console.log(myStr);

myStr2 = "I come fourth.";
myStr = myStr + " " + myStr2;
console.log(myStr);

myStr2 = " I come fifth."
myStr += myStr2;
console.log(myStr);

//Finding the length of a string
let length = 0;
length = myStr.length;
console.log(length);

//First letter of a string
let firstLetter = myStr[0];
console.log(firstLetter);

//Third letter of a string
firstLetter = myStr[2];
console.log(firstLetter);

//Editing strings (or lack thereof)
myStr = "Jello World";
console.log(myStr);
// It is not possible to say myStr[0] = "H"
// Instead, the entire string needs to be rewritten
myStr = "Hello World";
console.log(myStr);

//Last letter of last name; precursor to indexes
console.log(myStr[myStr.length - 1]);

//Second to last letter
console.log(myStr[myStr.length - 2]);