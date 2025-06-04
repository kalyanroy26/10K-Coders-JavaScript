// javascript array methods

let list = [5,6,7,8,9,10,25,36,14,19]

console.log(list.length) // returns length
console.log(list.join("")) // combines into single string
console.log(list.at(5)) //element at particular index
console.log(list.pop()) //removes last element from array
console.log(list.push(20)) //add element at end of array
console.log(list.concat([1,2,3,4])) //combines new array with existing array
console.log(list.shift(1,2,3,4)) //removes element from begining of array 
console.log(list.unshift(1,2,3,4)) //adds new elements at begining of array 
console.log(list.indexOf(6)); //returns index of element in array


let list2 = [1,[2,[3,[4,[5,[6,[7,[8]]]]]]]]

console.log(list2.flat(Infinity)) //combines all elements from nested array into single array

let fruits = ['apple','kiwi','orange','mango']


console.log(fruits.slice(1,3));

fruits.splice(1,0,"banana")
console.log(fruits) //  add new element at index 1 
fruits.splice(2,1)
console.log(fruits); // removes element at index 2
fruits.splice(3,1,"grapes")
console.log(fruits); // removes element and adds one element

console.log(fruits.includes("kiwi")) // returns true if element exists
