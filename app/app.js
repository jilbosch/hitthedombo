//FLAGS
let view = 'view1';
let burgerOpened = false;


//PLAY
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

//GLOBAL
let wrapper = document.getElementsByClassName('wrapper')[0];
let actionButton = document.getElementsByClassName('boto_central')[0];

//BURGER BUTTON
//VARS
let burgerButton = document.getElementById('burgerButton');
let burgerButtonContainer = document.getElementsByClassName('burgerItems_container')[0];

let burgerButtonDisplay = document.getElementById('burgerButton_display');

//EVENT
burgerButton.onclick = (() => {
    if (burgerOpened === false) {
        burgerOpened = true;
        // console.log(burgerOpened);
        burgerButton.classList.remove('burgerButtonClosed');
        burgerButton.classList.add('burgerButtonOpened');

        burgerButtonContainer.innerHTML = "";
        burgerButtonContainer.setAttribute('style', 'align-items: center;');

        let burgerButtonComponents = ['Premium', 'Help', 'Dowload', 'Sign up', 'Log in'];

        burgerButtonComponents.forEach((component) => {
            let element = document.createElement('div');
            setTimeout(() => {
                element.setAttribute('class', 'burgerButton_item font');
                element.innerText = component;

                if (component === 'Premium') {
                    element.setAttribute('style', 'border-top: none;');
                } else if (component === 'Sign up') {
                    element.setAttribute('style', 'color:green;');
                } else {

                }

                burgerButtonContainer.appendChild(element);

            }, 500)

        })
    } else {
        burgerOpened = false;

        burgerButtonContainer.innerHTML = "";

        for (let i = 0; i <= 2; i++) {
            let bar = document.createElement('div');
            bar.classList.add('burgerButton_bar');

            if (i === 1) { bar.setAttribute('style', 'width: 35%;') } else { }

            burgerButtonContainer.appendChild(bar);
            burgerButtonContainer.setAttribute('style', 'align-items: end');
        }

        burgerButton.classList.remove('burgerButtonOpened');
        burgerButton.classList.add('burgerButtonClosed');
    }

})

//VIEW 2 MOBILE
let componentsClassName = ['header', 'row_1', 'row_2', 'row_3'];

function displayView2(components) {
    burgerButtonDisplay.setAttribute('style', 'display:none;');
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

//ENABLE FUNCTIONS
window.addEventListener('DOMContentLoaded', (event) => {
    console.log(window.innerWidth);
    console.log(window.innerHeight)
    if (window.innerWidth <= 820) {
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
    } else {
        actionButton.onclick = (() => {
            location.reload();
        })
    }
});