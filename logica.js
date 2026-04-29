let button1=document.getElementById("button1")
let button2=document.getElementById("button2")
let numero=document.getElementById("numero")
let contador=0

button1.addEventListener("click",suma)
function suma(){
contador++
numero.textContent=contador

}
button2.addEventListener("click",resta)
function resta(){
contador--
numero.textContent=contador

}