const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
let firstPasswordEl = document.getElementById("firstPassword")
let secondPasswordEl = document.getElementById("secondPassword")
function generatePasswords() {
        firstPasswordEl.textContent = ""
        secondPasswordEl.textContent = ""
    for( let i = 0; i < 15; i++) {
        
        let firstRandomPassword = Math.floor(Math.random()*characters.length)
        let secondRandomPassword = Math.floor(Math.random()*characters.length)
        firstPasswordEl.textContent += characters[firstRandomPassword]
        secondPasswordEl.textContent += characters[secondRandomPassword]

    }
    
}
function copyFirstPassword() {
    if (firstPasswordEl.textContent) {
        let copyOne = firstPasswordEl.textContent
        navigator.clipboard.writeText(copyOne)
        document.getElementById("custom-tooltip").style.display = "block";
        setTimeout( function() {
            document.getElementById("custom-tooltip").style.display = "none";
        }, 1000);
    }
}
function copySecondPassword() {
    if (secondPasswordEl.textContent) {
        let copyTwo = secondPasswordEl.textContent
        navigator.clipboard.writeText(copyTwo)
        document.getElementById("secondCustom-tooltip").style.display = "block";
        setTimeout( function() {
        document.getElementById("secondCustom-tooltip").style.display = "none";
        }, 1000);
    }
}

let checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})
