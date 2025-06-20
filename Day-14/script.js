// // day-2 of ES6 Concepts - array methods

// // 1. forEach() – Loop through array elements

// const nums = [1, 2, 3, 4]

// nums.forEach((ele)=>{
//     console.log(ele**2);    
// })

// //  2. map() – Create a new array by transforming elements

// const words = ["roy", "harsha", "kalyan", "teja", "naveen"]

// const newList = words.map((word)=>{
//     return word.toUpperCase()
// })

// console.log(newList)

// //  3. filter() – Filter elements based on condition

// const nums = [5, 12, 9, 18, 20, 44 , 56, 69, 36]

// const newList = nums.filter((num)=>{
//     return num%3==0
// })

// console.log(newList);


// // 4. reduce() – Reduce to a single value

// const nums = [4,3,5,6,7]

// const total = nums.reduce((val,num)=>{
//     return val*num
// },1)

// console.log(total);

// // 5. find() – Get first matching element

// const nums = [7,5,6,4,9,6,14,15,24]

// const first = nums.find((num)=>{
//     return num%2==0
// })

// console.log(first);

// // 6. some() – Check if any element satisfies the condition returns true or false

// const  greets = ["hello","hi","hola"]

// console.log(greets.some((word)=>{return word==="hola"}));


// // 7. every() – Check if all elements satisfy the condition

// const  greets = ["hello","hi","hola"]

// console.log(greets.every((word)=>{
//     return word.startsWith('h')
// }));

// // 8. sort() – Sorts array (default is string-based)


// const nums = [7,5,6,4,9,6,14,15,24]

// console.log(nums.sort((a,b)=>b-a));




