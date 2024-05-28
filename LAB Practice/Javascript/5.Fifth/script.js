const inputfield = id => document.getElementById(id).value
const randomId = () => Math.random().toString(36).slice(2)

function age() {
    let today = new Date()
    let datebirth = new Date(inputfield('dob'));

    // Total age in milisecond
    let age = today - datebirth;

    // Complete Age in Years
    let Years = Math.floor(age / (1000 * 60 * 60 * 24 * 365))

    // Complete Age in Days
    let agedays = Math.floor(age / (1000 * 60 * 60 * 24))

    // Days left after subtracting Years
    let daysOfYears = Years * 365;
    let days = agedays - daysOfYears;

    // Months Left after Subtracting Years
    let months = Math.floor(days / 30)

    // Days left after all calculation
    let daysToSubtract = months * 30;
    let daysLeft = days - daysToSubtract;

    let completeAge = Years + " Years, " + months + " Months, " + daysLeft + " Days"
    return completeAge;
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