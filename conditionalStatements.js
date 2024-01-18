//WRite an if statement to check if a number is positive and log a message accordingly.
let number = -5;
if(number > 0){
    console.log("Yes The number is positive.");
}else{
    console.log("The number is negative.");
}

//Write an if statement to check if a user is over 18 years old and can vote
let userAge = 15;
if(userAge >= 18){
    console.log("Yes you are eligible to Vote");
}else{
    console.log("No you are not eligible to vote");
}

//Write an if statement to check if a variable is defined and not null
let newVariable = null;
if(typeof newVariable !== undefined && newVariable !== null){
    console.log("This variable doesn't hold an undefined or null value");
}else{
    console.log("This variable holds either undefined or null value");
}

//Write an if statement to check if a string is empty
let exStr = "Star";
if(exStr === ""){
    console.log("This variable holds an empty value.")
}else{
    console.log("No This variable has a string value.");
}

//Write an if statement to check if a number is even
let checkEven = 68;
if(checkEven % 2 == 0){
    console.log("This number is even number");
}else{
    console.log("This is a odd number");
}

// Use if else to check a number is positive or negative and log message
    let num = -2;
    if(num > 0){
        console.log("The Given number is positive");
    }else{
        console.log("The Given number is negative");
    }

//if a user is eligible for senior discount(over 65 years) and apply the discount if eligible
let user = 78;
if(user > 65){
    console.log("The user is eligible for senior discount");
}else{
    console.log("The senior is below the age criteria");
}

//check if a user has provided  avalid email address and send a confirmation email if valid
let isEmail = true;
if(isEmail){
    console.log("Sending the confirmation email");
}else{
    console.log("The email is invalid");
}

//check if a variable is a positive interger and if not send it to a default value
let defaultValue = 10;
let numVar = 2;
if(Number.isInteger(numVar) && numVar > 0){
    console.log("Its a valid integer");
}else{
    numVar = defaultValue;
    console.log("The new variable value is", numVar);
}

//check if a user is a premium member and apply a discount if they are
let isMemberPremium = false;
if(isMemberPremium){
    console.log("You have got an extra discount");
}else{
    console.log("Its a regular member");
}

//Determine the grade of the student based on their score(A,B,C,D)
let stuScore = 75;
if(stuScore > 90){
    console.log("A Grade");
}else if(stuScore > 70){
    console.log("B Grade");
}else if(stuScore > 50){
    console.log("C Grade");
}else{
    console.log("D Grade");
}

//Categorize a product into different price ranges(cheap, moderate, expensive)
let isPrice = 240;
if(isPrice < 50){
    console.log("Cheap")
}else if(isPrice < 250){
    console.log("Moderate");
}else{
    console.log("Expensive");
}

