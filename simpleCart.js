// make a code for sum of total cost of shopping.
// const shoppingCart = [
//     {item: 'shirt', price: 1500},
//     {item: 'pant', price: 3500},
//     {item: 'belt', price: 500},
// ];

// function totalCost(products){
//     let sum = 0;
//     for(let i = 0; i < shoppingCart.length; i++){
//         const product = products[i];
//         sum = sum + product.price;
//     }
//     return sum;
// }
// const expense = totalCost(shoppingCart);
// console.log('Total expense today:', expense);

// const shoppingCart = [
//     {item: 'shirt', price: 1500},
//     {item: 'pant', price: 2500},
//     {item: 'sunglass', price: 500},
//     {item: 'belt', price: 500},
//     {item: 'shoe', price: 2000}
// ];

// function totalCost(products){
//     let sum = 0;
//     for(let i = 0; i < shoppingCart.length; i++){
//         const product = products[i];
//         sum = sum + product.price;
//     }
//     return sum;
// }

// const expense = totalCost(shoppingCart);
// console.log(expense);



// total cost of my computer:::::::::::::::::::::::::::::::::::::::::::

const myComputer = [
    {item: 'Processor', brand: 'RYZEN AMD', model: '3400G', price: 19500},
    {item: 'Motherboard', brand: 'ASRock', model: 'B450M', price: 10500},
    {item: 'SSD', brand: 'CORSAIR', model: 'MP510', price: 6000},
    {item: 'RAM', brand: 'TFORCE', model: 'DARK', price: 5000},
    {item: 'POWER-SUPPLY', brand: 'CORSAIR', model: 'CV450', price: 3000},
    {item: 'CASING', brand: 'MONTECH', model: 'K200', price: 5000},
    {item: 'HARD-DISK', brand: 'WESTERN', model: '1TB', price: 3600},
    {item: 'MONITOR', brand: 'SAMSUNG', model: 'LF22T35', price: 10300},
    {item: 'KEYBOAR-MOUSE', brand: 'GAMENOTE', model: 'COMBO', price: 1500},
    {item: 'UPS', brand: 'POWERPACK', model: 'OL 650', price: 3000}
];

function totalCostOfComputer(products){
    let sum = 0;
    for(let i = 0; i < myComputer.length; i++){
        const product = products[i];
        sum = sum + product.price;
    }
    return sum;
}
const myComputerExpense = totalCostOfComputer(myComputer);
console.log("Total expense of my computer:", myComputerExpense, "TK");