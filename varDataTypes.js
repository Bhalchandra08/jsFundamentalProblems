//Declare a variable called 'name' and assign it a string value
let name = "bhushan";
console.log(name);

//age and set
let age = 25;
console.log(age);

//isStudent and boolean value
let isStudent = true;
console.log(isStudent);

//PI and set the value
let pi = 3.14159;
console.log(pi);

//undefinedVar without assign value
let undefinedVar;
console.log(undefinedVar);

//adding a number and string in JavaScript
let x = 5;
let y = '5';
let d = x + parseInt(y);
let c = x + y;
console.log(c);
console.log("Addition of 5 + 5 =", d);

//result of dividing by zero in Javascript
let k = 5;
let b = 0;
let n = k/b;
console.log(n);

// check the datatype in javascript
let number = 34;
console.log(typeof number);

//square of a number
let num = 5;
let square = num * num;
// let square = 5*5;
console.log(square);

//isPositive  that checks if a number is greater than zero
let nmbr = 4;
let isPositive = nmbr > 0;
console.log("Is Positive ",isPositive);

//use typeOf to check variable
let xy;
let isUndefined = typeof xy;
console.log(isUndefined === "undefined");

//average of three numbers
let one = 88;
let two = 99;
let three = 1100;
let average = (one + two + three)/3;
console.log(average);

//convert a string to a number and store
let str = '42';
let numm = parseInt(str);
console.log(numm == "number");
// console.log(typeof numm);

// convert number to string in a variable
let nummm = 42;
let strr = nummm.toString();
console.log(typeof strr);
console.log(strr === 'string');

//check if the variable contains a truthy value
let valuee = 'shubhada';
let isTruthy = !!valuee;
console.log(isTruthy);

//check if the variable contains a falsy value
let valueee = '';
let isFalsy = !valueee;
console.log(isFalsy);

//check the undefined value
let o;
let variables;
let isUndefines = o === undefined;
console.log("This variable contains",variables === undefined);
// console.log(isUndefines);

//check the null value
let p = null;
console.log(p === null);

//use a ternary operator to set a variable based on condition 
let agee = 27;
let canVote = agee >= 18 ? "yes, Can Vote" : "no, Can't vote";
console.log(canVote);

//use short circuiting with && and || operators to a set a variable
let isLoggedIn = true;
let isUserAdmin = false;
let  canAccessPanel = isLoggedIn && isUserAdmin;
console.log(canAccessPanel);

//handle NaN and infinity in mathmatical operations
let  result = 5/0;
let isNaNResult = isNaN(result);
if(isNaNResult){
    console.log("This variable contains NaN value");
}else{
    console.log("This variable doesn't contain NaN value");
}
console.log(isNaNResult);

//check if a variable is NaN
let XNaN = NaN;
let isXNaN = isNaN(XNaN);
console.log(isXNaN);

//check if a variable is Infinity
let yInfinite = 10/2;
let isYInfinite = isFinite(yInfinite);
console.log(isYInfinite);

//assign null to a variable and check its datatype
let varNull;
let isVarNull = varNull === '';
console.log(typeof isVarNull);
console.log(typeof varNull);

//assign undefined to a variable and check its datatype
let anotherVar = undefined;
let issUndefined = typeof anotherVar === "undefined";
console.log(issUndefined);

//use option chaining to access properties of potentially null or undefined objects
let user = {
    name:"John",
    address:"null"
};

let street = user?.address?.street;
console.log(user.street);

//create a variable isAdult and assign it a boolean value based on whether a persons age is greater than or equal to 18
let person = 20;
let isAdult = (person >= 18);
console.log(isAdult);

//create a constant hoursInDay and set it to the number of hours in a day(24);
const hoursInDay = 24;
console.log(hoursInDay);

//declare a variable distance and assign it a floting value
let distance = 134.4;
console.log("This location is at "+distance+"km away");

//calculate the area of rectangle
let width = 10;
let height = 15;
let area = width * height;
console.log(area);

//create a variable userName and assign it a string value
let userNamee = "Bhushan";
console.log(userNamee);

//create a variabel userEmail and assign it a string value
let userEmail = "bhushandhuri86@gmail.com";
console.log(userEmail);

//check the truthy value
let isregistered = true;
let isTruthyy = !!isregistered;
console.log(isTruthyy);

//check hasPermission is falsy
let hasPermission = false;
let isFalsyy = !hasPermission;
console.log(isFalsyy);

//create isPositiveInteger and check both positive and integer
let numberr = -3;
let isPositiveInteger = Number.isInteger(numberr) && numberr > 0;
console.log(isPositiveInteger);

//use the isNaN function to check if a variable contains a value that is not a number
let val = 52;
let isValNaN = isNaN(val);
console.log(isValNaN);

//use parseInt to convert string number in to a actual number
let strNum = "99";
console.log(strNum+ " And the datatype is "+ typeof strNum);
let actNum = parseInt(strNum);
console.log(actNum + " And the datatype is "+ typeof actNum);

//use parseFloat to convert string float value in to a actual number
let stringNum = "6.9 ";
console.log(stringNum + typeof stringNum);
let actFloat = parseFloat(stringNum);
console.log(actFloat + typeof actFloat);

//Check isEven is true if a number is even
let numbra = 3;
let isEven = numbra % 2 === 0;
console.log(isEven);

//check isVowel is true if a character is a vowel[a,e,i,o,u], else false.
let character = 'A';
let isVowel = ['a','e','i','o','u'].includes(character.toLowerCase());
console.log(isVowel);

//create a variable isPalindrome that checks if a string is a palindrome
let sstrr = "racecat";
let reverseStr = sstrr.split('').reverse().join('');
let isPalindrome = sstrr === reverseStr;
console.log(isPalindrome);

//Calculate the sum of the digits of a given positive integer and store it in a variable
let nnumberr = 12345;
let sum = 0;
while(nnumberr > 0){
    sum += nnumberr % 10;
    nnumberr = parseInt(nnumberr/10);
}
console.log(sum);

//check if a variable isLeapYear is true if a given year is a leap year
let year = 2100;
let isLeapYear = (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0);
console.log(isLeapYear);

//create a varible and assign it a string containing a friendly greeting.
let greeting = "Hello sir How are you?";
console.log(greeting);

//Use concat method to concatenate two string variables
let str1 = "Hello ";
let str2 = "Shubhada";
let concatStr = str1.concat(str2);
console.log(concatStr);

//Use concat method to concanate two string variables
let s1 = "Bhushan Loves ";
let s2 = "Shubhada";
let conStr = s1.concat(s2);
console.log(conStr);

// Use template literals to create a string that includes variables and placeholders for value
let useNamee = "Bhushan";
let ageee = "25";
console.log(`Hello! My name is ${useNamee} and I am ${ageee} years old`);

//Use template literals
let fiance = "Shubhada";
let herAge = 23;
console.log(`${fiance} is my fiance and her age is ${herAge}`);