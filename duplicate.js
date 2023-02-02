// remove duplicate element from an array:
const friends = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'febul', 'gebul', 'cabul', 'ebul', 'abul', 'dabul', 'abul'];

function removeDuplicate(friends){
    const unique = [];
    for(let i = 0; i < friends.length; i++){
        const name = friends[i];
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}
const nameList = removeDuplicate(friends);
console.log(nameList);