const person0 ={
    name:"Suraz",
    greet(){
        console.log(`hi, i am ${this.name}`)
    }
}
person0.greet(); //hi i am suraz

const greetFunction=person0.greet;
greetFunction("surazzz") //hi , ia m undefined

const bind = person0.greet.bind({name:"surazz"})
bind();
  //hi i am surazz

//bind,call and applyy

//call

const person={
    fullname:function(){
        return this.firstName + " " + this.lastName;
    }
}
const person1={
    firstName:"rahul",
    lastName:"roy",
}
const person2={
    firstName:"John",
    lastName:"Roy"
}

//call helps to used one object method belongling to another
console.log(person.fullname.call(person1))

//apply is same as call()