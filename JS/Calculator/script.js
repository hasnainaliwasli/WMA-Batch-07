let string = "";
let buttons = document.querySelectorAll('.btn');

Array.from(buttons).forEach((button) =>{

    button.addEventListener("click", (e) => {
        console.log(e.target.innerHTML);
        if (e.target.innerHTML == "=") {
            if (['+', '-', '*', '/' ,'.'].includes(string.slice(-1))) {
                alert('An arithmetic operator cannot be at the end of the expression');
                return;
            }
            string = eval(string);
            document.getElementById("inputValue").value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = ''
            document.getElementById("inputValue").value = string
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.slice(0, string.length - 1)
            document.getElementById("inputValue").value = string
        }
        else if (['+', '-', '*', '/' ,'.'].includes(e.target.innerHTML) && ['+', '-', '*', '/','.'].includes(string.slice(-1))) {
            alert('Two arithmetic operators cannot be placed together');
        }
        else {
            string = string + e.target.innerHTML;
            document.getElementById("inputValue").value = string
        }
    })
})


