
// 1.Concatenation

document.getElementById("concate").onclick = function () {
    let a = prompt("Enter 1st String: ");
    let b = prompt("Enter 1st String: ");
    let concate = a + b;

    document.getElementById("statement").innerHTML = `1st String: ${a} <br> 2nd String: ${b}`
    document.getElementById("output").innerHTML = `After Concatenation: ${concate}`;
}


// 2.Ask name from User

document.getElementById("name").onclick = function () {
    let name = prompt("Enter you Name: ");
    document.getElementById("statement").innerHTML = "Your Name is in Output";
    document.getElementById("output").innerHTML = name;
}



// 3.Comparison of operator 

document.getElementById("compare").onclick = function () {

    let operator = prompt("Enter any Operator(<,>,=):")
    let chosedOp;

    let result;


    let num = +prompt("Enter Number 1: ")
    let num2 = +prompt("Enter Number 2: ")

    if (operator == ">") {
        chosedOp = `You chose greater Than(>) Operator. <br>and <br>Number 1 = ${num} <br> Number 2 = ${num2} `
        if (num > num2) {
            result = `Number 1 is greater which is ${num}`
        }
        else {
            result = `Number 2 is greater which is ${num2}`
        }
    }
    else if (operator == "<") {
        chosedOp = `You chose Less Than(<) Operator. <br>and <br>Number 1 = ${num} <br> Number 2 = ${num2}`

        if (num < num2) {
            result = `Number 1 is Less which is ${num}`
        }
        else {
            result = `Number 2 is Less which is ${num2}`
        }
    }
    else if (operator == "=") {
        chosedOp = `You chose Equal To(=) Operator. <br>and <br>Number 1 = ${num} <br> Number 2 = ${num2}`

        if (num == num2) {
            result = `Number 1(${num}) is equal to Number 2(${num2})`
        }
        else {
            result = `Number 1(${num}) is not equal to Number 2(${num2})`
        }
    }
    else {
        result = "Please Chose Valid Operator from the given three"
    }

    document.getElementById("statement").innerHTML = chosedOp
    document.getElementById("output").innerHTML = result;
}


// 4.If Else If Statment

document.getElementById("ifElseIf").onclick = function () {

    document.getElementById("statement").innerHTML = 'Ask a Number from user and tell if the number is "greater than 0" ,"less than 0" or "equal to 0"'

    let num = prompt("Enter any Number: ");
    let r;
    if (num > 0) {
        r = "Entered Number is Greater than 0 "
    }
    else if (num < 0) {
        r = "Entered Number is Less than 0"
    }
    else {
        r = "Entered Number is 0"
    }

    document.getElementById("output").innerHTML = r;
}



// 5.Testing Sets of Condtions

document.getElementById("testing").onclick = function () {

    document.getElementById('statement').innerHTML = 'Get Marks of all 5 subjects then calculate Average/percentage show Grades >90% = A+ ,>80 = A, >70% = B+ , >60% = B , >50% = C+ , >40% = C , >33% = d ,<33% = F (You Failed in Complete Semester) '

    let a = +prompt("Math: ")
    let b = +prompt("Computer");
    let c = +prompt("English")
    let d = +prompt("Urdu")
    let e = +prompt("Islamiyat")

    let sum = a + b + c + d + e
    let avg = sum / 5
    let grade;
    if (avg > 90) {
        grade = "A+"
    }
    else if (avg > 80) {
        grade = "A"
    }
    else if (avg > 70) {
        grade = "B"
    }
    else if (avg > 60) {
        grade = "C"
    }
    else if (avg < 33) {
        grade = "F"
    }
    else {
        grade = "D"
    }

    document.getElementById("output").innerHTML = `Your Avrage of marks is ${avg}% and Your Grade is ${grade}`

}


// 6.Nested If Statement 

document.getElementById("ifNested").onclick = function () {

    document.getElementById("statement").innerHTML = `You have two integer variables, x and y. Write a nested if statement to verify if x is equal to 10. If it is, check whether y equals 5. If both conditions are met, print "x is 10 and y is 5". If only the first condition holds true, print "x is 10 but y is not 5". If x is not equal to 10, print "x is not 10".`

    let x = prompt("Enter the vlue of X: ")
    let y = prompt("Enter the value of Y: ")
    let out

    if (x == 10) {
        if (y == 5) {
            out = "x is 10 and y is 5"
        }
        else {
            out = "x is 10 but y is not 5"
        }
    }
    else {
        out = "x is not 10"
    }
    document.getElementById("output").innerHTML = out;

}


// 7.Login

document.getElementById("login").onclick = function () {

    let pass = +prompt("pass = 1762712 /n Enter Password: ")
    let output;
    let attempt;

    if (pass == 1762712) {
        output = "You Logged in Successful"
        attempt = "Login Attempt"
    }
    else {
        output = "You Entered wrong Password"
        attempt = "Login Attempt"
    }

    document.getElementById("statement").innerHTML = attempt;
    document.getElementById("output").innerHTML = output 
}


// Output Clear Buttons

document.getElementById("outputClear").onclick = function(){
    document.getElementById("output").innerHTML = "";
}

// Original Statement Clear Button

document.getElementById("statementClear").onclick = function(){
    document.getElementById("statement").innerHTML = "";
}

