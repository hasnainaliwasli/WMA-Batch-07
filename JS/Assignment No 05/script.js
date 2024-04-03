

// 1. Convert to LowerCase

function toLower() {
    let inputValue = document.getElementById("input").value
    if (!inputValue) {
        alert("Please Type The Text In Input To Convert to Lowercase")
    }
    else {
        document.getElementById("output").innerHTML = "";
        let outputValue = inputValue.toLowerCase();
        document.getElementById("output").innerText = outputValue;
        document.getElementById("input").value = '';

    }
}


// 2. Convert to UpperCase

function toUpper() {
    let inputValue = document.getElementById("input").value;
    if (!inputValue) {
        alert("Please Type The Text In Input To Convert to Uppercase")
    }
    else {
        document.getElementById("output").innerHTML = "";
        let outputValue = inputValue.toUpperCase();
        document.getElementById("output").innerHTML = outputValue;
        document.getElementById("input").value = '';

    }
}



// 3.Convert to Capitalization

function toCapital() {
    let inputValue = document.getElementById("input").value;
    if (!inputValue) {
        alert("Please type the text in input to convert to capitalize");
    } else {
        document.getElementById('output').innerText = inputValue;
        document.getElementById("output").style.textTransform = "capitalize";
        document.getElementById("input").value = '';

    }
}


// 4.Better Formating

function toBetter() {

}




// 5.Print All Cities
let allCities = []
function toPrintAll() {
    if (!allCities[0]) {
        alert("Your list of cities is empty. Please add a city to print.");
    } else {
        let output = "";
        for (let i = 0; i < allCities.length; i++) {
            output += `${i + 1}) ${allCities[i]} <br>`;
        }
        document.getElementById("output").innerHTML = output;
    }
}


// 6.Add your city in the list

function addCity() {
    let inputValue = document.getElementById("input").value;
    if (!inputValue) {
        alert("Please type the City Name in input Field to Add City");
    }
    else {
        allCities.push(inputValue)
        document.getElementById("output").innerHTML = `<span style="font-size:20px;color:blue">"${inputValue}"</span>  is Added in Cities list. <br><br><button type="button" class="btn btn-danger mb-2 " onclick=toPrintAll() >SEE FULL LIST</button>`
        document.getElementById("input").value = '';
    }
}




// 7.Check Your City in List

function checkCity() {
    let inputValue = document.getElementById("input").value;
    let result = ''
    if (!inputValue) {
        alert("Please type the City Name in input Field to Check City");
    }
    else if (inputValue) {
        let city = inputValue.toLowerCase();

        for (i = 0; i < allCities.length; i++) {
            let lowerCity = allCities[i].toLowerCase();
            if (city == lowerCity) {
                document.getElementById("output").innerHTML = `City<span style="font-size:20px; color:blue">(${city}) </span> Founded in the list. <br><br> <button type="button" class="btn btn-danger mb-2 " onclick=toPrintAll() >SEE FULL LIST</button>`
                return
            }

        }
        document.getElementById("output").innerHTML = `City(${city}) Not Found in the list`
    }

    console.log(result);

}



// 8.Find the word

function findWord() {

}



//  9.Replace this word

function replaceWord() {
    let statement = document.getElementById("originalString").innerText;

    let replaceThis = document.getElementById("input").value;
    if (!replaceThis) {
        alert("Please insert the word you want to replace")
    }
    else {
        let replaceWith = prompt("Enter word with you want to replace in Input Field: ");
        document.getElementById("output").innerText = statement.replaceAll(replaceThis, replaceWith)
    }

    document.getElementById("input").value = '';

}