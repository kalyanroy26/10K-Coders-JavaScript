
let handleLoad = ()=>{
    location.assign('http://127.0.0.1:5500/Day-15/register.html')
}


let handleRegister = () => {

    let username = document.getElementById('username').value
    let mobile = document.getElementById('mob').value
    let password = document.getElementById('password').value
    let confirm_password = document.getElementById('confirm_password').value

    let user_data = {
        username: username,
        mobile: mobile,
        password: password
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user_data)

    users = JSON.stringify(users)

    if (password === confirm_password) {
        window.localStorage.setItem("users", users)
        alert("registration success")
        location.assign('http://127.0.0.1:5500/Day-15/login.html')
        
    }
    else {        
        alert("password not matched")
    }
}


let handleLogin = ()=>{
    let user_name = document.getElementById("user_name").value
    let user_password = document.getElementById("login_password").value
    console.log(user_name,user_password);
    
    let users = window.localStorage.getItem('users')
    
    users = JSON.parse(users)

    is_registered = false
    
    users.forEach(user => {
        if (user_name === user.username && user_password===user.password){
            is_registered = true
          }        
    });

    if (is_registered){
        alert("login success")
        location.assign('http://127.0.0.1:5500/Day-15/home.html')
    }
    else{
        alert("credentials not matching")
        location.assign('http://127.0.0.1:5500/Day-15/register.html')
    }
}

