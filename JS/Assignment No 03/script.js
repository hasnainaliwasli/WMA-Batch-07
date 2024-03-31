let cities = ['Faisalabad', 'Lahore', 'Karachi', 'Islamabad', 'Burewala', 'Sheikhupura', 'Kashmir']

// 1. Simple Alert
document.getElementById("alert").onclick = () => {
    alert("This is a Simple Alert")
}

// 2.Print my name

document.getElementById("name").onclick = () => {
    let input = document.getElementById("input").value
    if (input == '') {
        alert("Please Enter your name in Input Field")
    }
    else {
        document.getElementById("output").innerHTML = input;
        document.getElementById("input").value = '';
    }

}

// 3.Add Your City in the List


document.getElementById("addCity").onclick = () => {
    let input = document.getElementById("input").value
    if (!input) {
        alert("Please Write the City name in the Input Section!!!!")
        return
    }
    else {
        cities.push(input);
        alert(`${input} is Added in the List of Cities`)
        document.getElementById("input").value = "";
    }
}


// 4.Delete Your City from the List

document.getElementById("dellCity").onclick = () => {

    if (cities == "") {
        document.getElementById("output").innerHTML = "";
        alert("All Cities are Deleted")
        return
    }
    else {
        document.getElementById("output").innerHTML = "";
        cities.pop();
        alert("Your Last City is Deleted")
    }



}


// 5.Print All Cities

document.getElementById("printCities").onclick = () => {
    if (cities == '') {
        alert("There is no city in the List!!!!!")
        return;
    }
    else {
        document.getElementById("output").innerHTML = "";

        for (i = 0; i < cities.length; i++) {
            document.getElementById("output").innerHTML += i + 1 + ")" + cities[i] + "<br>"
        }
    }

}


// Print Table

document.getElementById("genTable").onclick = () => {

    let tableNumber = +prompt("Enter Number to print Table:")
    let upto = +prompt("How much upto Values you want to print:")

    document.getElementById("input").value = ''

    for (i = 1; i <= upto; i++) {
        document.getElementById("output").innerHTML += i + " * " + tableNumber + " = " + i * tableNumber + "<br>";
    }


}


// Output Clear Button 

document.getElementById("clrBtn").onclick = function () {
    document.getElementById("output").innerHTML = ""
}


// Input Clear 
document.getElementById("inputClr").onclick = function () {
    document.getElementById("input").value = ""
}
