function sum(...nums){
    return nums.reduce((a,b)=>a+b)
}

console.log(sum(1,2,3,4,5,6));


function calculate(a,b, operation){
    return operation(a,b)
}

let result = calculate(5,4, (a,b)=>a+b)
console.log(result);


function printMessage(name){
    setTimeout(() => {
        console.log(`hi ${name}`);
    }, 5000);
}

printMessage("kalyan")