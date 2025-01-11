//Numbers

let num1 = 120;
let num2 = new Number(120); //changes number as object

console.log(typeof(num1)); //print the data type of num1 i.e number
console.log(typeof(num2))//it is object type.

//boolean
let isActive = true;

//null and undefined

let firstname;
console.log(firstname);//undefined

let lastName=null;
console.log(lastName);//null-empty

// //!String

let myString="hello";
let myStringOne ="Hola";
let userName ='Suraz'

let greetMsg = `Hello ${userName}` //back tick 
console.log(greetMsg);
let demoOne = `value is ${2 * 2}`;


//Symbols

let sm1 = Symbol(); //unique value represent garxa
let sm2 = Symbol();

console.log(sm1 == sm2);//not true

