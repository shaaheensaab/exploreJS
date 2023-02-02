// 1. Harry's mom gave him money and asked him to buy some oranges and apples. Write a program to help Harry calculate how much money the shopkeeper will return?
var mom = 1000;
var orangePrice = 400;
var applePrice = 400;
var totalPrice = orangePrice + applePrice;
var returnPrice = mom - totalPrice;
console.log(returnPrice);

// 2. Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and English of a student.
var math = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var english = 99.50;
var totalMarks = math + biology + chemistry + physics + english;
var averageMarks = totalMarks / 5;
var result = averageMarks.toFixed(2);
console.log(result);

// 3. John's teacher gave him two variables, Each variable contains a string. John's teacher asked him to combine these two strings and print them in one line. Help John write the program.
var line1 = "I am going to be";
var line2 = "an awesome web developer";
var line = line1 + " " + line2;
console.log(line);

// 4. Sarah's mother is teaching her mathematics. She gave Sarah a number and asked her what the remainder would be if she divided the number by 5? Help Sarah write the program.
var number = 119;
var dividingValue = 5;
var remainderWill = number % dividingValue;
console.log(remainderWill);

// 5. Find the index of an element and replace it with another element, Remove an element and add another element to an array.
var fruits = ['Apple', 'Banana', 'Orange'];

var indexB = fruits.indexOf('Banana');
console.log(indexB);
fruits[1] = 'Mango';
console.log(fruits);

fruits.pop();
console.log(fruits);
fruits.push('Watermelon');
console.log(fruits);

// 6. You and your friends Tom, Jane, Peter and John got their final exam results. Your total score is 85, Tom's total score is 66, Jane's total score is 95, Peter's total score is 56 and John's total score is 40. The grading chart is below-
/**
 * 80 or above A grade.
 * 60 or above B grade.
 * 50 or above C grade.
 * 40 or above D grade.
 * 39 or less => F grade.
 * 
 * Write a program to find you and your friend's grades using if-else.
*/


// 7. Target: Display every element of an array..
var numbers = [20, 43, 40, 19, 30, 12, 21, 22];
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    console.log(number);
}

// Write a function that will take HOUR as the input parameter and will convert it into MINUTES and will return the result in MINUTES.
const hour = 72;
const minutes = hour * 60;
console.log(hour, "hours =", minutes, "minutes");

// Inch to Feet converter:
const setInch = 65;
const gotFeet = setInch / 12;
console.log(gotFeet);

// convert Inch to Feet with function:
function myInch(inch){
    const myFeet = inch / 12;
    return myFeet;
}
let inputHeight = 65;
let myHeight = myInch(inputHeight);
console.log(myHeight);

// convert Hour to Minute:
function gotHour(hours){
    const giveMinutes = hours * 60;
    return giveMinutes;
}
const inputHour = 24;
const totalMinutes = gotHour(inputHour);
console.log(totalMinutes);

// convert Minute to Hour:
function gotMinutes(minutes){
    const giveHour = minutes / 60;
    return giveHour;
}
const inputMinutes = 180;
const totalHour = gotMinutes(inputMinutes);
console.log(totalHour);

// convert Hour to Day:
function gotHour(hours){
    const giveDay = hours / 24;
    return giveDay;
}
const setHour = 24;
const totalDay = gotHour(setHour);
console.log(totalDay);

// covert Day to Hour:
function gotDay(days){
    const giveMeHour = days * 24;
    return giveMeHour;
}
const inputDay = 365;
const myTotalHour = gotDay(inputDay);
console.log(myTotalHour);

// convert Year to Week:
function gotYear(year){
    const gotWeeks = year * 52;
    return gotWeeks;
}
const inputYear = 1;
const totalWeek = gotYear(inputYear);
console.log(totalWeek);

// convert Miles to Kilometer:
function gotMiles(miles){
    const giveKilometer = miles * 1.60934;
    return giveKilometer;
}

const inputMiles = 5;
const totalKilometers = gotMiles(inputMiles);
console.log(totalKilometers);

// convert Kilometer to Miles:
function gotKilometer(kilometer){
    const giveMiles = kilometer * 0.621371;
    return giveMiles;
}
const inputKilometers = 1;
const totalMiles = gotKilometer(inputKilometers);
console.log(totalMiles);


// getting Odd and Even numbers:
function isEven(number){
    const remainder = number % 2;
    if(remainder === 0){
        console.log("This number is Even.");
    }
    else{
        console.log("This number is Odd");
    }
}
const inputNumber = 100;
const checkNumber = isEven(inputNumber);
