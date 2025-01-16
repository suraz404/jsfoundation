/*
Write a function names "makeTea" that takes one parameter "typeOfTea" and returns a strinf like 
"Making green tea" when called with a green tea.store in a variable named "teaOrder"
 */

function makeTea(typeOfTea){
    return `Making ${typeOfTea} tea`
}

let teaOrder=makeTea("Green")
// console.log(teaOrder)

/*
Create a function named "orderTea" that takes one parameter , "teaType".Inside this function
create another function named "confirmOrder" that returns a message like "order confirmed for chai"
call "confirmOrder" from within orderTea and retuen the results  */
 function orderTea(teaType){
    function confirmOrder(){
        return "order confirmed for chai;"
    }
   return confirmOrder();
 }
let orderConfirmation = orderTea();  //all about Execution context 
// console.log(orderConfirmation)
 /* 
 Write a arrow function named `calculateTotal` that takes two parameter `price` and `quantity`. The function should return the total cost by 
 multiplying the `price` and `quantity`.
 Store the results in a variable named `totalCost`.

 */

 let calculateTotal=(price,quantity)=>{
    return price*quantity;
 }
//let calculateTotal =(price,quantity)=> price * quantity //!implicit return in one line
 let totalCost=calculateTotal(12,12);
 //console.log(totalCost)
 //!Arrow function can't pass this function or context or use it completely.

 /*
 4. Write a function named `processTeaOrder` that takes another function , `makeTea` as a parameter and calls it with argument `earl grey`.
 Returns the results of calling `makeTea`.
  */
 //!Higher Order Function .example is forEach function
 function makeTea(tea){
  return tea;
 }
function processTeaOrder(teaFn) {// taking function as argument
    return teaFn("earlgrey")
}
let a =processTeaOrder(makeTea);//makeTea fn is acting as argument
//console.log(a)

/*
5. Write a function name `createTeaMaker` that returns another function.The returned function should take one parameter, `teaType`,
and return a message like `Making green tea`.
 Store the returned function ina variable name `teaMaker` and call it with `green Tea`
 */
//!Returning function 
function createTeaMaker (name){
    return function(teaType){
        return `Making ${teaType} for ${name}`//!name is invoke from the function without even passing to their function.
        //!Called as CLOSURE.
    }
};
let teaMaker= createTeaMaker("suraz") 
console.log(teaMaker("earl grey"))
