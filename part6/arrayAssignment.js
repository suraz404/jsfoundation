/*

Write a function filterNumbers(arr) that returns only numbers from a mixed array
 */
function filterNumbers(arr){
    return arr.filter(item=>{
        return typeof item === 'number';
    });
}
let aRR=[1,2,3,4,5,6,"duraz"]
let a =filterNumbers(aRR);
// console.log(a);

/*
Write a function reverseArray(arr)
 that reverses the array
*/
function reverseArray(arr){
    return arr.reverse();
}
/*
Write a function findMax(arr) that returns the largest number in the array
 */
function findMax(arr){
 return Math.max(...arr)
}
let array =[1,2,3,4,56,7,7]
let b = findMax(array)
console.log(b);

/*
Write a function removeDuplicates(arr) that returns
 a new array with all duplicates removed

 */
function removeDuplicates(arr){
    return [... new Set(arr)]
}
let c=removeDuplicates(array)
console.log(c);

/*
Write a function flattenArray(arr) that takes a nested array 
and returns a single flattened array
 */
function flattenArray(arr) {
    return arr.flat(Infinity);
  }