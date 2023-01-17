// Assignment Code
var generateBtn = document.querySelector("#wrapper");
var generateEl  = document.querySelector("#card");
var cardEL = document.querySelector("#body");
var footerEL =document.querySelector("#button");
var lengthEl = document.getElementById('#length');
var uppercaseEl = document.getElementById('#uppercase');
var lowercaseEl = document.getElementById('#lowercase');
var numbersEl = document.getElementById('#numbers');
var symbolsEl = document.getElementById('#symbols');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
