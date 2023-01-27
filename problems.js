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