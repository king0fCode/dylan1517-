// Functions

// Started by button click "inToCm"
// Gets user input of "inches",
// Does math to convert "inches" in to "centimeters",
// Returns "centimeters" to centimeters div box
function inToCentimeters() {
const inches = document.getElementById("inches").value;
let centimeters = inches * 2.54;
let centBox = document.getElementById("centimeters");
centBox.innerHTML = centimeters;
}
// Started by button click "ftToM"
// Gets user input of "feet",
// Does math to convert "feet" in to "meters",
// Returns "meters" to meters div box
function inToMeters() {
const feet = document.getElementById("feet").value;
let meters = feet * 3.28084;
let meterBox = document.getElementById("meters");
meterBox.innerHTML = meters;
}
// Started by button click "fToC"
// Gets user input of "farenheit",
// Does math to convert "farenheit" in to "celsius",
// Returns "celsius" to celsius div box
function inToCelsius() {
const farenheit = document.getElementById("farenheit").value;
let celsius = (farenheit - 32) * 5/9;
let celsiusBox = document.getElementById("celsius");
celsiusBox.innerHTML = celsius;
}
// Started by button click "cToL"
// Gets user input of "cup",
// Does math to convert "cup" in to "liters",
// Returns "liter" to liter div box
function inToLiters(){
const cup = document.getElementById("cup").value;
let liter = cup * 0.236588;
let literBox = document.getElementById("liter");
literBox.innerHTML = liter;
}
// Started by button click "uToC"
// Gets user input of "usd",
// Does math to convert "usd" in to "cad",
// Returns "cad" to canadian div box
function intoCad(){
const usd = document.getElementById("usd").value;
let canadian = usd * 1.33;
let canadianBox = document.getElementById("canadian")
canadianBox.innerHTML = canadian;
}


