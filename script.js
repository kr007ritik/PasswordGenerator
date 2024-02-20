// javascript code goes here
const generateBtn = document.getElementById("generate");
generateBtn.addEventListener('click', generatePassword);


function generatePassword() {
    const result = document.getElementById("result");
    const passLength = document.getElementById("length").value;
    const uppercase = document.getElementById("uppercase").checked;
    const lowercase = document.getElementById("lowercase").checked;
    const numbers = document.getElementById("numbers").checked;
    const symbols = document.getElementById("symbols").checked;

    let charset = "";
    if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) charset += "0123456789";
    if (symbols) charset += "!@#$%^&*()_+[]{}|;:,.<>?";

    let password = "";
    for (let i = 0; i < passLength; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    if(password.length <= 25){
        result.innerText = password;
    }else{
        result.innerText = "Password length should be less than 25";
    }
}