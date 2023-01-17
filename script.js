// Array of special characters to be included in password
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Declaration of global variables for the password option settings
let characterLength = 0;
let characterLengthPrompt
let promptChoices = [];
let passwordLength = 0;


function getPasswordOptions() {
  characterLengthPrompt = parseInt(prompt('How many characters do you want in your password? Please choose a number between 10 and 64'));
  while (characterLengthPrompt !== null) {
    // if the user inputs anumber below 10 or above 64 or any other caracter that is not a number the below message will be displayed.
  if (isNaN(characterLengthPrompt) || characterLengthPrompt < 10 || characterLengthPrompt > 64) {
    characterLengthPrompt = parseInt(prompt("Ooops, it looks like you entered an invalid number or letter. Please enter a number between 10 and 64 to choose the length of your password."));
    // The else statement is used to specify if the statement above is false then it will go ahead and execute the code below it. The break statement breaks out of the loop and continues executing the code after the loop.
  } else{
    break;
  }
}


if (confirm("Do you want to include special characters in your password?")) {
  if (confirm){
  promptChoices = promptChoices.concat(specialCharacters)
}
}

if (confirm("Do you want to include numbers in your password?")) {
  if (confirm){
  promptChoices = promptChoices.concat(numericCharacters)
}
}

if (confirm("Do you want to include lowercase letters in your password?")) {
  if (confirm){
  promptChoices = promptChoices.concat(lowerCasedCharacters)
}
}

if (confirm("Do you want to include uppercase letters in your password?")) {
  if (confirm){
  promptChoices = promptChoices.concat(upperCasedCharacters)
}
}
// If the user chooses to click cancel on all the confirm windows the following message will be displayed and the user has to start again.
if (promptChoices.length === 0) {
  alert("Ooops, you must choose at least one character type. Please try again.");
}
return;
};

// Function for getting a random element from an array
function getRandom() {
  return promptChoices[Math.floor(Math.random() * promptChoices.length)];
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  let displayPassword = ""
  for (let i = 0; i < characterLengthPrompt; i++) {
    displayPassword += getRandom();
  }
  return displayPassword;
}

// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
