const name = document.getElementById("name");

const enteredName = prompt("Enter your name");

name.innerHTML = enteredName;

let a = 10;

let b = a++; //b is 10 only but a becomes 11(post inc)
console.log(b, a);

a = 15;
b = a + 1;
console.log(b, a); // b is incremented as expression is evaluated
// a=a+1 is same as a++ but in currentline-2 we are just using value of a and not modifying it

a = 20;
b = ++a; //b is 21 and a is also since it is (pre inc)
console.log(b, a);

let bigInt = 9007199254740991n; // add n to a number(only interger) to make it big int
console.log(typeof bigInt);
