// Toastify Function
function Toast(msg, cond) {
    let color = ''

    switch (cond) {
        case 'success':
            color = 'linear-gradient(23deg, rgba(17,186,15,1) 0%, rgba(6,149,20,1) 66%)'
            break;
        case 'error':
            color = 'linear-gradient(23deg, rgba(228,0,0,0.9724264705882353) 0%, rgba(168,36,0,1) 54%)';
            break;
        default:
            color = 'linear-gradient(to right, #00b09b, #96c93d)'
    }

    Toastify({
        text: msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: color
        },
        onClick: function () { } // Callback after click
    }).showToast();
}

// For set Year in footer
let curentDate = new Date()
document.getElementById('curentDate').innerHTML = curentDate.getFullYear();

// for getting elements
function getElement(id) {
    return document.getElementById(id)
}

// ID Generating
function idGenerator() {
    return Math.random().toString(32).slice(2)
}


// Toogle between both signup and signin
let signupToggle = getElement('signupToogle')
let signinToggle = getElement('signinToogle')
let signup_container = getElement('signup_container')
let signin_container = getElement('signin_container')

// for hiding signin showing signup
signupToggle.addEventListener('click', () => {
    signup_container.classList.remove('d-none');
    signin_container.classList.add('d-none');
})
// for hiding signup showing signin
signinToggle.addEventListener('click', () => {
    signup_container.classList.add('d-none');
    signin_container.classList.remove('d-none');
})

////////////////////////////////////////////////////
// For SignUp
let users = JSON.parse(localStorage.getItem('Users'));
if (!users) {
    users = []
}

function register() {
    let signupUserName = getElement('signupUserName').value
    let signupEmail = getElement('signupEmail').value
    let signupPassword = getElement('signupPassword').value
    let UserId = idGenerator();
    let createdAT = curentDate.toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' });

    if (!signupUserName, !signupEmail, !signupPassword) {
        return Toast("Please Fillup All the Fields", 'error')
    } else {

        let user = {
            signupUserName,
            signupEmail,
            signupPassword,
            UserId,
            createdAT
        }

        users.push(user);
        let allUsers = JSON.stringify(users)
        localStorage.setItem('Users', allUsers)
        console.log(users);
        Toast("Registration Sucessfull", 'success')
        getElement('signupUserName').value = ''
        getElement('signupEmail').value = ''
        getElement('signupPassword').value = ''
        signup_container.classList.add('d-none');
        signin_container.classList.remove('d-none');

    }
}



