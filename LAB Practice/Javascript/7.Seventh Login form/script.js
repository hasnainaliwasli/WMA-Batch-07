const inputValue = (id) => {
    let value = document.getElementById(id).value
    return value
}

function toast(msg, clr) {
    let color;
    switch (clr) {
        case "error":
            color = "rgba(238,60,96,1) "
            break
        case "success":
            color = " rgba(20,133,23,1) "
            break;

    }


    Toastify({
        text: msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: color,
        },
        onClick: function () { } // Callback after click
    }).showToast();

}

// let users = JSON.parse(localStorage.getItem("users")) || [];
let users = JSON.parse(localStorage.getItem("users")) || []
function signUp() {
    event.preventDefault()
    userName = inputValue("userName").trim()
    email = inputValue("email")
    password = inputValue("password")


    if (!userName || !email || !password) {
        toast("please fill the input fields", "error")
        return
    }

    if (!Array.isArray(users)) {
        users = [];
    }

    let isUserFound = users.find(user => {
        return user.email == email && user.password == password
    })

    // console.log(isUserFound.name);

    if (isUserFound) {
        return toast("User already Exists", "error")
    }
    else {
        toast("Signup Succcesfull", "success")
    }

    let user = {
        userName: userName,
        email: email,
        password: password
    }
    users.push(user)

    let allUsers = JSON.stringify(users)
    localStorage.setItem("users", allUsers)
}

function showUser() {
    event.preventDefault()
    let usersFromLocalStorage = JSON.parse(localStorage.getItem("users"))
    console.log(usersFromLocalStorage);
}

function signIn() {
    event.preventDefault()
    // console.log(users);

    let usersFromLocalStorage = JSON.parse(localStorage.getItem("users"))


    email = inputValue("email")
    password = inputValue("password")
    if (!email || !password) {
        toast("please fill the input fields", "error")
        return
    }

    let isUserFound = usersFromLocalStorage.find(user => {
        return user.email === email && user.password === password
    })

    // console.log(isUserFound.name);

    if (isUserFound) {

        let text = `Login Sucsessful <br> Welcome to Login Page`
        let element = document.createElement("div")
        element.innerHTML = text
        element.style.fontSize = '25px'
        element.style.color = 'red'

        // console.log(element);

        document.querySelector(".bodyContent").innerHTML = ''
        document.querySelector(".bodyContent").appendChild(element)
    }
    else {
        toast("Incorrect Passsword or Email", "error")
    }

}