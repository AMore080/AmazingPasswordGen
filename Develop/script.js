// Assignment code here
var passwordChars = 'abcdefghijkmnlopqrstuvwxyz1234567890';
let charArray = [];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  let passCount;
  let password = ''
  passCount = prompt("How many characters would you like?");
    if (passCount < 8 || passCount > 128){
      alert("Try again!")
      textarea.value = ""
    }
  
    for(let i = 0; i < passCount; i++){
      password += passwordChars.charAt(Math.floor(passCount * Math.random()))
    }
    return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

