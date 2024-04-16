// Have an alert pop up to the user letting them know it's a small questionnaire
alert("Random questionnaire! Answer Wisely");
// Prompt the user to enter their name and write a welcome message
const userName = prompt("What is your name?");
console.log(userName);

document.write("Hello " + userName + ", it's time for a quick questionnaire!");

// Create two buttons used as the answers and give an 
// output depending on the users selection.

var yesButton = document.createElement("button");

document.body.appendChild(yesButton);

yesButton.innerText = "Yes!"

yesButton.addEventListener("click", yesFunction);
// If user clicks yesButton a correct answer prompt appears. 
function yesFunction() {
    if ("click") {
        alert("Correct! Pineapple is delicious, so is pizza, so together they are amazing!")
    }
    else { 

    }
}
// positioning of the yesButton
yesButton.style.position = "absolute"
yesButton.style.left = '15px'
yesButton.style.top = '135px'

// Create a button if the user does not agree with the question called noButton
var noButton = document.createElement("button");

document.body.appendChild(noButton);

noButton.innerText = "NO!!!!"

// If user clicks noButton a incorrect answer prompt appears.

noButton.addEventListener("click", noFunction);
function noFunction() {
    if ("click"){
        alert("WRONG!!! Pineapple on pizza is fine!")
    }
    else {

    }
}
// Positioning of Nobutton
noButton.style.position = "absolute"
noButton.style.left = "75px"
noButton.style.top = "135px"

// Same process but for question 2 
var yesButton2 = document.createElement("button");

document.body.appendChild(yesButton2);

yesButton2.innerText = "Of Course!"

yesButton2.addEventListener("click", yesFunction2);
// If user clicks yesButton2 a correct answer prompt appears. 
function yesFunction2() {
    if ("click") {
        alert("Incorrect! They suck! :(")
    }
    else { 

    }
}
// Positioning
yesButton2.style.position = "absolute"
yesButton2.style.left = '15px'
yesButton2.style.top = '235px'

// A Disagree Button for question 2 
var noButton2 = document.createElement("button");

document.body.appendChild(noButton2);

noButton2.innerText = "NO!"

// If user clicks noButton2 a incorrect answer prompt appears.

noButton2.addEventListener("click", noFunction2);
function noFunction2() {
    if ("click"){
        alert("Correct!! They suck!")
    }
    else {

    }
}
// Positioning 
noButton2.style.position = "absolute"
noButton2.style.left = "105px"
noButton2.style.top = "235px"

// I wasn't sure how to iterate a while loop into my project

let launchingIn = 10;
console.log(launchingIn);
while (launchingIn > 0) {
    launchingIn -= 1; 
}
console.log("Blastoff!");
   
