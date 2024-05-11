function output(printIt) {
    document.getElementById('output').innerHTML = printIt
}

// 1.If Else Statement
function ifElse() {
    let dayNum = new Date().getDay();
    let day = ''
    if (dayNum === 0) {
        day = 'Sunday'
    }
    else if (dayNum === 1) {
        day = 'Monday'
    }
    else if (dayNum === 2) {
        day = 'Tuesday'
    }
    else if (dayNum === 3) {
        day = 'Wednesday'
    }
    else if (dayNum === 4) {
        day = 'Thurseday'
    }
    else if (dayNum === 5) {
        day = 'Friday'
    }
    else if (dayNum === 6) {
        day = 'Satureday'
    }

    output(`Today is <span style="color:red ; font-size:19px;font-weight:600">${day}</span>`)
}


// 2.Switch Statement
function swich() {
    let dayNumber = new Date().getDay();
    let day = ''

    switch (dayNumber) {
        case 0:
            day = 'Sunday'
            break;
        case 1:
            day = 'Monday'
            break;
        case 2:
            day = 'Tuesday'
            break;
        case 3:
            day = 'Wednesday'
            break;
        case 4:
            day = 'Thurseday'
            break
        case 5:
            day = 'Friday'
            break;
        case 6:
            day = 'Satureday'
            break;
    }
    output(`Today is <span style="color:red ; font-size:19px;font-weight:600">${day}</span>`)
}


// 3.Keep Asking Name
function nameFunc() {
    let enteredName = false;
    while (!enteredName) {
        prompt("Please Enter your name: ")
    }
}




// Clear button
function clr() {
    document.getElementById('output').innerHTML = ''
}