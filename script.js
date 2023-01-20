// this defines queries 
var generateBtn = document.querySelector("#generate");
var lengthEl = document.querySelector('#length');
var uppercaseEl = document.querySelector('#uppercase');
var lowercaseEl = document.querySelector('#lowercase');
var numbersEl = document.querySelector('#numbers');
var symbolsEl = document.querySelector('#symbols');
var resultEl = document.querySelector('#result');


// this function is runs the password text 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// these are the buttons to selcet options
var randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}





generate.addEventListener('click', function () {
    var length = +lengthEl.value;
    var hasLower = lowercaseEl.checked;
    var hasUpper = uppercaseEl.checked;
    var hasNumber = numbersEl.checked;
    var hasSymbol = symbolsEl.checked;
   
    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});
// these are the buttons to selcet options

// this is generating password based off of checkboxes on my form.
function generatePassword(lower, upper, number, symbol, length) {
    
 //
    let newPass = '';
    var typesCount = lower + upper + number + symbol;
  
    var typesArr = [];

    if (lower){
        typesArr.push({lower});
    }
   
    if (upper){
        typesArr.push({upper});
    }
    if (number){
        typesArr.push({number});
    }
    if (symbol){
        typesArr.push({symbol});
    }
    if(typesCount === 0) {
        return '';
    }
   

    for(let i=0; i<length; i+=typesCount) {
        typesArr.forEach(function (type) {
            var funcName = Object.keys(type)[0];
            newPass += randomFunc[funcName]();
        });
    }
   
    var finalPassword = newPass.slice(0, length);
   
    return finalPassword;
}
 
 
 // uses ascII to get lowercase numbers lower case numbers start at 98;
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
 //26 is the sub number and 65 is upper A 
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
 // the number 10 is LF 48 is  0 
function getRandomNumber() {
    return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
 //  this is for the Symbol when then the button is clicked this will run
function getRandomSymbol() {
    var symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// this is the loop of function that generate the password




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





