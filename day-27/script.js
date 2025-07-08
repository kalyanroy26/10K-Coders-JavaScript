const url = 'http://localhost:3000/register'

function handleRegister() {
    let inputUsername = document.getElementById("username").value
    let inputPassword = document.getElementById("password").value
    let mobile = document.getElementById("mob").value
    let email = document.getElementById("email").value

    let userDetails = {
        username: inputUsername,
        password: inputPassword,
        mobile: mobile,
        email: email
    }

    if (mobile[0] < 6 || mobile.length !== 10) {
        alert("invalid mobile number")
    }
    else {
        let registeredMobiles = window.localStorage.getItem('regMobiles') || []

        if (registeredMobiles.includes(mobile)) {
            alert("user already exists, pls login")
        }
        else {
            fetch(`${url}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userDetails)
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    console.log("registration success")
                    registeredMobiles = JSON.parse(registeredMobiles)
                    registeredMobiles.push(mobile)
                    
                    window.localStorage.setItem('regMobiles', JSON.stringify(registeredMobiles))
                    // alert("registration success")
                })
                .catch((err) => console.log("Error:", err))



        }
    }



}