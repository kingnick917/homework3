// this defines queries 
var generateBtn = document.querySelector("#generate");
var lengthEl = document.querySelector('#length');
var uppercaseEl = document.querySelector('#uppercase');
var lowercaseEl = document.querySelector('#lowercase');
var numbersEl = document.querySelector('#numbers');
var symbolsEl = document.querySelector('#symbols');
var resultEl = document.querySelector('#result');
var clipboard = document.querySelector('#clipboard');


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


clipboard.addEventListener('click', () => {
    var textarea = document.createElement('textarea');
    var password = resultEl.innerText;
   
    if(!password) { return; }
   
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard');
});




generate.addEventListener('click', () => {
    var length = +lengthEl.value;
    var hasLower = lowercaseEl.checked;
    var hasUpper = uppercaseEl.checked;
    var hasNumber = numbersEl.checked;
    var hasSymbol = symbolsEl.checked;
   
    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});
// these are the buttons to selcet options


function generatePassword(lower, upper, number, symbol, length) {
 
    let generatedPassword = '';
    var typesCount = lower + upper + number + symbol;
    var typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
   
 
    if(typesCount === 0) {
        return '';
    }
   

    for(let i=0; i<length; i+=typesCount) {
        typesArr.forEach(type => {
            var funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });
    }
   
    var finalPassword = generatedPassword.slice(0, length);
   
    return finalPassword;
}
 
 
 
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
 
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
 
function getRandomNumber() {
    return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
 
function getRandomSymbol() {
    var symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// this is the loop of function that generate the password




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





