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

// Email Validation Function
let Regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function isEmail(email) {
    return Regex.test(email);
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
// Accessing Local Storage
let users = JSON.parse(localStorage.getItem('Users'));
if (!users) {
    users = []
}

// Signup Function start
function register() {
    let signupUserName = getElement('signupUserName').value
    let signupEmail = getElement('signupEmail').value
    let signupPassword = getElement('signupPassword').value
    let UserId = idGenerator();


    if (!signupUserName, !signupEmail, !signupPassword) {
        return Toast("Please Fillup All the Fields", 'error')
    } else {

        if (!isEmail(signupEmail)) {
            return Toast("Please Enter Correct Email", 'error')
        }

        signupUserName = signupUserName.trim()
        signupEmail = signupEmail.trim()
        let user = {
            Name: signupUserName,
            Email: signupEmail,
            Password: signupPassword,
            UserId,

        }

        users.push(user);
        let allUsers = JSON.stringify(users)
        localStorage.setItem('Users', allUsers)
        // console.log(users);
        Toast("Registration Sucessfull", 'success')
        getElement('signupUserName').value = ''
        getElement('signupEmail').value = ''
        getElement('signupPassword').value = ''
        signup_container.classList.add('d-none');
        signin_container.classList.remove('d-none');

    }
}
// Signup Function End


// Login Function start

let loggedinUserID = ''
function Login() {
    let signinEmail = getElement('signinEmail').value
    let signinPassword = getElement('signinPassword').value

    if (!signinEmail, !signinPassword) {
        return Toast('Please Fill out all the Fields', 'error')
    }
    else {

        if (!isEmail(signinEmail)) {
            return Toast("Please Enter Correct Email", 'error')
        }
        else {
            signinPassword = signinPassword.trim()
        }
        let allRegisteredUser = JSON.parse(localStorage.getItem('Users'))

        // For Getting the Name and ID of logged in user
        let filterMethod = allRegisteredUser.filter((user) => {
            return user.Email === signinEmail && user.Password === signinPassword;
        })

        if (filterMethod < 1) {
            Toast("Incorrect Email or Password", 'error')
        } else {
            let loggedinUserName = filterMethod[0].Name
            loggedinUserID = filterMethod[0].UserId
            let userName = getElement('userName')
            let textBeforeUsername = getElement('textBeforeUsername')
            let logout_btn = getElement('logout_btn')
            textBeforeUsername.innerHTML = "Welcome here Dear "
            userName.innerHTML = loggedinUserName;
            logout_btn.classList.remove('d-none')
            signup_container.classList.add('d-none');
            signin_container.classList.add('d-none');
            getElement('signinPassword').value = ''
            getElement('signinEmail').value = '';
            getElement('todo_container').classList.remove('d-none')
            getElement('todo_Table').classList.remove('d-none')
        }
    }
}
// Login Function End


// Logout Button Function
function logout() {
    // signup_container.classList.remove('d-none');
    signin_container.classList.remove('d-none');
    logout_btn.classList.add('d-none')
    textBeforeUsername.innerHTML = " Plaese Login to Show "
    userName.innerHTML = 'UserName';
    getElement('todo_container').classList.add('d-none')
    getElement('todo_Table').classList.add('d-none')
}



////////////////////////////////////////////////////////////////
// TODO ADD Fucntion

// Accessing Local Storage for TODOS
let todos = JSON.parse(localStorage.getItem(loggedinUserID));
if (!Array.isArray(todos)) {
    todos = [];
}

function addTodo() {
    let todoTitle = getElement('todoTitle').value;
    let textArea = getElement('textArea').value;
    let createdAT = curentDate.toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' });
    let todoID = idGenerator();

    let todo = {
        Title: todoTitle,
        Text: textArea,
        createdAT,
        todoID
    }
    todos.push(todo)
    let allTodos = JSON.stringify(todos)
    localStorage.setItem(loggedinUserID, allTodos)
    console.log(todos);

    console.log();
}