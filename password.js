const password = "p@ssWord"
const characters = password.split('')

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const capitalLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const specialChars = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', '.', '(', ')', '{', '}', '[', ']', '~']


var hasLetter = false
var hasNumber = false
var hasCapitalLetter = false
var hasSpecialChar = false

for (let i = 0; i < characters.length; i++){
    for (let j = 0; j < letters.length; j++){
        if (letters[j] === characters[i]){
            hasLetter = true
        }
    }
}

for (let i = 0; i < characters.length; i++){
    for (let j = 0; j < numbers.length; j++){
        if (numbers[j] == characters[i]){
            hasNumber = true
        }
    }
}

for (let i = 0; i < characters.length; i++){
    for (let j = 0; j < capitalLetters.length; j++){
        if (capitalLetters[j] == characters[i]){
            hasCapitalLetter = true
        }
    }
}

for (let i = 0; i < characters.length; i++){
    for (let j = 0; j < specialChars.length; j++){
        if (specialChars[j] == characters[i]){
            hasSpecialChar = true
        }
    }
}

if (password.length < 10){
    console.log("Password needs to be at least 10 characters long.")
}
if (hasLetter === false){
    console.log("Password needs to have at least one letter.")
}
if (hasNumber === false){
    console.log("Password needs to have at least one number.")
}
if (hasCapitalLetter === false){
    console.log("Password needs to have at least one capital letter.")
}
if (hasSpecialChar === false){
    console.log("Password needs to have at least one special character.")
}
if (password.length >= 10 & hasLetter === true & hasNumber === true & hasCapitalLetter === true & hasSpecialChar === true){
    console.log("Acceptable password.")
}