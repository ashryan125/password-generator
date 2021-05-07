
// Assignment Code
var generateBtn = document.querySelector("#generate");

//Validate the user input
function passwordOpts(userNumValid) {
  if (isNaN(userNumValid)) {
    alert("Please enter a valid number.");
    return false;
  } else if (parseInt(userNumValid) < 8) {
    alert("Password length must be at least 8 characters.");
    return false;
  } else if (parseInt(userNumValid) >= 128) {
    alert("Password must be less than 129 characters.");
    return false;
  }
  return true;
}

//Get random characters from each chosen character type
function getRandomElementFromArray(collection) {
  return collection[Math.floor(Math.random() * collection.length)];
}

//Function to prompt user for password options
function generatePassword() {
  var userNumValid = prompt(
    "How many characters should password contain? Please pick a number from 8 to 128"
  );
  var passwordValid = passwordOpts(userNumValid);
  if (passwordValid) {
    var upperCase = confirm(
      "Include uppercase letters?"
    );
    var lowerCase = confirm(
      "Include lowercase letters?"
    );
    var numbers = confirm("Include numbers?"
    );
    var specialCharacters = confirm(
      "Include special characters?"
    );
  
    
  }
  //Conditional statement to check if user does not include any types of characters. Program ends if all four variables evaluate to false
  if (
    [specialCharacters, numbers, lowerCase, upperCase].includes(
      true
    )
  )
    //Array to store types of characters to include in password
    var selectedOptions = [];

  //Array to contain one of each type of chosen character to check each will be used
  var includedOptions = [];

  //conditional adds chosen array types into array for possible random outcomes
  if (specialCharacters) {
    selectedOptions = selectedOptions.concat(specialCharacters);
    includedOptions.push(
      specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    );
  }
  if (numbers) {
    selectedOptions = selectedOptions.concat(numericCharacters);
    includedOptions.push(
      numericCharacters[Math.floor(Math.random() * numericCharacters.length)]
    );
  }
  if (lowerCase) {
    selectedOptions = selectedOptions.concat(lowerCasedCharacters);
    includedOptions.push(
      lowerCasedCharacters[
        Math.floor(Math.random() * lowerCasedCharacters.length)
      ]
    );
  }
  if (upperCase) {
    selectedOptions = selectedOptions.concat(upperCasedCharacters);
    includedOptions.push(
      upperCasedCharacters[
        Math.floor(Math.random() * upperCasedCharacters.length)
      ]
    );
  }

  //For loop to iterate over the password length from the options object, selects random char from selected sets and concats into password variable
  var randomChar = [];
  for (var i = 0; i < userNumValid; i++) {
    var index = Math.floor(Math.random() * selectedOptions.length);
    randomChar.push(selectedOptions[index]);
  }
  var replacedPosition = {};
  //While loop to check index position is held and not replaced by another character
  while (includedOptions.length > 0) {
    var replaceChar = Math.floor(Math.random() * randomChar.length);
    if (!replacedPosition[replaceChar]) {
      randomChar[replaceChar] = includedOptions.pop();
      replacedPosition[replaceChar] = true;
    }
  }
  return randomChar.join("");
}

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];