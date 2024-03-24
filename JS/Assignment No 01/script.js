
// Alert Name

document.getElementById("alertName").onclick= function(){
    document.getElementById("statement").innerHTML = ""
    alert("Hasnain Ali")
}

// Alert Number

document.getElementById("alertNum").onclick = function(){
    document.getElementById("statement").innerHTML = ""
    alert(786)
}

// Show Variable Name

document.getElementById("varname").onclick = function(){
    let varName;
    document.getElementById("statement").innerText = "Variable Name"
    document.getElementById("output").innerText = `varName `
}

// CamelCase Example

document.getElementById("camelCase").onclick = function(){
    document.getElementById("statement").innerText = "Example of CamelCase"
    document.getElementById("output").innerText = "thisIsCamelCase" 
}


// Sum 2 Numbers
document.getElementById("sum").onclick = function(){
    let a = 5;
    let b= 6;
    let sum = a+b;
    document.getElementById("statement").innerHTML = `a = ${a} <br/> b = ${b} <br/> `
    document.getElementById("output").innerText = `a + b = ${sum}`
}
// Subtract 2 Numbers
document.getElementById("sub").onclick = function(){
    let a = 50;
    let b= 16;
    let sub = a-b;
    document.getElementById("statement").innerHTML = `a = ${a} <br/> b = ${b} <br/> `
    document.getElementById("output").innerText = `a - b = ${sub}`
}
// Multiply 2 Numbers
document.getElementById("mul").onclick = function(){
    let a = 5;
    let b= 6;
    let mul = a*b;
    document.getElementById("statement").innerHTML = `a = ${a} <br/> b = ${b} <br/> `
    document.getElementById("output").innerText = `a * b = ${mul}`
}
// Divide 2 Numbers
document.getElementById("div").onclick = function(){
    let a = 50;
    let b= 10;
    let c = 13;
    let result = a/b * c;
    document.getElementById("statement").innerHTML = `a = ${a} <br/> b = ${b} <br/> c = ${c} `
    document.getElementById("output").innerText = `a / b * c = ${result}`
}


// clear Statement
document.getElementById("clearStatement").onclick = function(){
    document.getElementById("statement").innerText = ""
}

// clear Statement
document.getElementById("clearOutput").onclick = function(){
    document.getElementById("output").innerText = ""
}