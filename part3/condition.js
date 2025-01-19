//checking if a number is greater than another number

let num1=5;
let num2=8;

if (num1>num2){
    console.log(`${num1} is greater`);
    
}
else{
    console.log(`${num2} is greater`)
}

//check if a string is equal to another string

let username ="chai";
let anotherUsername = 123 

if (username == anotherUsername){
    console.log('Pick another username');
}

//checking if a variable is a number or not
let score = [1,2,3];

if (typeof score === "number") {
    console.log("yep this is a number");
}
else{
    console.log("no that is not a number");
    
}
console.log(typeof(score));

//Checking if a boolean value i true or false;

let isTeaReady = false;

if(isTeaReady==false)
{
    console.log('Tea is ready');
    
}

//checkiing if an array is empty or not;

let items = [];
if(items.length==0){
    console.log('length is zero')
}