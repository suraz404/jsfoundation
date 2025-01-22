function* numberGenerator(){
   yield 1 //yield is a generator
   yield 2
   yield 3

}
let gen=numberGenerator();
console.log(gen.next().value);//1 //next()is a iterator
console.log(gen.next().value);//2
console.log(gen.next().value);//3



