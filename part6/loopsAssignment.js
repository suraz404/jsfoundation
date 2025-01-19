/*Write a function sumOfN(n) that 
returns the sum of the first n natural numbers*/

function sumOfN(n){
    let sum=0;
   for (let i = 0; i <= n; i++) {
     sum +=i;
   }
   return sum
}
let a=sumOfN(9)
console.log(a)
/*
Write a function printMultiplicationTable(n) that returns the multiplication table for n. 
Values return in the array must be of the format 2 * 2 = 4
*/
function printMultiplicationTable(n){
    const table=[];
    for (let i = 1; i <= 10; i++) {
        table.push(`${n} * ${i} = ${n * i}`);
      }
      return table;
    
}

/*
Write a function countVowels(str) that returns the number
 of vowels (in both lower & uppercase) in the given string str.
*/
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0; // Initialize the count
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    console.log(typeof vowels)
    return count; // Return the total count
}

// Test the function
console.log(countVowels("Hello World")); // Output: 3
