//script.js for quiz challenge

//var header = getElementById('header');

function clickStartButton() {
    alert("The button was clicked!");
    console.log("Someone clicked a button!");
}

//function startTimer() {
//    var timer=10000;

//}




// CODE BELOW IS FROM A PREVIOUS PROJECT
//SNIPPETS FROM THIS CODE MAY OR MAY NOT BE A USEFUL REFERENCE

// //console.log("Hey, button works");
// //global vars
// var passwordLength;
// var approvedCharacters;

// function generatePassword() {
//     //creating and returning password
//     getPasswordLength();
//     setOptions();
//     var password = "";
//     for (let i = 0; i < passwordLength; i++) {
//         password += approvedCharacters[Math.floor(Math.random() * approvedCharacters.length)];
//     }
//     console.log(password);
//     document.getElementById('passwordDisplay').innerHTML = password;
// }

// function getPasswordLength() {
//     passwordLength = prompt("give number between 8 and 128");
//     if (passwordLength < 8 || passwordLength > 128) {
//         alert("Dude ... password is too long or too short, try again");
//         getPasswordLength();
//     } else {
//         console.log(passwordLength);
//     }
// }

// function setOptions() {
//     //set options

//     approvedCharacters = "";
//     if (confirm("are we using lowercase?")) {
//         approvedCharacters += "qwertyuiopasdfghjklzxcvbn";
//     }

//     if (confirm("are we using uppercase?")) {
//         approvedCharacters += "QWERTYUIOPASDFGHJKLZXCVBNM";
//     }

//     if (confirm("are we using numbers?")) {
//         approvedCharacters += "0123456789";
//     }

//     if (confirm("are we using special characters?")) {
//         approvedCharacters += "!@#$%^";
//     }

//     //if the user did not pick any approved characters, alert, then call same function
//     if (!approvedCharacters) {
//         alert("Hey, choose at least one option");
//         //introduction to recursion;
//         setOptions();
//     } else {
//         console.log(approvedCharacters);
//     }
    
// }
