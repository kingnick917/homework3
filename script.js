// Assignment Code
var generateBtn = document.querySelector("#wrapper");
var generateEl  = document.querySelector("#card") 
var cardEL = document.querySelector("body")
var card-footer =document.querySelector("button")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
