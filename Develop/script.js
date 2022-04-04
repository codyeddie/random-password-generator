// Assignment code here
var generatePassword = function() {

  // Create setPassLength function to choose length of password 
    var setPassLength = function () {
      passLength = prompt("Choose a number between 8 and 12 to determine the length of your password.")
      if (passLength >= 8 && passLength <= 12) {
        passLength = passLength;
      } else {
        window.alert("You need to enter a vaid number! Please try again.");
        return setPassLength();
      }
      return passLength;
    };

    var passLength = Number(setPassLength());
    console.log (passLength);
  
    // create a function that checks which character options were chosen 
    var charOptions = function() {
      var lowerCaseChoose = window.confirm("Do you want to use lowercase characters in your password?");
      var upperCaseChoose = window.confirm("Do you want to use uppercase characters in your password?");
      var numericCharChoose = window.confirm("Do you want to use numeric characters in your password?");
      var specialCharChoose = window.confirm("Do you want to use special characters in your password?");
    
      if (lowerCaseChoose === false && upperCaseChoose === false && numericCharChoose === false && specialCharChoose === false) {
        window.alert("You need to choose at least one character option! Please try again.");
        return charOptions();   
      }
      else {
        return {lowerCaseChoose, upperCaseChoose, numericCharChoose, specialCharChoose};
      }
    };
  
    // Create variables that contain the value of selections that were made in charOptions function
    var confirmations = charOptions();
  
    var lowerCaseChoose = confirmations.lowerCaseChoose;
    var upperCaseChoose = confirmations.upperCaseChoose;
    var numericCharChoose = confirmations.numericCharChoose;
    var specialCharChoose = confirmations.specialCharChoose;
  
    
    
    // Create a function that will create password based on user selection
    var createPassWord = function() {
      // Create variables for the password and the character types that will be used randomly
      var passChars = "";

      var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
      var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var numericChar = "1234567890";
      var specialChar = "!@#$%^&*()_+=-";
  
      // Add characters to passChars variable base on selections in charOptions function and confirmations objects
        if (lowerCaseChoose === true) {
        passChars += lowerCaseChar;
      }  
      if (upperCaseChoose === true) {
        passChars += upperCaseChar;
      }  
      if (numericCharChoose === true) {
        passChars += numericChar;
      }  
      if (specialCharChoose === true) {
        passChars =+ specialChar;
      }
      console.log(passChars);
  
      // Create a password variable for all the selected data to be contained in and a 
      // for loop to get random characters based on character selections and password length
      var password = "";
      for (var i = 0; i < passLength; i++) {
        var randomCharacters = Math.floor(Math.random() * passChars.length);
        password += passChars.substring(randomCharacters, randomCharacters +1);
      }
    return password;
    }

    createPassWord();
  
  }
  
  
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

writePassword();
