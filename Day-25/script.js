// GET
// fetch("http://localhost:3000/users")
// .then(data=>data.json())
// .then(data=>console.log(data))
// .catch(err=>console.log("error:",err))

let products = [
    {
        id:5,
        name:"Atomic Habits",
        price:500
    },

    {
        id:6,
        name:"choti choti batein",
        price:200
    },

    {
        id:7,
        name:"ikigai hard cover",
        price:499
    },

    {
        id:8,
        name:"dairy 2025",
        price:399
    },

    {
        id:9,
        name:"Attitude by shiv khera",
        price:199
    },

    {
        id:10,
        name:"the pschology of money",
        price:699
    }
]


// POST
products.forEach(product => {
    fetch('http://localhost:3000/products',{
        method:"POST",
        headers:{"Content-Type":"Application/json"},
        body:JSON.stringify(product)
    })
    .then(resolve=>resolve.json())
    .then((data)=>{
        console.log(data)
        console.log("uploaded to server")
    })
    .catch((err)=>console.log("Error: ",err))

});

// PUT
// fetch("http://localhost:3000/users/1",{
//     method:"PUT",
//     headers:{"Content-Type":"Application/json"},
//     body:JSON.stringify({
//         id:1,
//         username:"kalyan",
//         city:"Hyderabad"
//     })
// })


// // PATCH
// fetch("http://localhost:3000/users/2",{
//     method: "PATCH",
//     headers: {"Content-Type":"Application/json"},
//     body:JSON.stringify({
//         id:"2",
//         username:"Harsha",
//         mob:9848005521
//     })
// })
// .then(data=>data.json())
// .then(data=>console.log(data))
// .catch(err=>console.log("error: ",err))