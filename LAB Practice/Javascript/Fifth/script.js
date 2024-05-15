const inputfield = id => document.getElementById(id).value
const randomId = () => Math.random().toString(36).slice(2)

function age() {
    let today = new Date()
    let datebirth = new Date(inputfield('dob'));
    let age = today - datebirth;
    // let ageYears = Math.floor(age / (1000 * 60 * 60 * 24 * 365))
    let agedays = Math.floor(age / (1000 * 60 * 60 * 24))

    // return ageYears;
    return agedays + " Days";
    // age to days
}

const fullName = () => inputfield('firstname') + ' ' + inputfield('lastname')

let allUsers = []

function abc() {
    event.preventDefault()

    const userNumber = () => allUsers.length + 1
    const Users = {
        numb: userNumber(),
        fullName: fullName(),
        email: inputfield('email'),
        age: age(),
        dob: inputfield('dob'),
        randomId: randomId()
    }

    allUsers.push(Users)

    // console.log(`${ageYears} Years ${agedays} Days`);
}



// Add Output Data in the Table
function allUsersBtn() {
    console.log(allUsers);

    let tableBody = document.querySelector('#fullTable tbody')
    allUsers.forEach(item => {
        let row = document.createElement('tr')

        for (let key in item) {
            let cell = document.createElement('td');
            cell.textContent = item[key];
            row.appendChild(cell);

        }

        tableBody.appendChild(row)
    })

}