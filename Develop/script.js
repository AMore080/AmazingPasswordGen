// Assignment code here
var passwordChars = 'abcdefghijkmnlopqrstuvwxyz1234567890'
const myArray =  passwordChars.split('');

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  function generatePassword(){
    var passCount = prompt("How many characters would you like?");
    let passwordText
      for(let i = 0; i < passCount.length; i++){
      
      }
  }


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

