// global variables
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['!', '"', "#", "$", "%", "&", "'", '(', ')', '*', '+', ',', '-', '.', '/', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{', '|', '}', '~' ];
var lowerCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lengthOf = []
for (var i = 8; i <= 128; i++) [
  console.log(i)
]

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  
 // below i am creating the variables for prompts
 function generatePassword() {}


var userPassLength = prompt("How long will your password be? It has to be between 8 and 128");
console.log(userPassLength);
if (userPassLength >= 8 <=128) 
  console.log(generatePassword(lengthOf))
else (userPassLength)
  window.alert("Thank you");


if (lowercase == true) {
  generatePassword(lowerCharacters)
} ;

if (uppercase == true) {
  generatePassword(upperCharacters)
} ;

if (numericValue == true) {
  generatePassword(numericCharacters)
} ;

if (specialChar == true) {
  generatePassword(specialCharacters)
}
var lowercase = confirm("Do you want lowercase?");
console.log(lowercase);
var uppercase = confirm("Do you want uppercase?");
console.log(uppercase);
var numericValue = confirm("Do you want numbers?");
console.log(numericValue);
var specialChar = confirm("Do you want special characters?");
console.log(specialChar);

 
  


  
 

 


 
 
 
// Alert the results


// generate password function