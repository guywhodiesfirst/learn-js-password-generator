const characters = ["A","B","C","D","E","F","G","H","I","J","K","L",
                    "M","N","O","P","Q","R","S","T","U","V","W","X",
                    "Y","Z","a","b","c","d","e","f","g","h","i","j",
                    "k","l","m","n","o","p","q","r","s","t","u","v",
                    "w","x","y","z","0","1","2","3","4","5","6","7", 
                    "8","9","~","`","!","@","#","$","%","^","&","*",
                    "(",")","_","-","+","=","{","[","}","]",",","|",
                    ":",";","<",">",".","?","/"];


let passwordEl1 = document.getElementById("password-el-1")
let passwordEl2 = document.getElementById("password-el-2")

function getRandomPassword(len=15) {
    let password = ""
    for(let i = 0; i < len; i++) {
        password += getRandomCharacter()
    }

    return password
}

function getRandomCharacter() {
    let index = Math.floor(Math.random() * characters.length)
    return characters[index]
}

function generatePasswords() {
    passwordEl1.textContent = getRandomPassword()
    passwordEl2.textContent = getRandomPassword()
}

function copyToClipboard(elementId) {
    let elementToCopy = document.getElementById(elementId)
    navigator.clipboard.writeText(elementToCopy.textContent)
    alert("Password copied")
}