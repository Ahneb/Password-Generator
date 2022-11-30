// Assignment code herex
function generatePassword() {
  //get user options and store information in array to pass to password generation
  //initialize arrays 
  const responsesArray = ["", "", "", "", ""]
  const keyArray = ["length", "upper", "lower", "number", "symbol"]
  const userPrompts = ["Select Length (8-128)", "Uppercase? (Yes/No)", "Lowercase? (Yes/No)", "Numbers? (Yes/No)","Symbols? (Yes/No)"];
  // console.log(responsesArray, userPrompts);

  //Check for length of password
  function checkLength(userInput) {
    if (8 <= userInput && userInput <= 128){
      return userInput;
    } else {
      alert("input value incorrect. try again.");
      return ("");
    }
  }

  //checks for yes or no and returns bool for user response
  function checkBool(userInput) {
    if (userInput.toLowerCase().includes("y")) {
      return true;
    } else if (userInput.toLowerCase().includes("n")){
      return false;
    } else {
      alert("input value incorrect. try again.");
      return("");
    }
  }

  //iterate for 5 different prompts
  for (let i = 0; i < 5; i++) {
    //if length of value at array of index i is empty keep repeating
    while (responsesArray[i].length < 1) {
      //prompt user to response and save to variable
      let newResponse = prompt(userPrompts[i]);
      //for the first index check for length otherwise check for bool value
      if (i == 0) {
        responsesArray[i] = checkLength(newResponse);
        // console.log(responsesArray[i]);
      } else if (i > 0) {
        responsesArray[i] = checkBool(newResponse);
        // console.log(responsesArray[i]);
      }
    }
  }


  //generate passwords based on user responses
  let newPassword = "";
  console.log(responsesArray);

  // const filtered = responsesArray.filter(values => values === true);

  // console.log(filtered.length);  // console.log(responsesArray[0]);
  for (let i = 0; i < responsesArray[0]; i++) {
    //variables for while loop
    let repeat = true;
    let finalNum = 0;

    //repeat random number until the the number matches true in the response array 
    while (repeat == true){
      let randomNum = Math.floor(Math.random() * 4);
      if (responsesArray[randomNum+1] == true){
        repeat = false;
        finalNum = randomNum;
      }
    }
    // console.log("out of while");
    // console.log("NUMBER GOING INTO IF CONDITION " + finalNum);
    if (finalNum === 0) {
      newPassword += generateUpper();
      console.log("\nADDED VALUE IS " + newPassword.substring(newPassword.length-1, newPassword.length))
    } else if (finalNum === 1) {
      newPassword += generateLower();
      console.log("\nADDED VALUE IS " + newPassword.substring(newPassword.length-1, newPassword.length))
    } else if (finalNum === 2) {
      newPassword += generateNum();
      console.log("\nADDED VALUE IS " + newPassword.substring(newPassword.length-1, newPassword.length))
    } else if (finalNum === 3) {
      newPassword += generateSym();
      console.log("\nADDED VALUE IS " + newPassword.substring(newPassword.length-1, newPassword.length))
    }
    console.log(newPassword, newPassword.length);
  }
  //generate random values and pulling from ascii

  //26 values of uppercase letters and ascii values start at 65
  function generateUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  //26 values of lowercase letters and ascii values start at 97
  function generateLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  //10 values of numbers and ascii values start at 48
  function generateNum() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  //10 values for symbols and ascii values start at 33
  function generateSym() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 33);
  }
  console.log(newPassword);
  return newPassword;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}