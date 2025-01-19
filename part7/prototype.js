let computer ={CPU:12}
let lenevo ={
    screen:"HD",
    __proto__:computer, //lenevo { CPU: 12 }

}
let tomHardware={}

console.log(`lenevo`,lenevo.__proto__);//dunderr



let genericCar ={tyres:4}
let tesla ={
   driver:"AI",

}
Object.setPrototypeOf(tesla,genericCar);

console.log(`tesla`,tesla)//tesla { driver: 'AI' }
console.log(`tesla`,genericCar)//tesla { tyres:4 }
console.log(`tesla`,Object.getPrototypeOf(tesla))//tesla {tyres:4  }
