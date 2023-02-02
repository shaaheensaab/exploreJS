// Inch to Feet convert:
function inchToFeet(inch){
    let feet = inch/12;
    return feet;
}

let myHeight = inchToFeet(60);
console.log(myHeight);


// fibonacci method------------
const fibo = [0, 1];
for(let i = 2; i < 10; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo);

// find out the highest number:
var a = 2;
var b = 9;
var c = 7;
var d = 5;

var top = Math.max(a, b, c, d);
console.log(top);

// Math.abs: gives a absolute figure of a number.
const number = -78;
const answer = Math.abs(number);
console.log(answer);

// Get a random number:
const randomNumber = Math.round(Math.random()*10);
console.log(randomNumber);

// Get the sum of a function:
function add(a, b){
    return a + b;
}

let total = add(1, 3);
console.log(total);

// string concatenating:
function add(a, b){
    return a + b;
}
console.log(add("adam" + "eve"));

// find area of a rectangle:
function findArea(length, width){
    let total = length * width;
    return total;
}

let totalArea = findArea(10, 5);
console.log(totalArea);

// finding max number:
function findMax(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }
    else if(num2 > num1 && num2 > num3){
        return num2;
    }
    else{
        return num3;
    }
}
let num1 = 210;
let num2 = 520;
let num3 = 430;
const result = findMax(num1, num2, num3);
console.log(result);

// another way to find max number from a list:
const maxNumber = Math.max(10, 40, 100, 20, 50);
console.log(maxNumber);

// another way to find max number:
function findMax(a, b, c, d, e){
    const maxNum = Math.max(a, b, c, d, e);
    return maxNum;
}
const topResult = findMax(4, 5, 6, 2, 9);
console.log(topResult);

// find minimum number:
Math.min(59, 05, 38, 28);

// find Grade using Number:
let Me = 85;
let Tom = 40;
let Jane = 69;
let Peter = 98;
let John = 70;

let meGrade = "";
if(Me >= 80){
    meGrade = "A";
}
else if(Me >= 60){
    meGrade = "B"
}
else if(Me >= 50){
    meGrade = "C"
}
else if(Me >= 40){
    meGrade = "D"
}
else{
    meGrade = "You're Failed!";
}
console.log("My Grade:", meGrade);

let tomGrade = "";
if(Tom >= 80){
    tomGrade = "A";
}
else if(Tom >= 60){
    tomGrade = "B"
}
else if(Tom >= 50){
    tomGrade = "C"
}
else if(Tom >= 40){
    tomGrade = "D"
}
else{
    tomGrade = "You're Failed!";
}
console.log("Tom's Grade:", tomGrade);

let janeGrade = "";
if(Jane >= 80){
    janeGrade = "A";
}
else if(Jane >= 60){
    janeGrade = "B"
}
else if(Jane >= 50){
    janeGrade = "C"
}
else if(Jane >= 40){
    janeGrade = "D"
}
else{
    janeGrade = "You're Failed!";
}
console.log("Jane's Grade:", janeGrade);

let peterGrade = "";
if(Peter >= 80){
    peterGrade = "A";
}
else if(Peter >= 60){
    peterGrade = "B"
}
else if(Peter >= 50){
    peterGrade = "C"
}
else if(Peter >= 40){
    peterGrade = "D"
}
else{
    peterGrade = "You're Failed!";
}
console.log("Peter's Grade:", peterGrade);

let johnGrade = "";
if(John >= 80){
    johnGrade = "A";
}
else if(John >= 60){
    johnGrade = "B"
}
else if(John >= 50){
    johnGrade = "C"
}
else if(John >= 40){
    johnGrade = "D"
}
else{
    johnGrade = "You're Failed!";
}
console.log("John's Grade:", johnGrade);
