
/*
Write a function squareNumbers(arr) using map() and arrow functions
*/const squareNumbers=(arr)=>{
    return arr.map((num)=>{
       return num*num;
    })
}
const a=[1,2,3,4,5];
//console.log(squareNumbers(a));

/*
Create a function filterEvenNumbers(arr) 
using filter() and arrow functions
 */
const filterEvenNumbers=(arr)=>{
 return arr.filter((item)=>{
    return item%2===0
});
}
let b=[1,2,3,4,5,6]
//console.log(filterEvenNumbers(b))

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

/*
Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions
 */
const getNames = (arr) => arr.map(item => item.name);


/*
Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function


*/
const findLongestWord = (words) => {
    // Use the reduce method to iterate through the array
    return words.reduce((longestWord, currentWord) => {
      // Compare the length of the current word with the longest word found so far
      if (currentWord.length > longestWord.length) {
        return currentWord; // Update the longest word if the current word is longer
      }
      return longestWord; // Keep the existing longest word if it's still longer
    }, ""); // Initialize longestWord as an empty string
  };
  
  // Example usage
  const wordArray = ["apple", "banana", "cherry", "date"];
  const longestWord = findLongestWord(wordArray);
  console.log(longestWord); // Output: "banana"

  /*
  Create an object person with a method introduce() that uses this

additionally add properties of name & age that will result in 
Hi, my name is Suraz and I am 19.5 years old on calling introduce() 
*/
const person = {
    name: 'Suraz',
    age: 19.5,
    introduce() {
      return `Hi, my name is ${this.name} and I am ${this.age} years old`;
    }
  };

  /*
  Write a function outer() that contains another function inner() and 
  returns a value of 'Inner function called' on calling outer()
  */
  function outer() {
    function inner() {
      return 'Inner function called';
    }
  
    return inner();
  }