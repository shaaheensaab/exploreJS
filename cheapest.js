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