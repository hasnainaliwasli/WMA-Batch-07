document.getElementById('btn').onclick = function () {

    let marks = +prompt("Please Enter your marks : ");
    let grade = ""
    if (marks >= 90) {
        grade = "A+"
    }
    else if (marks >= 80) {
        grade = "A"
    }
    else if (marks >= 70) {
        grade = "B"
    }
    else {
        grade = "Fail"
    }

    alert("you got " + grade)
    document.getElementById('output').innerHTML = `You got ${grade}`

}








// document.getElementById('btn').onclick = function () {
//     let marks = +prompt("Enter your marks: ");
//     let gradeGot = marks >= 90 ? "A+" : marks >= 80 ? "A" : marks >= 70 ? "B" : "Fail";
//     alert("You got " + gradeGot);
//     document.getElementById('output').innerHTML = "You got " + gradeGot;
// }
