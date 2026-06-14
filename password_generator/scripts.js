// createPasswords = document.getElementById("#create-passwords")
/* 4. I think referencing this DOM object is quite useless, as this won't change
layout in the page, what will change are the boxes that hold the passwords. */
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const PASSWORD_LENGTH = 15;
let passwordDivOneEl = document.getElementById(".password-div-one");
let passwordDivTwoEl = document.getElementById(".password-div-two");
let buttonClicked = false;
/* 6. Now that I have the logic of the button ready, I need to remember how I 
can transmit the information of the button being clicked to the javascript...
in fact, now that I realize I am doing it backwards to what I am used to. 
Normally I insert the function in the HTML instead of using a flag.  */


function generateRandomPassword(){
    let randomPassword = "";
    for (let i = 0; i < PASSWORD_LENGTH; i++){
        let randomIndex = Math.floor(Math.random() * characters.length);
        randomPassword += characters[randomIndex];
    }

    return randomPassword
}

let randomPasswordZero = ""
function generateRandomPasswordArgument(passwordString){
    for (let i = 0; i < PASSWORD_LENGTH; i++){
        let randomIndex = Math.floor(Math.random() * characters.length);
        passwordString += characters[randomIndex];
    }
    return passwordString
}

generateRandomPasswordArgument(randomPasswordZero)
console.log(randomPasswordZero)

/* 5. I feel that the implementation of `generateRandomPasswordArgument()` fails
because even though the function is modifying `randomPasswordZero` when the function
ends doesn't know how to store that value in the string. It would be the equivalent
of passing a value in C without &: The function instead of modifying the value that you
given it, it creates a copy, and when the function ends as it doesn't know what to do
with the value, it simply erases it. Even when I tell the function to return 
`passwordString` it doesn't store the value. How could I get the behavior I expect?  */

function displayPasswords(){
    let randomPasswordOne = generateRandomPassword();
    let randomPasswordTwo = generateRandomPassword();
    passwordDivOneEl.textContent = randomPasswordOne;
    passwordDivTwoEl.textContent = randomPasswordTwo;
}

if (buttonClicked){
    passwordDivOneEl.textContent = randomPasswordOne;
    passwordDivTwoEl.textContent = randomPasswordTwo;
}



