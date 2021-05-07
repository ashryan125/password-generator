// Assignment code here

//generate random password

function generate() {

  //set password length/complexity

  var passwordLength = document.getElementById("range").value;

  //password value options
  var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()[]{}<>,.?/";

  var password = "";

  //create for loop to choose password characters
  for (var i = 0; i <= passwordLength; i++) {
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }

  //add password to display
  document.getElementById("card-body").value = password;

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
