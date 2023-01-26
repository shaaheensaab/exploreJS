// ::::::::::::::PUSH/POP & SHIFT/UNSHIFT:::::::::::::::::
// push() method adds new elements to the end of an Array & pop() method removes an element from the end of an Array...
// unshift() method adds new elements to the beginning of an Array & shift() method removes first elements of an Array...

// using push to add element to an Array as the last element of the Array..
var roll = [1, 2, 3, 4, 5, 6];
roll.push(7);
roll.push(8);
console.log(roll);

// using pop to remove last element of an Array..
var students = ['abul', 'kabul', 'habul', 'balul'];
console.log(students);
students.pop();
console.log(students);
students.pop();
console.log(students);
// return the value while using pop
var extra = students.pop();
console.log(extra);
console.log(students);