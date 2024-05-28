let url = "https://jsonplaceholder.typicode.com/users"

let names = []
let email = []
let userName = []
let allUser = []

function fethUsers() {

    let tableBody = document.querySelector('#fullTable tbody')
    let row = document.createElement('tr')

    fetch(url)
        .then(res => res.json())
        .then(res => {
            
            res.forEach(item => {
                // console.log(item);              
                for (let key in item) {
                    let cell = document.createElement('td');
                    cell.textContent = item[key];
                    row.appendChild(cell);

                }

                tableBody.appendChild(row)
            });


        })
        .catch("Error Occured")
}