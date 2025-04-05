// pegando o numero de botoes com a classe "drum"
var drumButtons = document.querySelectorAll(".drum");

for (var i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML); // toca o som
        buttonAnimation(buttonInnerHTML); // faz a animacao
    });
}

// detectando o pressionar de uma tecla
document.addEventListener("keydown", function (event) {
    makeSound(event.key); // toca o som
    buttonAnimation(event.key); // faz a animacao
});

// funcao que toca o som correspondente a tecla
function makeSound(key) {
    switch (key) {
        case "w":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case "a":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;

        case "s":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        default:
             alert("tecla invalida: " + key);
    }
}

// funcao para animacao do botao pressionado
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    if (activeButton) {
        activeButton.classList.add("pressed"); // adiciona a classe "pressed"

        setTimeout(function () {
            activeButton.classList.remove("pressed"); // remove a classe depois de 100ms
        }, 100);
    }
}
