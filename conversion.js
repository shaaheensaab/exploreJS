// ::::::::::: Conversion & Concatenation ::::::::::::::

// Ideal declaration of NUMERIC variable..
var price1 = 10;
var price2 = 20;
var totalPrice = price1 + price2;
console.log(totalPrice);

// Ideal declaration of STRING variable..
var firstName = "Sam";
var lastName = "Altman";
var fullName = firstName + " " + lastName;
console.log(fullName);

// Concatenation of Numbers inside Strings..
var priceOne = "20"; //Integer Numbers 
var priceTwo = 10;
var finalPrice = priceOne + priceTwo;
console.log(finalPrice);

var priceOne = parseInt(priceOne);
var finalPrice = priceOne + priceTwo;
console.log(finalPrice);

var gpa = "3.83"; //Floating Numbers
var gpa = parseFloat(gpa);
console.log(gpa);