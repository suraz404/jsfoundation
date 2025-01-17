/*
Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive 
numbers using filter() and reduce() with arrow functions
*/
const sumPositiveNumbers=(arr)=>{
    return arr.filter((num)=>{
       return num > 0;
    }).reduce((acc,value)=>{
     return acc+value;
    })
}
const c=[1,2,3,4,5,6,-7]
console.log(sumPositiveNumbers(c));