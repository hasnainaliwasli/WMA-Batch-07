let output = document.getElementById('output')
let original = document.getElementById('original')


// 1.Round a Number

function roundNum() {
    let input = document.getElementById('inputBox');
    let roundedNum = Number(Math.round(input.value)); //Math.round function is used to round a number
    output.innerHTML = `Rounded Number  = ${roundedNum}`
    original.innerHTML = input.value;
    input.value = ''
}


// 2.Ceil a Number

function ceil() {

    let input = document.getElementById('inputBox');
    let ceiledNum = Number(Math.ceil(input.value)); //Math.ceil function is used to Ceil a number
    output.innerHTML = `Ceiled Number  = ${ceiledNum}`
    original.innerHTML = input.value;
    input.value = ''

}

// 3.Floor a Number

function floor() {

    let input = document.getElementById('inputBox');
    let floredNum = Number(Math.floor(input.value)); //Math.floor function is used to Floor a number
    output.innerHTML = `Flored Number  = ${floredNum}`
    original.innerHTML = input.value;
    input.value = ''
}


// 4.Generate a random Number
function randomNum() {
    let randomNum = Math.random(); //Math.random function is used to generate a random number
    output.innerHTML = `Random Number  = ${randomNum}`
    original.innerHTML = 'Generate Random Number';
    input.value = ''
}


// 5.Throw a Dice
function dice() {
    let randomNum = Number(Math.round(Math.random() * 5 + 1)); //Math.random function is used to generate a random number
    output.innerHTML = `You Got  = ${randomNum}`
    original.innerHTML = 'Roll the Dice';
    input.value = ''
}


// 6.Generate a Strong Password
function strongPass() {
    let length = document.getElementById('inputBox')
    var password = generatePassword(length.value);
    function generatePassword(length) {
        let charSet = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890~!@#$%^&*()_+=-[]\|}{;:,./?><"
        let password = "";
        for (i = 0; i < length; i++) {
            let index = Math.floor(Math.random() * charSet.length)
            password += charSet[index]
        }
        return password
    }
    console.log(password);
    output.innerHTML = password;
    original.innerHTML = 'Generate Random Number';
}


// 7.Converting Strings
function convertString() {

    let input = document.getElementById('inputBox');
    let convertedNum = parseInt(input.value);
    let convertedNum2 = Number(input.value); //This method also used to convert the String to Number
    output.innerHTML = ` Number  = ${convertedNum}`
    original.innerHTML = `String =  ${input.value}`;
    input.value = ''

}


// 8.Controll the Lenght
function controlLength() {

    let input = Number(document.getElementById('inputBox').value)
    let length = prompt("Enter the Length: ");
    output.innerHTML = `Fixed to ${length} = ${input.toFixed(length)}`
    original.innerHTML = `Original Number =  ${input}`;
}


// 9.Calculate the GST
function gst() {
    let price = prompt('Enter the Price: ')
    let gstRate = prompt('Enter the gstRate: ')
    function gst(price, gstRate) {
        let gstTax = (price * gstRate) / 100
        return gstTax;
    }
    let calculatedGst = gst(price, gstRate)
    output.innerHTML = calculatedGst
}