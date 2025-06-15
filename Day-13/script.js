// // ES6 Concepts
// function checkScope() {
//   if (true) {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//   }
//   console.log(a); // ?
//   console.log(b); // ?
//   console.log(c); // ?
// }
// checkScope();
// console.log(a) // a is not defined


// // arrow function
// square = (num)=> num*num

// console.log(square(5));

// let name = "Kalyan";
// let course = "Full Stack Development";
// let msg = "";

// console.log(`hello ${name}, Welcome to the ${course} course!`);



// // destructuring
// const student = {
//   name: "Kalyan",
//   roll: 42,
//   branch: "CSE"
// };

// const{name,roll,branch}=student

// console.log(name);
// console.log(roll);
// console.log(branch);



// //rest operator :  Get first and second into variables, and rest into another array
// const nums = [10, 20, 30, 40, 50];
// const[first, second, ...list] = nums

// console.log(first);
// console.log(second);
// console.log(list);

// //spread operator
// const fruits1 = ["apple", "banana"];
// const fruits2 = ["orange", "grape"];

// // Create a new array `allFruits` with all items using spread
// const allFruits = [...fruits1,...fruits2]

// console.log(allFruits);


// // rest using function
// function multiply(...nums){
//     return nums.reduce((p,c)=>p*c)
// }

// console.log(multiply(2,4,6));


// // option chaining
// const user = {
//   address: {
//     city: "Hyderabad"
//   }
// };

// console.log(user.address?.city);      // "Hyderabad"
// console.log(user.contact?.phone);     // undefined (no error)
