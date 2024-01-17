// These are my variables
var generateButton = document.querySelector("#generate")
var passwordText = document.querySelector("#password")

///Elements declared in password functionality 
var password = ''
var uppercaseCharactersList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var numericCharactersList = '1234567890'
var specialCharacterList = '!@#$%^&*()-+'
var lowercaseCharactersList = 'abcdefghijklmnopqrstuvwxyz'
var possibleCharacterList = ''

// Function to make random password
function makePassword() {
    var passwordLength = prompt('How many characters would you like in your password? (8-128)', '');

    // Password Length Validation / function stops if not a number inbetween 8-128
    passwordLength = parseInt(passwordLength)
    if (passwordLength > 128 || passwordLength < 8) {
        alert('Password length must be between 8 and 128.')
        return;
    }
    
    if (Number.isNaN(passwordLength) === true) {
        alert('Character amount must be a number.')
        return;
    }

    var specialCharacters = confirm('Would you like special characters?')
    var numericCharacters = confirm('Would you like numbers?')
    var lowercaseCharacters = confirm('Would you like lowercase letters?')
    var uppercaseCharacters = confirm('Would you like uppercase Characters?')

    // Based on confirmations, type of characters are added to "possibleCharacterList" string
    if (specialCharacters === true) {
        possibleCharacterList += specialCharacterList
    }

    if (numericCharacters === true) {
        possibleCharacterList += numericCharactersList
    }

    if (lowercaseCharacters === true) {
        possibleCharacterList += lowercaseCharactersList
    }

    if (uppercaseCharacters === true) {
        possibleCharacterList += uppercaseCharactersList
    }

    // Function doesn't run if not selected 
    if (specialCharacters === false && numericCharacters === false && lowercaseCharacters === false && uppercaseCharacters === false) {
        alert('At least one character type must be selected.')
        return;
    }

    //
    for (var i = 0; i < passwordLength; i++) {
        password += possibleCharacterList.charAt(Math.floor(Math.random() * possibleCharacterList.length));
    }

    //brings password to text box 
    passwordText.textContent = password
}

// The generating button!
generateButton.addEventListener("click", makePassword);

// due dates are just suggestions lol
