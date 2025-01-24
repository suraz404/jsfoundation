//Create a function createCounter() that returns a function which increments and returns a counter value each time it is called.
function createCounter(){
    let counter=0;
    return function(){
        return ++counter;
    }
}

let increment=createCounter();
//console.log(increment())
// console.log(increment())

//Create a function rateLimiter(fn, limit) that returns a new function. 
//The returned function allows calling fn only once within a limit time in milliseconds. If it is called again before the limit is reached, it should return "Rate limit exceeded".

function rateLimiter(fn, limit) {
    let lastCalled = 0;
    return function(...args) {
      const now = Date.now();

      if (now - lastCalled < limit) {
        return 'Rate limit exceeded';
      } else {
        lastCalled = now;
        return fn(...args);
      }
    };
  }
  const now = Date.now();
  console.log(now);
  