// :::::::::::::::CONDITIONAL::::::::::::::: \\
// if(condition) execute a statement if a specified condition is truth..
// else(condition) when if statement isn't truth then else statement will executed..

var chickenPrice = 300;
var myMoney = 100;

if(chickenPrice < myMoney){
    console.log("I'll eat chicken");
}else{
    console.log("I'll eat potato");
}

// multiple condition check..

// all conditions need to be true
var isGraduated = true;
var salary = 50000;
var cars = 1;

if(isGraduated == true && salary > 100000 && cars >= 1){
    console.log("Congratulations!");
}else{
    console.log("Try another way!");
}
// if any condition is true
if(isGraduated == true || salary > 100000 || cars >1){
    console.log("Congratulations!");
}else{
    console.log("Try another way!");
}