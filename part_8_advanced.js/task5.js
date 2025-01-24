
//Create a generator function numberGenerator() that yields numbers from 1 to 3
function* numberGenerator(){
    yield 1;
    yield 2;
    yield 3;
}
let gen=numberGenerator();
console.log(gen.next().value);//yield 1


//Create a custom iterator called rangeIterator(start, end) that returns an object that iterates over numbers from start to end.

//Each call to .next() should return the next number in the range until it reaches end.

function rangeIterator(start, end) {
    let current = start; // Initialize the current value to the starting point
    return {
      next() {
        if (current <= end) {
          return { value: current++, done: false }; // Return the current value and increment
        } else {
          return { value: undefined, done: true }; // Indicate the iteration is complete
        }
      }
    };
  }
  
  // Example usage:
  const iterator = rangeIterator(1, 5);
  
  console.log(iterator.next()); // { value: 1, done: false }
  console.log(iterator.next()); // { value: 2, done: false }
  console.log(iterator.next()); // { value: 3, done: false }
  console.log(iterator.next()); // { value: 4, done: false }
  console.log(iterator.next()); // { value: 5, done: false }
  console.log(iterator.next()); // { value: undefined, done: true }

  /*
  Create a generator function fibonacciGenerator() that yields numbers from the Fibonacci sequence indefinitely (1, 1, 2, 3, 5, 8, etc.).

Use the next() method to get the next Fibonacci number.

 */
  
function* fibonacciGenerator() {
    let a = 1, b = 1; // Initialize the first two numbers of the Fibonacci sequence
    yield a;          // Yield the first number
    yield b;          // Yield the second number
    while (true) {    // Generate Fibonacci numbers indefinitely
      const next = a + b;
      yield next;
      a = b;
      b = next;
    }
  }
  
  // Example usage:
  const fibonacci = fibonacciGenerator();
  
  console.log(fibonacci.next().value); // 1
  console.log(fibonacci.next().value); // 1
  console.log(fibonacci.next().value); // 2
  console.log(fibonacci.next().value); // 3
  console.log(fibonacci.next().value); // 5
  console.log(fibonacci.next().value); // 8
  console.log(fibonacci.next().value); // 13
  


