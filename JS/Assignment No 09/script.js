

// Toastify Function
function Toast(msg, clr) {
    let color = ''
    switch (clr) {
        case 'error':
            color = '#f44444'
            break;
        case 'success':
            color = 'green'
            break;
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
            // background: "linear-gradient(to right, #00b09b, #96c93d)",
            background: color
        },
        onClick: function () { } // Callback after click
    }).showToast();
}

// Function to get Elements from Document
function getElement(id) {
    return document.getElementById(id)
}


// ALL BUTTONS
const showImage = getElement('show_img')
const show_table = getElement('show_table')
const print_users = getElement('print_users')
const addUser_btn = getElement('addUser_btn')
const clrBtn = getElement('clrBtn')
let box_output = getElement('box_output')



let users = []

addUser_btn.addEventListener('click', () => {
    let firstName = getElement('firstName').value
    let lastName = getElement('lastName').value
    let email = getElement('email').value
    let date = getElement('date').value

    if (!firstName || !lastName || !email || !date) {
        Toast('Please Fill all the output fields', 'error')
        return
    }
    else {

        let ages = () => {
            let nowDatev = new Date()
            let dobb = new Date(date)

            let age = nowDatev.getFullYear() - dobb.getFullYear()
            return age
        }

        let user = {
            firstName,
            lastName,
            email,
            dob: date,
            age: ages()

        }

        users.push(user)
        Toast('User added Successfully', 'success')

    }




})


print_users.addEventListener('click', () => {
    console.log(users);
})

show_table.addEventListener('click', () => {


    if (users.length < 1) {
        Toast('User is not available', 'error');
    }
    else {


        let startTable = "<div class='table-responsive'> <table class='table'>"
        let tableHead = "<thead><tr><th scope='col'>#</th><th scope='col'>First Name</th><th scope='col'>Last Name</th><th scope='col'>Email</th><th scope='col'>Date of Birth</th><th scope='col'>Age</th>"
        let tableBody = '';
        let tableEnd = "</table></div>"


        for (let i = 0; i < users.length; i++) {
            tableBody += '<tr ><th scope="row">' + (i + 1) + '</th><td>' + users[i].firstName + '</td><td>' + users[i].lastName + '</td><td>' + users[i].email + '</td><td>' + users[i].dob + '</td><td>' + users[i].age + '</td></tr><thead>'
        }
        let fullTable = startTable + tableHead + "<tbody>" + tableBody + "</tbody>" + tableEnd

        box_output.innerHTML = fullTable


    }
})


// Clear Button for Table

clrBtn.addEventListener('click', () => {
    box_output.innerHTML = ''
})