//!Objects
const userName ={ //!userName is fix 
 firstName:'Suraz',//!but they can be change
 isActive: true ,
}
//!For acess we can use .
userName.firstName="Mr.Suraz";
userName.lastName ="Agrahari" //!add 

console.log(userName);//!{ firstName: 'Mr.Suraz', isActive: true, lastName: 'Agrahari' } object
console.log(typeof(userName))

const userDetails={
    firstDetails:"User"
}
console.log(userDetails['firstDetails']);//!we can acess like this too


//!inbuild objects

let today = new Date();
console.log(today.getDate());

//!Arrays

let anotherUser = ["Suraz",true ];

console.log(anotherUser[0]);


//!type conversion

console.log("1"+1);
let isValue ="2abc";
console.log()