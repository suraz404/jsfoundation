/*
1.Write a `for` loop that loops through the array ["green tea","black tea",
"chai","oolang tea"] and stops the loops when it finds "chai".
    Store all teas before "chai" in a new array named `selectedTeas`.
 */
let teas =["green tea","black tea","chai","oolang tea"];
let selectedTeas=[];
for (let i = 0; i < teas.length; i++) {
    if (teas[i]==="chai") {
        break
    }
    else{
        selectedTeas.push(teas[i]);
    }
    
}

/*write a `for` loop that loops through the array ["London","New York",
"Paris","Berlin"] and skips "Paris"
    Store the other ciities in a new array named `visitedCities`
 */
let cities =["London","New York","Paris","Berlin"];
let visitedCities=[];
for (let j = 0; j<cities.length; j++) {
  if (cities[j]==="Paris") {
    continue;
  }
  else{
    visitedCities.push(cities[j]);
  }
}
//console.log(visitedCities)

/*Use a `for-of` loop to iterate through the array [1,2,3,4,5] and
top when the number 4 is found.Store the number before `4` in an array
named `small number`
*/
let numbers=[1,2,3,4,5]
let smallNumber = [];
for (const num of numbers) {
    if(num===4){
        break;
    }
    else{
        smallNumber.push(num);
    }
}
/*
Use a "for of" loop to iterate through the array the array 
["chai","green tea","herbal tea","black tea"] and skip "herbal tea".
     Store the other teas in an array named "preferredTeas".
*/
let teaTypes=["chai","green tea","herbal tea","black tea"];
let preferredTeas=[];
for (const element of teaTypes) {
    if(element ==="herbal tea"){
        continue;
    }
    else{
    preferredTeas.push(element);
    }
}
// console.log(preferredTeas);
/*
Use a "for-in" loop to loop through an object containing
city populations.
   Stop the loop when the populations of "Berlin" is found
   and store all previous cities population in a new object named
   cityPopulations.
    let citiesPopulation ={
    "London":8900000,
    "New York":8400000,
    "Paris":2200000,
    "Berlin":3500000,
  }
    */
  let citiesPopulation ={
    London:8900000,
    "New York":8400000,
    Paris:2200000,
    Berlin:3500000,
  }

 let cityNewPopulations={};
 for (const city in citiesPopulation) {
    // console.log(cityPopulations[city]);
    if (city==="Berlin") {
        break;
    }
    cityNewPopulations[city]=citiesPopulation[city];
    }
//console.log(cityNewPopulations);

/*
Use a for in loop to loop through an object containing city populations 
  Skip any city with a population below 3 million and store the res in  a
  new object named "largeCities"
 */
let worldCities={
    "Sydney":5000000,
    "Tokyo":9000000,
    "Berlin":3500000,
    "Paris":2200000

};
let largeCities={};

for (const key in worldCities) {
        if (worldCities[key]<3000000){
            continue;
    }
    else{
    largeCities[key]=worldCities[key];
    }
}
//console.log(largeCities);

/*
Write a `for Each` loop that iterates through the array ["earl grey",
"green tea","chai","oolong tea"].
   stop the lopps when "chai" is found ans store all the previous 
   tea type in an arrray named `availableTeas`.
 */

teaTypes=["earl grey","green tea","chai","oolong tea"];
let availableTeas=[];
teaTypes.forEach(function(tea){
if(tea==="chai"){
  return;
}
availableTeas.push(tea);

});
console.log(availableTeas)
/*
Write a "forEach" loop that iterates through the array ["berlin","tokyo","sydney","paris"] 
   Skip "sydney" and store the other cities in a new array named "traveledCities"*/
   let citynames=["berlin","tokyo","sydney","paris"]
   let traveledCities=[];
   citynames.forEach(function(cityname){
    if(cityname==="sydney"){
      return  
    }
    traveledCities.push(cityname);
   })

   /*
Write a for loop that iterates through the array [2,5,7,9],Skip the value 
"7" and multiply the rest by 2.store the result in a new array named "doubleNumbers"

    */
   let nummbers=[2,5,7,9]
   let doubleNumbers=[];
   for (let index = 0; index < nummbers.length; index++) {
    if (nummbers[index]===7){
            continue;
   }
   else{
    doubleNumbers.push(number[i]*2)
   }}
/*
USe a for of loop to iterate through the array ["chai","green tea","black tea",
"jasmine tea","herbal tea"]
snd stop when the length of the current tea name is greater than 10
store the teas iterated over in an array named "shortTeas" */

let myTeas =["chai","green tea","black tea","jasmine tea","herbal tea"]
let shortTeas=[];
for (const tea of myTeas) {
    if(tea.length>10){
        break
    }
    shortTeas.push(tea)
    
}