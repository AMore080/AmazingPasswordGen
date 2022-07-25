// Assignment code here
var lowerCaseChars = "abcdefghijkmnlopqrstuvwxyz";
var upperCaseChars = 'ABCDEFGHIJKMNLOPQRSTUVWXYZ';
var numbers = '1234567890';
var specialChars = '!@#$%^&*+;:';



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//GeneratePassword function declared
function generatePassword(){
  let passCount;
  let password = ''
  //Prompts the user on the length of their password.
  passCount = prompt("How many characters would you like?");
  if (passCount < 8 || passCount > 128){
    alert("Try again!")
    textarea.value = ""
  }

  //Password choices based on a series of confirm questions
  let passwordChoicesFunc = function(){
      let passwordChoices = ''
      var upperSelect = confirm("Include uppercase letters?");
      var lowerSelect = confirm("Include Lowercase letters?");
      var specialSelect = confirm("Include Special letters?");
      var numberSelect = confirm("Include Numbers?");

      if (upperSelect == true){
        passwordChoices += upperCaseChars;
      }
      if (lowerSelect == true){
        passwordChoices += lowerCaseChars;
      }
      if (specialSelect == true){
        passwordChoices += specialChars;
      }
      if (numberSelect == true){
        passwordChoices += numbers;
      }

      return passwordChoices;
    }

    passwordChoices = passwordChoicesFunc();

  

    for(let i = 0; i < passCount; i++){
      password += passwordChoices.charAt(Math.floor(Math.random() * passwordChoices.length))
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

