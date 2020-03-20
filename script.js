

//BELOW IS A QUERY SELECTOR WHICH TELLS US THIS DOCUMENT WILL BE ACTING WITHIN THE BUTTON(ID = GENERATE) FOUND IN MY HTML DOC
var generateBtn = document.querySelector("#generate");



// THESE ARE MY GLOBALSCOPE VARIABLES, THESE VARIABLES CAN/WILL BE CALLED ON THROUGHOUT ALL OF THIS DOCUMENT
// THESE ARRAYS CONTAIN THE VARIABLES WHICH WILL BE TAKEN AT RANDOM TO CREATE THE USER'S PASSWORD
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['!', '"', "#", "$", "%", "&", "'", '(', ')', '*', '+', ',', '-', '.', '/', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{', '|', '}', '~' ];
var lowerCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// I LEFT THESE EMPTY, BECAUSE MY GENERATE PASSWORD FUNCTION AND USER INPUT'S WILL PROVIDE SOMETHING HERE
var userPassLength = "";
var concats = [];



// THIS IS THE WRITEPASSWORD FUNCTION BEGINS
function writePassword() {

// HERE I STARTED WITH A DO WHILE LOOP, I USED THIS SO THAT THE CODE WOULD RUN PROMPTS AND CONFIRMATIONS-
// -WHILE IT WAS ALSO ABLE TO DENY A PASSWORD BASED ON UNACCEPTABLE CRITERIA
do {
// LINES 27 THROUGH 30 ARE THE CONFIRMATIONS ASKED TO THE USER TO DECIDE WHICH CRITERIA IS DESIRED IN THE-
// -RANDOMIZED PASSWORD
var lowercase = confirm("Do you want lowercase?");
var uppercase = confirm("Do you want uppercase?");
var numericValue = confirm("Do you want numbers?");
var specialChar = confirm("Do you want special characters?");

//THIS PIECE OF CODE TAKES INTO ACCOUNT ALL CONFIRMATIONS BEING FALSE, AND TELLS THE USER TO TRY AGAIN-
//-BECAUSE THIS WILL NOT BE ENOUGH INFORMATION TO CREATE A RANDOMIZED PASSWORD
if(lowercase == false && uppercase == false && numericValue == false && specialChar == false) {
  alert("try again, ugly")

}
  

}
while (lowercase == false && uppercase == false && numericValue == false && specialChar == false)

// THIS PIECE OF CODE WILL PROMPT THE USER TO ENTER A NUMBER FOR HOW LONG THEY WANT THEIR PASSWORD TO BE
// BUT AT THE SAME TIME THE WHILE PART OF THE LOOP WILL DENY THEM FURTHER ACCESS UNTIL THEY PUT AN APPROVED NUMBER
do{
  userPassLength= prompt("How long do you want your password to be? *Must be between 8-128*")  
 }  
 while( userPassLength < 8 || userPassLength > 128 || isNaN(userPassLength));

//LINES 52 THROUGH 70 TELL US THAT IF THE USER CONFIRMS EACH OF THE PROVIDED OPTIONS, THEIR CHOICE WILL BE-
//-ADDED TO THE PASSWORD RANDOMIZER GENERATOR FUNCTION. IF THE USER INPUTS 'CANCEL' OR 'FALSE', THEN THE CODE-
//-WILL DO NOTHING
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
  
 // BELOW IS MY GENERATE PASSWORD FUNCTION
 // IN THE FIRST PART I ESTABLISHED PASSWORD AS AN EMPTY VARIABLE, SO THAT IT CAN BE ADDED INTO BASED ON THE USER INPUT CRITERIA
 // NEXT LINE I STARTED THE FOR LOOP BY STARTING THE CHECKED INDEX AT 0, AND TO KEEP ADDING ONTO THAT AS LONG AS UNTIL IT WAS LONG ENOUGHT TO BE A GOOD USER PASSWORD
 //THEN I USED MATH.RANDOM TO RANDOMIZE A NUMBER BASED ON THE NUMBER CHOSEN BY THE USER, AND THE OPTIONS THEY WANTED INVOLVED.
 //I USED MATH.FLOOR TO ENSURE FULL INTEGERS
 //NEXT LINE I IDENTIFIED THE PASSWORD AS THE OPTIONS CHOSEN, RANDOMIZED, PLUS THE LENGTH CHOSEN
 //THE VERY LAST LINE IS A RETURN STATEMENT, THIS TAKES THE PASSWORD CREATED, AND PLACES IT INTO THE VIEWPORT FOR THE USER TO SEE
 function generatePassword()  {

var password = "";
  for (var index = 0; index < parseInt(userPassLength); index++){
    var character = Math.floor(Math.random() * concats.length)
    password += concats[character];
  }
  
  return(password)


  
 }









  
 

 


 
 
 
// Alert the results


// generate password function