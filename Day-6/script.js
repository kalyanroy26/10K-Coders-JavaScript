
arr = []
count = 1
function fizzBuzz(n){
    let i = 0
    while (count<n){
        if (count%3==0 && count%5 == 0){
        arr.push("FizzBuzz")
    }
    else if (count%3==0){
        arr.push("Fizz")
    }
    else if (count%5==0){
        arr.push("Buzz")
    }
    else{
        arr.push(count)
    }
    count++
    console.log(arr)
    i++
    }
}
fizzBuzz(100)


