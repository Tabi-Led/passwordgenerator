// Function to make random password
function makePassword() {
    // Resetting variables for each password generation
    var password = '';
    var possibleCharacterList = '';

    var passwordLength = prompt('How many characters would you like in your password? (8-128)', '');

    // Password Length Validation / function stops if not a number between 8-128
    passwordLength = parseInt(passwordLength);
    if (passwordLength > 128 || passwordLength < 8) {
        alert('Password length must be between 8 and 128.');
        return;
    }
    
    if (Number.isNaN(passwordLength) === true) {
        alert('Character amount must be a number.');
        return;
    }

    var specialCharacters = confirm('Would you like special characters?');
    var numericCharacters = confirm('Would you like numbers?');
    var lowercaseCharacters = confirm('Would you like lowercase letters?');
    var uppercaseCharacters = confirm('Would you like uppercase Characters?');

    // Based on confirmations, type of characters are added to "possibleCharacterList" string
    if (specialCharacters) possibleCharacterList += specialCharacterList;
    if (numericCharacters) possibleCharacterList += numericCharactersList;
    if (lowercaseCharacters) possibleCharacterList += lowercaseCharactersList;
    if (uppercaseCharacters) possibleCharacterList += uppercaseCharactersList;

    // Function doesn't run if not selected 
    if (!specialCharacters && !numericCharacters && !lowercaseCharacters && !uppercaseCharacters) {
        alert('At least one character type must be selected.');
        return;
    }

    for (var i = 0; i < passwordLength; i++) {
        password += possibleCharacterList.charAt(Math.floor(Math.random() * possibleCharacterList.length));
    }

    // Brings password to text box 
    passwordText.textContent = password;
}

// The generating button!
generateButton.addEventListener("click", makePassword);

