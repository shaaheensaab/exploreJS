// slice:
// const friends = [23, 28, 25, 12, 34, 10, 18, 31, 29, 24];
// const partialSlice = friends.slice(2, 5);
// console.log(partialSlice);
// console.log(friends);

// splice:
const friends = [23, 28, 25, 12, 34, 10, 18, 31, 29, 24];
const partialSplice = friends.splice(2, 6, 111, 222, 333);
console.log(partialSplice);
console.log(friends);