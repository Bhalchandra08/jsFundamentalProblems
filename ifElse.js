// Check If a number is positive, negative or zero
console.log("Q.1 a number is positive, negative or zero");
const number = 54;
if(number > 0){
    console.log("The Number is Positive");
}else if(number < 0){
    console.log("The Number is Negative");
}else{
    console.log("The Number is Zero or Not a Number");
}
console.log("")
console.log("**********************************************");
console.log("**********************************************");

//Check if a number is even or odd
console.log("Q.2 a number is even or odd");
const num = 7;
if(num % 2 == 0){
    console.log("The Number is Even");
}else{
    console.log("The Number is Odd");
}
console.log("")
console.log("**********************************************");
console.log("**********************************************");

//check if a year is a leap year
console.log("Q.3 if a year is a leap year");
const year = 1998;
if(year % 4 == 0 ){
    console.log(`${year} is Leap Year`);
}else{
    console.log(`${year} is not a leap year.`)
}
console.log("")
console.log("**********************************************");
console.log("**********************************************");

//Determine the largest of three numbers
const num1 = 10;
const num2 = 11;
const num3 = 7;
if(num1 > num2){
    console.log(`${num1} is Greatest of three Numbers`);
}else if(num2 > num3){
    console.log(`${num2} is Greatest of three Numbers`);
}else if(num3 > num1){
    console.log(`${num3} is Greatest of three Numbers`);
}else{
    console.log("All are equal");
}