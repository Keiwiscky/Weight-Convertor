const input =  document.getElementById("input");
const grams = document.getElementById("gramOutput");
const kilograms = document.getElementById("kilogramOutput");
const ounces = document.getElementById("ouncesOutput");
const tons = document.getElementById("tonsOutput");
const stones = document.getElementById("stonesOutput");
const output = document.getElementById("output");
output.style.visibility = "hidden";

input.addEventListener("input",function testVr01(e) {
    output.style.visibility = "visible";
    let lbs = e.target.value;
    grams.innerHTML = (lbs * 453.59237) + "g";
    grams.style.color = "#2C5364";

    kilograms.innerHTML = (lbs * 0.45359237) + "kg";
    kilograms.style.color = "#2C5364";

    ounces.innerHTML = (lbs * 16) + "oz";
    ounces.style.color = "#2C5364";

    tons.innerHTML = (lbs *  0.00045359237) + "t";
    tons.style.color = "#2C5364";

    stones.innerHTML = (lbs / 14) +  "st";
    stones.style.color = "#2C5364";
});
testVr01()
