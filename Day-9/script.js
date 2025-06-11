// // // 1. Find the Second Largest Number

// arr = [2,4,56,8,7,5]
// let max = arr[0]
// let sec_max = arr[0]

// for (let ele of arr){
//     if (ele>max){
//         sec_max = max
//         max = ele
//     }
// }
// console.log(sec_max)

// //2. Sum of Even Digits

// let num = 2346
// let even_sum = 0
// while(num!=0){
//     let last_digit = num%10
    
//     if (last_digit%2==0){
//         even_sum+=last_digit
//     }

//     num = Math.floor(num/10)
// }

// console.log(even_sum)


// // // // 3. Check for Prime Number
//  function isPrime(num){
//     let count = 0
//     for (let i = 2; i < num; i++) {
//         if (num%i==0){
//             count++
//             break
//         }        
//     }

//     if(count==0){
//         return true
//     }

//     return false
//  }

// console.log( isPrime(7))

// // // 4.Reverse a Number

// let num = 1234
// let rev = 0

// while(num!=0){
//     let digit = num%10
//     rev = rev*10+digit

//     num = Math.floor(num/10)
// }
// console.log(rev)

// // // 5.Fibonacci Series

// function fibGenerator(n){
//     let output = []
//     if(n==1){
//         output.push(0)
//     }
//     else if(n==2){
//         output.push(0,1)
//     }
//     else{
//         output = [0,1]
//         for(let i =2;i<n;i++){
//             output.push(output[output.length-2]+output[output.length-1])
//         }
//     }
//     return output
// }

// console.log(fibGenerator(10))

// // // 6.Check Armstrong Number

// let num = 153
// let temp = num
// let temp1 = num
// let len = 0
// let sum = 0

// while(temp!=0){
//     temp = Math.floor(temp/10)
//     len++
// }

// while(temp1!=0){
//     let digit = temp1%10
//     sum = sum + digit**len

//     temp1 = Math.floor(temp1/10)

// }

// if(sum==num){
//     console.log("armstrong");
    
// }

// // // 7.Find Factorial (Loop and Recursion)

// function Factorial(n){
//     if (n==1){
//         return 1
//     }
//     else{
//         return n*Factorial(n-1)
//     }
// }

// console.log(Factorial(5))

// let fact = 1
// let num = 5
// for (let i=1;i<=num;i++){
//     fact=fact*i
// }

// console.log(fact)


// function vowCount(str){
//     let vowels = ['a','e','i','o','u']
//     let count = 0
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])){
//             count++
//         }
//     }
//     return count
// }

// console.log(vowCount("umbrella"));

// // // 9.Find All Palindromes in an Array

// let arr = ['madam','malayalam','tiger','wow','noon','peep']

// function findPal(list){
//     let newlist = []
//     for (let element of list) {
//         let temp = element.split("")
//         if (element == temp.reverse().join("")){
//             newlist.push(element)
//         }
//     }
//     return newlist
// }

// console.log(findPal(arr));


// // // 10.Kaprekar Number

// function Kaprekar(num){
//     let temp = num**2
//     temp = String(temp).split("")
//     let mid = Math.floor(temp.length/2)
//     let x = temp.slice(0,mid).join("")
//     let y = temp.slice(mid,temp.length).join("")
//     console.log(x,y);
    
//     if(num == (+x)+(+y)){
//         return true
//     }

//     return false
// }

// console.log(Kaprekar(45));

// // // 11.Find Intersection of Two Arrays

// let arr = [2,1,5,6,4,63,3,45,7,8]
// let arr2 = [81,10,52,61,45,63,3,55,7]

// function arrInt(list1,list2){
//     let com = []
//     for (const element of list1) {
//         if(list2.includes(element)){
//             com.push(element)
//         }
//     }
//     return com
// }

// console.log(arrInt(arr,arr2));

// // // 12.Find Duplicates in an Array
// let arr = [2,1,5,6,4,6,3,4,7,8]

// function dupList(list){
//     let newList = {}
//     let newArr = []
//     for (const element of list) {
//         let count = 0
//         for (const ele of list) {
//             if (element == ele){
//                 count++
//                 newList[element] = count
//             }
//         }
//     }
//     for (const key in newList) {
//         if (newList[key]>1) {
//             newArr.push(key)            
//         }
//     }
//     return newArr
// }

// console.log(dupList(arr));


