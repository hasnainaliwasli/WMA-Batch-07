

// 1. Convert to LowerCase

function toLower() {
    let inputValue = document.getElementById("input").value
    if (!inputValue) {
        alert("Please Type The Text In Input To Convert to Lowercase")
        document.getElementById("output").innerHTML = ''
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
        document.getElementById("output").innerHTML = ''
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
        document.getElementById("output").innerHTML = ''
    } else {
        document.getElementById('output').innerText = inputValue;
        document.getElementById("output").style.textTransform = "capitalize";
        document.getElementById("input").value = '';

    }
}


// 4.Better Formating

function toBetter() {

    let inputValue = document.getElementById("input").value;
    let lowerValue = inputValue.toLowerCase();

    if (!inputValue) {
        alert("Please type your text in INPUT Field")
        document.getElementById("output").innerHTML = ''
    }
    else {
        document.getElementById("output").innerHTML = lowerValue;
        document.getElementById("output").style.textTransform = "capitalize"
        document.getElementById("input").value = ''
    }
}



// 5.Print All Cities
let allCities = ["FSD", "swl"]
function toPrintAll() {

    if (!allCities[0]) {
        alert("Your list of cities is empty. Please add a city to print.");
        document.getElementById("output").innerHTML = ''
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
        document.getElementById("output").innerHTML = ''
    }
    else {
        allCities.push(inputValue)
        document.getElementById("output").innerHTML = `<span style="font-size:20px;color:green">ADDED!</span> <br><span style="font-size:20px;color:blue">"${inputValue}"</span>  is Added in Cities list. <br><br><button type="button" class="btn btn-danger mb-2 " onclick=toPrintAll() >SEE FULL LIST</button>`
        document.getElementById("input").value = '';
    }
}




// 7.Check Your City in List

function checkCity() {
    let inputValue = document.getElementById("input").value;
    let result = ''
    if (!inputValue) {
        alert("Please type the City Name in input Field to Check City");
        document.getElementById("output").innerHTML = ''
    }
    else if (inputValue) {
        let city = inputValue.toLowerCase();

        for (i = 0; i < allCities.length; i++) {
            let lowerCity = allCities[i].toLowerCase();
            if (city == lowerCity) {
                document.getElementById("output").innerHTML = `<span style="font-size:20px;color:green">FOUND!</span> <br>City<span style="font-size:20px; color:blue">(${city}) </span> Founded in the list. <br><br> <button type="button" class="btn btn-danger mb-2 " onclick=toPrintAll() >SEE FULL LIST</button>`
                document.getElementById("input").value = '';
                return
            }

        }
        document.getElementById("output").innerHTML = `<span style="font-size:20px;color:red">NOT FOUND!</span> <br>City <span style="font-size:20px; color:blue">(${city})</span> Not Found in the list <br><br> <button type="button" class="btn btn-danger mb-2 " onclick=toPrintAll() >SEE FULL LIST</button>`
        document.getElementById("input").value = ''
    }


}

// Original String
function originalString() {
    let originalStr = document.getElementById("originalString").innerText;
    document.getElementById('output').innerText = originalStr
}
// 8.Find the word

function findWord() {

    document.getElementById("output").innerText = ''

    let text = document.getElementById("originalString").innerText;

    let words = text.split(/\s+|[,;.!]+/);

    let findWord = document.getElementById("input").value;
    if (!findWord) {
        alert("Please type the word you want to Find")
        document.getElementById("output").innerHTML = ''
    }
    else {
        findWord = findWord.toLowerCase();
        for (i = 0; i < words.length; i++) {
            words[i] = words[i].toLowerCase();
            if (words[i] == findWord) {
                let indexFound = words.indexOf(words[i]);
                document.getElementById("output").innerHTML = `<span style="font-size:20px;color:green">FOUND!</span> <br>Your word "<span style="font-size:20px;color:blue">${findWord}</span>" is on index <span style="font-size:20px;color:blue">${indexFound}</span>`;
                document.getElementById("input").value = ''
                return
            }
            else {
                document.getElementById("output").innerHTML = `<span style="font-size:20px;color:red">NOT FOUND!</span> <br>Your word "<span style="font-size:20px;color:blue">${findWord}</span>" is not in the Original String. <button type="button" class="btn btn-danger mt-2" style="width:50% ; white-space:nowrap" onclick=originalString() >SEE ORIGINAL STRING</button>`;
                document.getElementById("input").value = ''

            }
        }
    }
}



//  9.Replace this word

function replaceWord() {
    let statement = document.getElementById("originalString").innerText;

    let replaceThis = document.getElementById("input").value;
    if (!replaceThis) {
        alert("Please Enter the word you want to replace in the Input Field")
        document.getElementById("output").innerHTML = ''
        return;
    }
    else {
        let replaceWith = prompt(`Enter word you want to write in place of " ${replaceThis} "`);
        document.getElementById("output").innerText = statement.replaceAll(replaceThis, replaceWith)
    }

    document.getElementById("input").value = '';

}


// Clear Input Button
document.getElementById("firstClrBtn").onclick = () => {
    document.getElementById("input").value = "";
}

//  Clear Output Button
clrOutput = () => {
    document.getElementById("output").innerHTML = "";
}

console.log("Hello");