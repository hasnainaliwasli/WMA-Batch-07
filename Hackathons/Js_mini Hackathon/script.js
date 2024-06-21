// Toastify for result

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

// GetInput Values
function inputValues(id) {
    return document.getElementById(id).value;
}

// Registration Section

function user_id() {
    return Math.random().toString(36).slice(2)
}

let users = JSON.parse(localStorage.getItem("users")) || [];

function register() {
    event.preventDefault()
    email = inputValues("email_signup")
    password = inputValues("password_signup")


    if (!email || !password) {
        toast("Please fill the input fields", "error")
        return
    }

    if (!Array.isArray(users)) {
        users = [];
    }

    let isUserFound = users.find(user => {
        return user.email == email
    })

    // console.log(isUserFound.name);

    if (isUserFound) {
        return toast("User already Exists", "error")
    }
    else {
        toast("Signup Succcesfull", "success")
    }

    let user = {
        email: email,
        password: password,
        uid: user_id(),
        status: "Active",
        createdAt: new Date()
    }
    users.push(user)

    let allUsers = JSON.stringify(users)
    localStorage.setItem("users", allUsers)
}


// Sigin Section

function signIn() {
    event.preventDefault()
    // console.log(users);

    let usersFromLocalStorage = JSON.parse(localStorage.getItem("users"))


    email = inputValues("email_signin")
    password = inputValues("password_signin")
    if (!email || !password) {
        toast("please fill the input fields", "error")
        return
    }

    let isUserFound = usersFromLocalStorage.find(user => {
        return user.email === email && user.password === password
    })

    // console.log(isUserFound.name);

    if (isUserFound) {

        document.getElementById('todo_form').style.display = 'block'
        document.getElementById('signIn_form').style.display = 'none'
    }
    else {
        toast("Incorrect Passsword or Email", "error")
    }
}


// Form Changing

document.getElementById("signUpForm_btn").addEventListener('click', () => {
    document.getElementById('signUp_form').style.display = 'block'
    document.getElementById('signIn_form').style.display = 'none'
})

document.getElementById("signInForm_btn").addEventListener('click', () => {
    document.getElementById('signUp_form').style.display = 'none'
    document.getElementById('signIn_form').style.display = 'block'
})

// TODO ID
function todo_id() {
    return Math.random().toString(36).slice(2)
}


// TODO Management
let todos = JSON.parse(localStorage.getItem("todos")) || [];
// Adding Todo
function todo_add() {
    event.preventDefault()

    title = inputValues("todo_title")
    description = inputValues("todo_description")
    date = inputValues("todo_date")


    if (!title || !description || !date) {
        toast("Please fill the input fields", "error")
        return
    }

    if (!Array.isArray(users)) {
        users = [];
    }

    let todo = {
        title: title,
        description: description,
        date: date,
        id: todo_id(),
        status: 'InComplete',
        createdAt: new Date(),
        
    }
    todos.push(todo)

    let allUsers = JSON.stringify(todos)
    localStorage.setItem("Todos", allUsers)
}

// Show Todos List in Table
function todo_view() {

    event.preventDefault()

    let todosFromLocalStorage = JSON.parse(localStorage.getItem("Todos"))
    let usersFromLocalStorage = JSON.parse(localStorage.getItem("users"))

    console.log(todosFromLocalStorage);


    // let isUserFound = todosFromLocalStorage.filter(user => {
    //     return user.uid === getId
    // })

    // if (isUserFound) {



    const container = document.getElementById('table-container');

    const table = document.createElement('table');

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headers = ['Title', 'Description', 'Date', 'ID', 'Status', 'CreatedAt', 'Edit'];
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.appendChild(document.createTextNode(headerText));
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');

    todosFromLocalStorage.forEach(item => {
        const row = document.createElement('tr');

        Object.values(item).forEach(text => {
            const cell = document.createElement('td');
            cell.appendChild(document.createTextNode(text));
            row.appendChild(cell);
        });

        // Create the Edit button
        const editCell = document.createElement('td');
        const editButton = document.createElement('button');
        editButton.textContent = ' Edit Button';
        editButton.addEventListener('click', () => {

        });
        editCell.appendChild(editButton);
        row.appendChild(editCell);

        tbody.appendChild(row);
    });

    table.appendChild(tbody);

    container.appendChild(table);

}

