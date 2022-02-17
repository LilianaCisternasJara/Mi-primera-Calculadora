

function suma() {
    let x = document.getElementById(x);
    let y = document.getElementById(y);
    let r = document.getElementById(z);
    r = parseFloat(x) + parseFloat(y);
    document.getElementById(z) = r;
}
console.log(suma)
function resta() {
    let x = document.getElementById(x);
    let y = document.getElementById(y);
    let r = document.getElementById(z);
    r = parseFloat(x)-parseFloat(y);
    document.getElementById(z) = r;
}

function multiplicación() {
    let x = document.getElementById(x);
    let y = document.getElementById(y);
    let r = document.getElementById(z);
    r = parseFloat(x) * parseFloat(y);
    document.getElementById(z) = r;
}
function división() {
    let x = document.getElementById(x);
    let y = document.getElementById(y);
    let r = document.getElementById(z);
    r = parseFloat(x) / parseFloat(y);
    document.getElementById(z) = r;
}