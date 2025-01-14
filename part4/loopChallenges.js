/*
1.Write a "while" loops that calculates the sum of 
number from 1 to 5 and stores the results in a varible
named "sum"
*/
let sum = 0;
let i=1;
while (i<=5) {
    sum += i;
    i++;
}
// console.log(sum);
/*
Write a "while loop " that counts down from 5 to 1
and store the numbers in an array named 'countdown'
*/
let j=5;
let countdown=[];
while(j>=1)
{
    //console.log(j);
    countdown.push(j);
    j--;
}
//!console.log(countdown);

/*
Write a "do while" loop that prompts a user to enter their 
favourite tea type until they enter `"stop".
  Store each tea type in an array named 'teaCollection'.
*/
//!let a;
//! let teaCollection=[];
//! do {
//!    a =  prompt(`Enter your favourite tea type(type stop to end)`);
//!    if (a !== "stop")
//!    {
//!     teaCollection.push(a);
//!    }
//! } while (a!=="Stop");

//! console.log(teaCollection)

/*
write a `do while` loops that adds numbers from 1 to 3
and stores the results in a variable named 'total' 
*/

let total=0;
let k=1;
do {
    total+=k;
    k++;
} while (k<=3);
//console.log(total)

/*
write a 'for' loops that multiplies each element 
in the array [2,4,6] by 2 and stores the results in a 
new array named `multipliedNumbers`*/
 let arr=[2,4,6];
 let multipliedNumbers=[];
 arr.forEach(element => {
    let m =element*2;
    multipliedNumbers.push(m);
 });
 //console.log(multipliedNumbers);
 
 /*
  Write a "for" loop that lists all the cities in the array
["paris","new york","tokyo","london"] and stores each city in a new array 
named 'cityList
*/
let cities =["paris","new york","tokyo","london"];
let cityList=[];
for (let u = 0; u < cities.length; u++) {
    const element = cities[u];
    cityList.push(element)
}
console.log(cityList);
