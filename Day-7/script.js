// factorial 

function factorial(n){
    if (n==1){
        return 1
    }
    
    return n*factorial(n-1)
}

console.log(factorial(5))

// function to check prime

function isPrime(n){
    count = 0
    for(let i=2;i<n;i++){
        if (n%2==0){
            count++
            break
        }
    }
    if (count==0){
        return `${n} is prime number`
    }

    return 'not a prime'
}

console.log(isPrime(8))

//fibbonacci series

function generateFibonacci(n){
    let list = []
    if (n==1){
        return list = [0]
    }
    else if(n==2){
        return list = [0,1]
    }
    else{
        list = [0,1]
        for(let i=2;i<n;i++){
            list.push(list[list.length-2]+list[list.length-1])
        }
    }

    return list
}
console.log(generateFibonacci(10));

// square -arrow
let square = (n)=>{return n*n}

console.log(square(5));

//double array in arrow
let arrDouble = (list)=>{
    newList = []
    for (const element of list) {
        newList.push(element**2)
    }
    return newList
}

console.log(arrDouble([2,5,7,9,6,4]));

//Anonymous function

let sort = function(list){
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list.length; j++) {
            if(list[i]<list[j]){
                let temp = list[i]
                list[i] = list[j]
                list[j] = temp
            }
        }
    }
    return list
}
console.log(sort([3,1,2,7,5,9]))


//IIFE function
(function() {
  console.log("This is an IIFE");
})();