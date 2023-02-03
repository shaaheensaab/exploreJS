/* Imagine: you're going to buy a phone. Now find out the cheapest price for this.
*/

const phones = [
    {name: 'samsung', camera: '20mp', storage: '64gb', price: 40000, color: 'silver'},
    {name: 'asus', camera: '20mp', storage: '64gb', price: 64000, color: 'silver'},
    {name: 'iphone', camera: '20mp', storage: '64gb', price: 85000, color: 'silver'},
    {name: 'xiaomi', camera: '20mp', storage: '64gb', price: 30000, color: 'silver'},
    {name: 'nokia', camera: '20mp', storage: '64gb', price: 28000, color: 'silver'}
];

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}
const mySelection = cheapestPhone(phones);
console.log(mySelection);


// find out youngest man from an array.
const mans = [
    {name: "Adam", profession: "Businessman", age: "27", blood: "O+"},
    {name: "Tom", profession: "Athlete", age: "25", blood: "AB+"},
    {name: "Mclin", profession: "Teacher", age: "31", blood: "O-"},
    {name: "John", profession: "Doctor", age: "32", blood: "A+"},
    {name: "Stive", profession: "Businessman", age: "26", blood: "B+"},
    {name: "Thomas", profession: "Student", age: "20", blood: "AB-"},
];

function youngMan(mans){
    let youngest = mans[0];
    for(i = 0; i < mans.length; i++){
        const man = mans[i];
        if(man.age < youngest.age){
            youngest = man;
        }
    }
    return youngest.name;
}
const youngestMan = youngMan(mans);
console.log("Youngest man:", youngestMan);