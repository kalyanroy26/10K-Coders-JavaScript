// let no_primes = 50
// let num = 1
// let prime_count = 0
// while (true){
//     let count = 0
//     num++
//     for (let i =2;i<num;i++){
//         if (num%i==0){
//             count++
//             break
//         }
//     }

//     if (count===0){
//         console.log(num)
//         prime_count++
//     }

//     if (no_primes == prime_count){
//         break
//     }
// }


function lifeInWeeks(age){
    let remaining_age = 90-age

    let days = remaining_age*365
    let weeks = remaining_age*52
    let months = remaining_age*12
    
    console.log(`You have ${days} days, ${weeks} weeks, and ${months} months left. `)
}

lifeInWeeks(23)



let num = Math.floor(Math.random()*6)+1
console.log(num)

function bmiCalculator(height, weight){
    let bmi = weight/height**2
    bmi = Math.round(bmi)

    if (bmi<18.5){
        console.log(`Your BMI is ${bmi}, so you are underweight.`)
    }
    else if (bmi>=18.5 && bmi<=24.9){
        console.log(`Your BMI is ${bmi}, so you are normal weight.`)
    }
    else{
        console.log(`Your BMI is ${bmi}, so you are overweight.`)
    }
}

bmiCalculator(1.75,85)

const guestList = ["kal","roy","naveen","myra","nila","ryan"];
let guest = "roy"

if (guestList.includes(guest)){
    console.log("welcome", guest)
}
else{
    console.log("sorry next time")
}


for (let i=1;i<=100;i++){
    if (i%3==0 && i%5==0){
        console.log("FizzBuzz")
    }
    else if(i%3==0){
        console.log("Fizz")
    }
    else if(i%5==0){
        console.log("Buzz")
    }
    else{
        console.log(i)
    }
}

