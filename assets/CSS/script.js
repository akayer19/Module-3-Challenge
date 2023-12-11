// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Get password from the generatePassword function
  var password = generatePassword();

  // Select the password text area
  var passwordText = document.querySelector("#password");

  // Set the value of the password text area to the generated password
  passwordText.value = password;
}

// Generator
var generatePassword = function() {
  // Password length
  var passwordLengthString = window.prompt("How many characters would you like your password to contain?");
  var passwordLength = Number(passwordLengthString);

  // Validate the password length
  if (passwordLength < 8 || passwordLength > 128 || passwordLength !== passwordLength) {
    // Display an alert and recursively call the function to get a valid length
    window.alert("Password length must be between 8 and 128 characters and must be a number!");
    return generatePassword();
  }

  // Confirms different chararcter types
  var lowerCase = window.confirm("Would you like to include lowercase characters?");
  var upperCase = window.confirm("Would you like to include uppercase characters?");
  var numeric = window.confirm("Would you like to include numeric characters?");
  var special = window.confirm("Would you like to include special characters?");

  // Validates that atleast one has been selected
  if (!lowerCase && !upperCase && !numeric && !special) {
    // If not alert
    window.alert("You must choose at least one character type!");
    return generatePassword();
  }

  // Define character set types
  var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericCharacters = "1234567890";
  var specialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  // Initialize an empty string to store the selected characters
  var passwordCharacters = "";

  // Concatenate character sets based on combined choices
  if (lowerCase) {
    passwordCharacters += lowerCaseCharacters;
  }
  if (upperCase) {
    passwordCharacters += upperCaseCharacters;
  }
  if (numeric) {
    passwordCharacters += numericCharacters;
  }
  if (special) {
    passwordCharacters += specialCharacters;
  }

  // Empty password string
  var password = "";

  // Generate the password by randomly selecting characters from the combined set
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * passwordCharacters.length);
    password += passwordCharacters[randomNumber];
  }

  // Return the generated password
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
