/*
Write a function stringToNumber that takes a string input and tries to convert it to a number.
 If the conversion fails, return "Not a number"
  */
 function stringToNumber(string){
   const num = Number(string);
   if(isNaN(num)){
     return "Conversion fails"
   }
   else{
    return num;
    
   }
 }
 let a =stringToNumber("hello");
 //console.log(a);
 
 /*
Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it.
 For example, true becomes false, 0 becomes true, etc.
  */
function flipBoolean(input){
  return !Boolean(input);
}
/* 
Write a function whatAmI that takes an input and returns a string describing its type after conversion.
 If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"*/
 function whatAmI (input){
    let inputType = typeof input
  return `i am ${inputType}`
 }
 let b = whatAmI()
 //console.log(b);
 
 /*
 Write a function isItTruthy that takes an input and returns "It's truthy!" 
 if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.
 */
function isItTruthy(input){
 let num=Boolean(input);
 if (num){
    console.log("it is truthy")
 }
 console.log("it is falsey")
}
isItTruthy()