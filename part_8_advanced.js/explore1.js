function sayHello(){
    console.log("I would like to say Hello")
}

setTimeout(() => { //it is just like a network calling,fetch api's etc that takeds time to run
    sayHello()
}, 2000);