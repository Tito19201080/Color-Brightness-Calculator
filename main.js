// LUMINENCE CALCULATOR

document.getElementById("calculate").addEventListener("click", bright);

function bright() {
    // Input
    let R = document.getElementById("R").value;
    let G = document.getElementById("G").value;
    let B = document.getElementById("B").value;

    // Process
    let msg = Math.sqrt(0.299 * (R) ** 2 + 0.587 * (G) ** 2 + 0.114 * (B) ** 2);

    // Output
    document.getElementById("output").innerHTML = msg;
}