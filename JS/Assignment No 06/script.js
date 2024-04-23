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
    let alphabet = 'qwertyuiopasdfghjklzxcvbnm'
    let capital = 'QWERTYUIOPASDFGHJKLZXCVBNM'
    let randomNum = Math.random(); //Math.random function is used to generate a random number
    output.innerHTML = `Random Number  = ${randomNum}`
    original.innerHTML = 'Generate Random Number';
    input.value = ''

}


// 7.Converting Strings
function convertString() {

    let input = document.getElementById('inputBox');
    let convertedNum = parseInt(input.value);
    let convertedNum2 = Number(input.value);
    output.innerHTML = ` Number  = ${convertedNum}`
    original.innerHTML = input.value;

    console.log("input ", input.value);
    console.log('converted', convertedNum2);
    input.value = ''

}


// 8.Controll the Lenght
function controlLength() {


}


// 9.Calculate the GST
function gst() {


}