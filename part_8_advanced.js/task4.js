//async awaits
// Create two functions fetchUser() and fetchPosts(), both returning promises that resolve in 1 second.

// Use async-await and Promise.all to fetch both simultaneously and log the results as part of fetchAllData()

function fetchUser(){
 return new Promise((resolve,reject)=>{
   setTimeout(() => {
    resolve("Fetched User")
    
   }, 1000);
 })
}
function fetchPosts(){
return new Promise ((resolve,rejrct)=>{
    setTimeout(() => {
        resolve("Fetched Post")
    }, 1000);
})
}

async function fetchAllData() {
    const [a,b]=await Promise.all([fetchUser(),fetchPosts()]);
    console.log(a);
    console.log(b);
    
}
fetchAllData();

/*
Write two functions fetchSuccess() and fetchFailure(), where fetchSuccess() returns a promise that resolves successfully after 1 second, and fetchFailure() returns a promise that rejects with an error after 1 second.

Create a function handlePromises() that calls both functions using Promise.all and handles success and failure cases. */

function fetchSuccess() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Fetch sucess");
        }, 1000);
    })
}
function fetchFailure(){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
     reject("Fectch Error")
    },1000)
})
}
async function handlePromises(){
  try{
    const [sucess , failure]=await Promise.all([fetchSuccess(),fetchFailure()]);
    console.log(sucess);
    console.log(failure);  
  }
  catch(error){
    console.log(error)
  }
}

//Promise.race()
/*
Create a function fetchWithTimeout(promise, timeout) that takes a promise and a timeout value in milliseconds. Use Promise.race() to return the result of the promise if it resolves within the timeout, otherwise return "Timeout exceeded". */
function fetchWithTimeout(promise,timeout){
    return Promise.race([
        promise,new Promise((_,reject)=>{
            setTimeout(() => {
                reject("Timeout Exceeded")
            }, timeout);
        })
    ])
}

function fetchWithTimeout(promise, timeout) {
    return Promise.race([
      promise,
      new Promise((_, reject) =>
        setTimeout(() => reject("Timeout exceeded"), timeout)
      )
    ]);
  }
  
  // Example usage
  const examplePromise = new Promise((resolve) => {
    setTimeout(() => resolve("Data fetched"), 2000); // Simulate a 2-second delay
  });
  
  fetchWithTimeout(examplePromise, 1000)
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
  