const url = "http://localhost:3000/register"


function handleRegister() {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    let mobile = document.getElementById("mob").value

    let newUser = {
        username: username,
        password: password,
        mobile: mobile
    }

    console.log(newUser);
    alert("registration done")


    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(newUser)
    })
        .then((resolve) => resolve.json())
        .then((data) => {
            console.log("new user registered")
            console.log(data)
        })
        .catch((err) => console.log("Error:", err))

}


function handleLogin() {
    let inputUsername = document.getElementById("user").value
    let inputPassword = document.getElementById("pass").value

    let registered_users = []
    alert("login success")

    fetch(url)
        .then((resolve) => resolve.json())
        .then((data) => {
            registered_users = [...data]
            console.log(registered_users)
        })
        .catch((err) => console.log("Error:", err))

    setTimeout(() => {
        let user = registered_users.find(user =>
            user.username === inputUsername && user.password === inputPassword
        )

        if (user) {
            console.log("login success")
            console.log(user);
        }
    }, 3000)
}

function updateLogin() {
    let inputUsername = document.getElementById("user").value
    let inputPassword = document.getElementById("pass").value
    let id = 1
    let registered_users = []

    fetch(`${url}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: inputUsername,
            password: inputPassword
        })
    })
        .then((resolve) => resolve.json())
        .then((data) => {
            console.log(data);
            alert("password changed")
            // registered_users = [...data]
            // let user = registered_users.find(user =>
            //     inputUsername == user.username
            // )
            // alert("password changed")
            // console.log(user);

        }
        )
        .catch((err) => { console.log("Error:", err) })

}






