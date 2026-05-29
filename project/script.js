document.getElementById("text").innerHTML = "Bae do you love me"
let textEl = document.getElementById("text")
function no(){
    textEl.textContent = "ghai babe you dont love me" 
    textEl.style.color = "red"

}
function yes(){
    textEl.textContent = "Awwwww i love you too"
    textEl.style.color = "blue"
}
function reset(){
    textEl.textContent = "Babe do you love me"
    textEl.style.color = "grey"
}