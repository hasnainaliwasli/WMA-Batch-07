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
let curentDate = new Date().getFullYear()
document.getElementById('curentDate').innerHTML = curentDate;

// for getting elements
function getElement(id){
    return document.getElementById(id)
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




