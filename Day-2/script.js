tweet = prompt("write your tweet: ")
tweet = tweet.slice(0,140)
alert(tweet)

user_name = "kalYAn"
new_name = user_name.slice(0,1).toUpperCase() + user_name.slice(1,user_name.length).toLowerCase()
alert("Hello "+new_name)

// odd or even
num = prompt("enter number: ")
if (num/2==0){
    console.log("even number")
}
else{
    console.log("odd number")
}

//leap year

year = prompt("enter year to check leap year: ")

if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            console.log("Leap year")
        }
        else {
            console.log("Not Leap year")
        }
    }
    else {
        console.log("Leap year")
    }
}
else {
    console.log("Not Leap year")
}