// Assignment code here


//set of letters include lower case, upper case, numbers, special characters
//generate lowercase letter
function getLowerLetter() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};
//generate uppercase letter
function getUpperLetter() {
  return String.fromCharCode(Math.floor(Math.random() *26) + 65);
};
//generate number letter
function getNumber() {
  return String.fromCharCode(Math.floor(Math.random() *10) + 48);
};
//generate symbol letter
function getSymbol() {
  var symbols = '!@#$%^&*(){}[]=<>,./';
  return symbols[Math.floor(Math.random()* symbols.length)];
};




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
