// Assignment code here


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

//Characters to be used in the randomly generated password.
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var allNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!", "#", "$", "%", "&", "/", "<", "=", ">", "?", "@"];

function generatePassword() {


  var passLength = window.prompt("What is the length of the password? Password must be between 8 and 128 characters long.");

  if (passLength >= 8 && passLength <= 128) {

    // Confirm what type of characters to use in pass
    var confirmLower = window.confirm("Would you like to use lowercase characters?");
    var confirmUpper = window.confirm("Would you like to use upperCase characters?");
    var confirmNumber = window.confirm("Would you like to include numbers?");
    var confirmSpecial = window.confirm("Would you like to use special characters?");

    var characters = [];

    if (confirmLower) {
      characters = characters.concat(lowerCase)
    }

    if (confirmUpper) {
      characters = characters.concat(upperCase)
    }

    if (confirmNumber) {
      characters = characters.concat(allNumbers)
    }

    if (confirmSpecial) {
      characters = characters.concat(specialChars)
    }

  }

  else {
    //Alert in case they choose an invalid number of chars
    window.alert("Password length is invalid, try again.");
  }

  //Generate the randomed password
  var newPassword = "";
  for (var i = 0; i < passLength; i++){
    newPassword = newPassword + characters[Math.floor(Math.random() * characters.length)]
  }

  //Display the randomed password
  return newPassword;
}