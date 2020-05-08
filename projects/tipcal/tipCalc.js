
const button = document.querySelector("button");
// grabbing button defined in html
const tipAmount = document.getElementById("tipAmount");
// declares location to place tipAmount shows us where to return value?
const lead = document.getElementsByClassName("lead");
function calcTip(){
    // creates a function for all of our variables    
    let tipPercent = document.getElementById("tipPercent").value;
    // defines variable for bill divison
    let dollarAmount = document.getElementById("dollarAmount").value;
    // grabs user input for dollar amount
    let tipTotal = dollarAmount * (tipPercent / 100);
    // does math from user input
    lead[0].innerHTML = "Did you enjoy your meal? Here's your tip."
    //  returns final value to user
if (tipTotal < 20){
    tipAmount.innerHTML = "We calculated the tip, So you didn't have too.<br>$"
    +Math.floor(tipTotal);
} else {
    tipAmount.innerHTML = "Dig deep for this one DAN!<br>$"
    +Math.floor(tipTotal);
    // logic function to tell which message to appear based on user input
}
}
    


