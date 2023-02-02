// :::::::::::PROBLEMS-PRACTICE:::::::::: \\
/**
1. What is JavaScript? 
    - JavaScript is a programming language that is primarily used for creating interactive and dynamic web pages.
    - A scripting language that allows to implement complex features on web pages.
    - Can also be said as a programming language for the web.

2. How does JavaScript works?
    - JavaScript is a client-side scripting language. Which means that is runs on the user's browser rather than on a server. It allows web developers to add interactivity, dynamic content, and other advanced feature to websites.

3. What is Variable?
    - A JavaScript variable is a name of storage/ location.

4. How does the variable declare?
    - (var myName = "XYZ";) These 5 things inside the bracket need to remember during declaring a variable.

5. How does update/ change value of a variable?
    - var cars = ["MAN", "VOLVO", "BMW"];
    cars[2] = "MUSTANG";
    console.log(cars)

6. How many types of variable are exists?
    - There are three types of variables are exists. Ex: var, let & const.

7. What is Primitive and non primitive data type?
    - Primitive data type: Number, Sting, Boolean, Null, Undefined.
    - Non-primitive data type: Array, Object.

8. Variable names cannot be reserved word. It should be different from javaScript reserved word.
    - Ex: return, default, case, delete. These are the reserved words.

9. How to use operator symbols between two different variables.
    -var num1 = 10;
    -var num2 = 20;
    -var totalNum = num1 + num2;
    -var remainingNum = num2 - num1;
    -var multiNum = num1 * num2;
    -var quotientNum = num1 / num2;
    -var leftoverNum = num1 / num2;

10. What is the purposes of ++ and -- in javaScript?
    - ++: adds 1 to the existing value.
    - --: subtracts 1 from the existing value.

11. What is the purposes of - parseInt, parseFloat, toFixed?
    - parseInt(): This method parses and returns an Integer number from a string.
    - parseFloat(): This method executes in need of parsing float numbers from a string.
    - toFixed(): This method declares how many numbers will show in output. Ex; [1.024299] to [1.03].

13. What is an array? How does it works? How to declare an array?
    - Arrays are used to store multiple values in a variable.
    - An array object allows us to store multiple values in a variable. It's a collection of variables of the same type data.
    - var locations = ["Norway", "Serbia", "Canada", "USA"];

14. How to find out how many elements are available in an array?
    - var fruits = ["Cherry", "Grapes", "Avocado", "peanut"];
    - console.log(fruits.length);

15. How does the positions of array works? How to change the index value of an array?
    - Generally, The index position of an array starts from 0. 
    - Ex: var wordList = ["A", "B", "C", "D", "E"];
    -                      0    1    2    3    4
    - To change a index value you need to declare,
    - wordList[1] = "b";

16. What does it means that index value = 1?
    - The index value = 1, indicates the 2nd element position of an array.

17. How to find out an element position from an array by its index?
    - var friends = ["Alex", "Bob", "Catherine", "Danny"];
    - friends[2];

18. How to change an elements index value of an array?
    - var friends = ["Alex", "Bob", "Catherine", "Danny"];
    - friends[0] = "Adam";

19. How to find out an elements index value by its value?
    - var cars = ["VOLVO", "RR", "BMW", "MAN", "CAT"];
    - var lostCar = cars.indexOf("VOLVO");

20. Why do javaScript shows us 'undefined'?
    - The undefined property indicates that the variable has not been assigned a value nor declared at all.

21. How to add a new element to the end of an array & how to remove last element of an array?
    - var pets = ["Cat", "Dog", "Bird", "Snake", "Fox"];
    - To add   : pets.push("Lion");
    - To remove: pets.pop();

22. How to add a new element to the starts of an array & how to remove first element from an array?
    - var pets = ["Cat", "Dog", "Bird", "Snake", "Fox"];
    - To add   : pets.unshift("Tiger");
    - To remove: pets.shift();

23. What do you know about these symbols: >, <, ==, !==, <=, >=, ===, !==, &&, || ?
    >  : checks if the first number is greater than the opponent or not? Ex; function(10 > 1);
    <  : checks if the first number is less than the opponent or not? Ex; function(10 < 1);
    == : It used to compare two variables. it ignores to comparing datatypes of variable?
    != : checks is two numbers are not equal?
    <= : checks if the first number is less than or equal to another one?
    >= : checks if the first number is greater than or equal to another one?
    ===: It also used to compare two variables & it also compares the datatype between two variables.
    !==: As === checks are two variables' value & datatype equal or not? It works in the same way but it thinks in the reverse way.
    && : It compares multiple statements of a function at a time and if all statement goes true then it works or it stops the function.
    || : It compares multiple statements of a function and if one of the statements goes true then it runs.

24. 
 */