//Displayed view
let view = 'view1';

//Play
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

let sounds = [bombo, crash, hit, redoblante, tom1, tom2, tom3, tom4];

//View Mobile 2
let wrapper = document.getElementsByClassName('wrapper')[0];
let actionButton = document.getElementsByClassName('boto_central')[0];
let componentsClassName = ['header', 'row_1', 'row_2', 'row_3'];

function displayView2(components) {
    let backButton = document.createElement('p');
    backButton.innerHTML = `<i class="fa-solid fa-arrow-left"></i>`;
    backButton.setAttribute('class', 'back_button');
    backButton.id = 'back_button';
    wrapper.appendChild(backButton);

    components.forEach(component => {
        view = 'view2'
        let element = document.getElementById(component);

        if (component != 'row_2') {
            element.innerHTML = "";
            if (component == 'row_1') {
                element.classList.add('circle_position');

                let circleText = document.createElement('p');
                circleText.innerText = "Hit";
                circleText.setAttribute('class', 'circle_text font')

                let circle = document.createElement('div');
                circle.setAttribute('class', 'circle');
                circle.id = 'dombo_button';
                // console.log(circle.id)

                let circleContainer = document.createElement('div');
                circleContainer.classList.add('circle_container');

                circle.appendChild(circleText);
                circleContainer.appendChild(circle);
                element.appendChild(circleContainer);
            } else {
                // console.log(component)
            }
        } else {
            element.classList.remove('displayNone');
        }
    });
}


window.addEventListener('DOMContentLoaded', (event) => {
    console.log(window.innerWidth);
    console.log(window.innerHeight)
    if(window.innerWidth <= 820){
        actionButton.onclick = () => {
            displayView2(componentsClassName);
            if (view == 'view2') {
                let domboButton = document.getElementById('dombo_button');
                domboButton.onclick = (() => {
                    let sound = sounds[Math.floor(Math.random() * sounds.length)];
                    sound.play();
                })
                let backButton = document.getElementById('back_button');
                backButton.onclick = (() => {
                    location.reload();
                })
            } else {
                console.log('Something went wrong');
            }
        }
    }else{
        actionButton.onclick = (()=>{
            location.reload();
        })
    }
});