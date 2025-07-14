// const url = "https://dummyjson.com/users"
// function getUsers(){
//     fetch(url)
//     .then((res)=>res.json())
//     .then((data)=>{
//         console.log(data.users);
//     })
//     .catch(err=>console.log("Error: ",err.message))
// }


// getUsers()

// let p1 = new Promise((resolve, reject)=>{
//     isDataSent = true
//     if (isDataSent){
//         resolve("data is sent")
//     }
//     else{
//         reject("something is wrong")
//     }
// })

// p1.then((res)=>console.log(res))
// .catch(err=>console.log("error: ", err))


// let p2 = new Promise((response, reject)=>{
//     num = 5
//     if(num%2===0){
//         response("Even Number")
//     }
//     else{
//         reject("Odd Number")
//     }
// })

// p2.then((res)=>console.log(res))
// .catch(err=>console.log("error: ",err))





// question

// let companyDetails = [
//     {
//         companyCode:"abc123",
//         empIds:[101,102,103]
//     },
//     {
//         companyCode:"xyz123",
//         empIds:[201,202,203]
//     },
//     {
//         companyCode:"pqr123",
//         empIds:[301,302,303]
//     }
// ]

// let code = "xyz123"
// let id = 203

// let p1 = new Promise((resolve, reject)=>{
//     let companyFound = false
//     let userFound = false
//     for(const item of companyDetails){
//         if(item.companyCode === code){
//             companyFound = true
//         }

//         if (item.empIds.find(empID=>empID==id)){
//             userFound = true
//         }
//     }
//     if(companyFound){
//         if (userFound){
//             resolve("Employee found")
//         }
//         else{
//             reject("user not found")
//         }
//     }
//     else{
//         reject("company not found")
//     }
// })


// p1.then((res)=>console.log(res))
// .catch(err=>console.log(err))


// login question

const userData = [
    {
        username: "kalyan",
        email: "kalyan123@gmail.com",
        password: "secret@123"
    },
    {
        username: "harsha",
        email: "harsha123@gmail.com",
        password: "secret@456"
    },
    {
        username: "shiva",
        email: "shiva123@gmail.com",
        password: "secret@456"
    }
]

let email = "harsha123@gmail.com"
let pass = "secret@456"

let p1 = new Promise((resolve, reject) => {
    let userFound = false
    let emailFound = false
    for (const user of userData) {
        if (user.email === email) {
            emailFound = true
            if (user.password === pass) {
                userFound = true
            }
        }
    }

    if (emailFound) {
        if (userFound) {
            resolve("user logged in")
        }
        else {
            reject("password is not valid")
        }
    }
    else {
        reject("email is  not valid")
    }
})

p1.then(res => console.log(res))
    .catch(err => console.log(err))