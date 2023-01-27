//::::::::::::::COMPARISON::::::::::::::::::\\
// comparison operators: >, <, ===, !==, >=, <=, &&, ||

var num1 = 50;
var num2 = 40;

console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

// multiple conditions..
var money1 = 100;
var money2 = 110;
var result1 = 5;
var result2 = 4;
var height1 = 6;
var height = 6;
console.log(money1 > money2 && result1 > result2 && height1 > height2);
console.log(money1 > money2 || result1 > result2 || height1 > height2);