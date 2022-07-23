// Assignment code here
var passwordChars = 'abcdefghijkmnlopqrstuvwxyz1234567890'

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
   function generatePassword(){
    password = Number(prompt("How many characters would you like?"));
      for(let i = 0; i < password; i++){
        passwordText += passwordChars.charAt(Math.floor(passwordChars.length * Math.random()))
      }
      return passwordText
  }


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

