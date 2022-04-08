var bombo = new Audio();
bombo.src = "../sounds-hit-Domboom/bombo (1).wav";

var crash = new Audio();
crash.src = "../sounds-hit-Domboom/crash.wav";

var hit = new Audio();
hit.src = "../sounds-hit-Domboom/hit-hat.wav";

var redoblante = new Audio();
redoblante.src = "../sounds-hit-Domboom/redoblante.wav";

var tom1 = new Audio();
tom1.src = "../sounds-hit-Domboom/tom1.wav";

var tom2 = new Audio();
tom2.src = "../sounds-hit-Domboom/tom2.wav";

var tom3 = new Audio();
tom3.src = "../sounds-hit-Domboom/tom3.wav";

var tom4 = new Audio();
tom4.src = "../sounds-hit-Domboom/tom4.wav";


//MODIFICACIÓ DEL DOM

//Crear variables del contenidor i del botó
let newViewContainer = document.getElementsByClassName('wrapper')[0];
let actionButton = document.getElementsByClassName('boto_central')[0];

//Crear i aplicar funció al click

//Manera 1
function erase() {
    newViewContainer.innerHTML = "";
    let patata = document.createElement('p');
    patata.innerText = 'patata';
    patata.setAttribute("class", "patata");
    newViewContainer.appendChild(patata);
}

actionButton.addEventListener('click', erase);




// //Manera 2
// //Funció fletxa
// actionButton.onclick = function(){
//     newViewContainer.innerHTML="";
// }
// //o
// //Funció
// actionButton.onclick = ()=>{
//     newViewContainer.innerHTML="";
// }

// //Manera 3
// actionButton.addEventListener('click', function (){
//     newViewContainer.innerHTML="";
// })
// actionButton.addEventListener('click', ()=>{
//     newViewContainer.innerHTML="";
// })