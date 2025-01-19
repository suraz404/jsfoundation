/*
1.Declare an array name "teaFlavours" that contains the string "green tea" , "black tea", and "oolong tea".
 Acees the first element of the array and store 
 it in a variable name "firstTea"


*/

let teaFlavours =["green tea ", "black tea","oolang tea"];

let firstTea=teaFlavours[0];

/*
Declare an array named 'cities',containing "london"
"Tokyo","paris" and new york.
access the third element in the array and store it in a 
variable named "favourite city"


*/
let cities = ["London","Tokyo","Paris","New York"];
let favouriteCity=cities[2];



/*
You have an array name 'teaTypes' containing "herbal tea"
"white tea " and "masala chai", Change the second element of the array
to "jasmine tea"


*/
let teaTypes=["Herbal tea","white tea","masala chai"];
teaTypes[1]="jasmine tea";
// console.log(teaTypes);

/*
4.Declare an array named 'citiesVisited" containing the 
"kathmandu" and "sydney"
 Add "berlin" using push method
*/

let citiesVisited=["kathmandu","sydney"];
citiesVisited.push("berlin");
// console.log(citiesVisited);


/*
you have an array named  "teaOrders" with "chai",
"iced tea", "matcha", and "earl grey";
  remove the last element of the array using the pop
  method and store it in a variable name "lastOrder";


*/
let teaOrders=["chai","iced tea","matcha","earl grey"];
const lastOrder= teaOrders.pop() //returns earl grey


/*
you have an array named "popularTeas' containing "greentea"
"oolang tea" , and "chai".
  create a soft copy of this array named "softCopyTeas".

*/

let popularTeas=["green tea ", "oolang tea","chai"];
let softCopyTeas= popularTeas;
popularTeas.pop();
// console.log(popularTeas);
// console.log(softCopyTeas);

/*
you have an array named "topCities" containing
"berlin" ,"singapore", and "new york".
       Create a hard copy of this array named
       "hardCopyCities"
*/

let topCities=["Berlin","Singapore","New york"]
let hardCopyCities=[...topCities]
// let hardCopyCities= topCities.slice();

/*
you have two arrays :"europeanCities" containing 
"paris" and "rome" and "asianCities" containing "Tokyo"
and "Bangkok"
   Merge this two arrays into a new array named "worldCities".

*/
let europeanCities=["Paris","Rome"];
let asianCities=["Tokyo","Bangkok"];

let worldCities=europeanCities.concat[asianCities];
/*
you have an array named "teaMenu" containing "masala chai"
"oolang tea","green tea " and "earl grey".
find the length of the array and store it in a variable
named "menuLength"
*/
let teaMenu=["masala tea","oolang tea","green tea", "earl grey"];

let menuLength=teaMenu.length();

/*
You have an array named "cityBucketList" containing "kyoto"
"london","cape town" and "vancouver"
check if "London "is in the array and store the result ina 
variable named "isLondonInList".
*/
let cityBucketList=["Kyoto","London","Cape Town","Vancouver"];
let isLondonInList=cityBucketList.includes("London");

