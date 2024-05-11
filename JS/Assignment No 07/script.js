// Tostify added
function toast(msg) {
    Toastify({
        text: msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}

// Output Value
function outputValue(output) {
    document.getElementById('output').innerHTML = output
}

// Input Value
function inputValue() {
    let inputBox = document.getElementById('inputBox')
    return Number(inputBox.value)
}

// Original Statement
function original(original) {
    document.getElementById('original').innerHTML = original
}


// 1.Get the name of Today

function today() {

    // There are two methods for this work
    let date = new Date();
    let daysNumber = date.getDay()

    // 1st Method

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satureday']
    let today = days[daysNumber]


    // 2nd Method 

    let todayDay;
    switch (daysNumber) {
        case 0:
            todayDay = 'Sunday'
            break;
        case 1:
            todayDay = 'Monday';
            break;
        case 2:
            todayDay = 'Tuesday';
            break;
        case 3:
            todayDay = 'Wednesday';
            break;
        case 4:
            todayDay = 'Thurseday'
            break;
        case 5:
            todayDay = 'Friday'
            break;
        default:
            todayDay = 'Satureday'
            break;
    }

    // Output

    // outputValue("Today is " + today)
    outputValue("Today is " + todayDay)
}

// 2.Tell the days Passed since I Born

function daysPass() {

    original("Date Format: Month/Date/Year")

    // Today's Date 
    let nowYear = new Date()

    // Date of Birthday
    let inputDate = new Date(inputValue())

    // difference in milisecond
    let passedTimeMilisec = nowYear - inputDate;

    // Mili Second to  Days
    let passedDays = Math.floor(passedTimeMilisec / (1000 * 60 * 60 * 24))
    if (!inputValue()) {
        toast('Please Enter your Birthday Date in Input Field')
    }
    else {
        outputValue(`<span style='color:red ; font-weight:600;font-size:26px'>${passedDays}</span> Days passed since your Birthday`)
    }
}


// 3.When is your next birthday

function nextHBD() {
    original("Date Format: Month/Date/Year");

    let birthdayDate = new Date(inputValue());

    // Check if the input field is empty
    if (!inputValue()) {
        toast('Please Enter your Birthday Date in Input Field');
        return; // Exit the function early
    }

    let today = new Date(); // Get the current date

    // Check if the birthday has already occurred this year
    if (today.getMonth() > birthdayDate.getMonth() || (today.getMonth() === birthdayDate.getMonth() && today.getDate() > birthdayDate.getDate())) {
        // If the birthday has already occurred this year, calculate for the next year
        birthdayDate.setFullYear(today.getFullYear() + 1);
    } else {
        // If the birthday hasn't occurred yet this year, keep it in the current year
        birthdayDate.setFullYear(today.getFullYear());
    }

    // Calculate the time until the next birthday in milliseconds
    let timeUntilNextBD = birthdayDate - today;
    let daysUntilNextBD = Math.ceil(timeUntilNextBD / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

    // Output the result
    console.log("Days until your next birthday:", daysUntilNextBD);
    outputValue(`<span style='color:red; font-weight:600;font-size:26px'>${daysUntilNextBD}</span> Days until your next birthday`);
}


// 4. Time Tell 1

function telltime1() {

    let hours = new Date().getHours()
    let minutes = new Date().getMinutes()
    let second = new Date().getSeconds()
    let time = `<span style='color:red ; font-weight:600 ; font-size:32px'> ${hours} : ${minutes} : ${second} </span>`

    outputValue(time)

}


// 5.Calculate Tax

function tax() {
    let price = inputValue()

    if (!inputValue()) {
        toast('Please Enter price in Input Field')
        return;
    }

    let percentage = prompt('Please Enter Percentage of Tax: ');

    // now we need to convert the Value from percentage to Decimal Value
    let decimal = percentage / 100

    let tax = Math.round(price * decimal)

    original(`Price : ${price} , Tax Ratio : ${percentage}%`)

    outputValue(`Tax on ${price} = ${tax} Rupees`)
}


// 6.Calculate Total 

function total() {
    let price = inputValue()

    if (!inputValue()) {
        toast('Please Enter price in Input Field')
        return;
    }

    let percentage = prompt('Please Enter Percentage of Tax: ');

    // now we need to convert the Value from percentage to Decimal Value
    let decimal = percentage / 100

    let tax = Math.round(price * decimal)
    original(`Price : ${price} , Tax Ratio : ${percentage}%`)

    let total = price + tax;

    outputValue(`Total : ${total} `)
}


// Clear button 

function clr() {
    document.getElementById('inputBox').value= ''
}
function clr() {
    document.getElementById('output').innerHTML= ''
}