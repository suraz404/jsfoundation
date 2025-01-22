function Person(name){
 this.name=name;   
}

Person.prototype.greet =function (){
    console.log(`hello My name is ${this.name}`)
}

let suraz = new Person("Suraz")
suraz.greet();