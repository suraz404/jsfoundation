//this contextt taassk
/* 
Create an object person with properties name and a method introduce(). 
Use the bind() method to ensure the method works correctly when 
passed to another function.

*/
const person ={
    name:"suraz",
    introduce(){
        console.log(`hello ${this.name}`);   
    }
}

const introducTion=person.introduce.bind(person)
introducTion()

/*
Write a function introduce() that uses the this keyword to introduce a person by name. Then, invoke introduce() using call() to introduce different people with the same function.
 */
function introduce(){
        return this.firstName+ " "+this.lastName
    }

const person1={
    firstName:"rahul",
    lastName:"roy",
}
const person2={
    firstName:"John",
    lastName:"Roy"
}

console.log(introduce.call(person1))

/*
Create a function sum() that accepts two numbers and uses this to access a multiplier value. Then, invoke sum() with different contexts using apply(), passing the numbers as an array.
 */
function sum(a, b) {
    return (a + b) * this.multiplier;
  }
  
  const context1 = { multiplier: 2 };
  const context2 = { multiplier: 3 };
  
sum.apply(context1,[5,10]);
sum.apply(context2, [5, 10]);