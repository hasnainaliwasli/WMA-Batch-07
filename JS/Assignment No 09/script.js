// Toastify Function
function Toast(clr, msg) {
    let color = ''
    switch (clr) {
        case 'error':
            color = '#f44444'
            break;
        case 'success':
            color = 'green'
            break;
    }

    Toastify({
        text: msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            // background: "linear-gradient(to right, #00b09b, #96c93d)",
            background: color
        },
        onClick: function () { } // Callback after click
    }).showToast();
}


