

let loginBtn = document.getElementById('btnLogin')
let regBtn = document.getElementById('btnReg')

let regInput = document.getElementById('register')
let loginInput = document.getElementById('login')
let output = document.getElementById('output')
let users = [];

function toast(msg) {

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
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () { } // Callback after click
    }).showToast();

}
// Register User 

regBtn.addEventListener('click', function () {

    if (regInput.value == '') {
        toast('Input Field cannot be empty')
    }
    else {
        users.push(regInput.value)
        toast('User Registered Succesfully')
    }
})


// Login Attempt

loginBtn.addEventListener('click', function () {



    if (loginInput.value == '') {
        toast('Input Field cannot be empty')
    }
    else {

        if (users.includes(loginInput.value)) {
            output.innerHTML = loginInput.value

            toast('Login Succesfull')

            regInput.style.display = 'none'
            loginInput.style.display = 'none'
            regBtn.style.display = 'none'
            loginBtn.style.display = 'none'
        }
        else {
            toast('User is not Registered')
        }
    }

})

