// // // class Employee{
// // //     static company = "FANG"
// // //     constructor(name,id){
// // //         this.name = name
// // //         this.id = id
// // //     }

// // //     static set_emp_info(){
// // //         Employee.company = "MANG"
// // //     }

// // //     set_emp_name(new_name){
// // //         this.name = new_name 
// // //     }

// // //     get_emp_info(){
// // //         return `Hi, this is ${this.name}. i work in ${Employee.company}, my id is ${this.id}`
// // //     }
// // // }

// // // let emp1 = new Employee("teja","007")
// // // let emp2 = new Employee("harsha","009")

// // // console.log(emp1.get_emp_info());
// // // emp1.set_emp_name("roy")
// // // console.log(emp1.get_emp_info());


// // class Parent{
// //     constructor(name){
// //         this.name = name
// //     }

// //     getParentName(){
// //         return `parent name is ${this.name}`
// //     }
// // }

// // class Child extends Parent{
// //     constructor(name,lastname){
// //         super(name)
// //         this.lastname = lastname
// //     }

// //     getChildName(){
// //         return `child full name is ${this.name} ${this.lastname}`
// //     }
// // }

// // let c1 = new Child('maharajulu', 'kalyan')

// // console.log(c1.getChildName());
// // console.log(c1.getParentName());


// class ATM {
//     #balance = 5000
//     #prevpin = 4212
//     #minimum = 1000

//     addAmount(amount, pin) {
//         if (this.#verify(pin)) {
//             this.#balance += amount
//             console.log("availble balance: ", this.#balance)
//         }
//         else {
//             console.log("invalid pin")
//         }
//     }

//     getAmount(amount, pin) {
//         if (this.#verify(pin)) {
//             if (this.#balance - amount >= this.#minimum) {
//                 this.#balance -= amount
//                 console.log("withdraw success. available balance: ", this.#balance);
//             }
//             else {
//                 console.log("insufficient balance. available balance: ", this.#balance)
//             }
//         }
//         else {
//             console.log("invalid pin");
//         }
//     }

//     #verify(pin) {
//         return pin == this.#prevpin
//     }

//     updatePin(oldPin, newPin) {
//         if (oldPin == this.#prevpin) {
//             this.#prevpin = newPin
//             console.log("pin change successful");
//         }
//         else {
//             console.log("invalid previous pin");
//         }
//     }
// }

// let user1 = new ATM
// // user1.getAmount(2000, 4212)
// // user1.addAmount(20000, 4212)

// user1.updatePin(4213,1020)


// this keyword refers to object
"use strict"

let person = {
    name:"sudheer",
    age:18,
    fun:function(){
        return this
    }
}

console.log(person.fun());

console.log(this);

let age = 20
console.log(age);
