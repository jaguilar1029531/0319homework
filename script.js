// Assignment Code
var generateBtn = document.querySelector("#generate");



// global variables
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['!', '"', "#", "$", "%", "&", "'", '(', ')', '*', '+', ',', '-', '.', '/', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{', '|', '}', '~' ];
var lowerCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var userPassLength = "";
var concats = [];



// Write password to the #password input
function writePassword() {

  
do {
var lowercase = confirm("Do you want lowercase?");
console.log(lowercase);
var uppercase = confirm("Do you want uppercase?");
console.log(uppercase);
var numericValue = confirm("Do you want numbers?");
console.log(numericValue);
var specialChar = confirm("Do you want special characters?");
console.log(specialChar);

// if (userPassLength >=8 && userPassLength <=128){}
// else if (userPassLength <8) {
// window.alert("password not long enough");
// }
// else {
// window.alert("password too long")
// }

if(lowercase == false && uppercase == false && numericValue == false && specialChar == false) {
  alert("try again, ugly")

}
  

}
while (lowercase == false && uppercase == false && numericValue == false && specialChar == false)


do{
  userPassLength= prompt("How long do you want your password to be? *Must be between 8-128*")  
 }  
 while( userPassLength < 8 || userPassLength > 128 || isNaN(userPassLength));


// do {
  
// }
// while (userPassLength != (userPassLength >=8 && userPassLength <=128));



if (lowercase == true) {
   concats = concats.concat(lowerCharacters);
 } 
 else (lowercase == false)

if (uppercase == true) {
  concats = concats.concat(upperCharacters);
} 
else (uppercase == false)

if (numericValue == true) {
  concats = concats.concat(numericCharacters);
} 
else (numericValue == false)

if (specialChar == true) {
  concats = concats.concat(specialCharacters);
}
else (specialChar == false)



  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  
 // below i am creating the variables for prompts
 function generatePassword()  {

var password = "";
  for (var index = 0; index < parseInt(userPassLength); index++){
    var character = Math.floor(Math.random() * concats.length)
    password += concats[character];
  }
  console.log(password)
  return(password)


  
 }









  
 

 


 
 
 
// Alert the results


// generate password function