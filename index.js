var tom1Sound  = new Audio("sounds/tom-1.mp3");
var tom2Sound  = new Audio("sounds/tom-2.mp3");
var tom3Sound  = new Audio("sounds/tom-3.mp3");
var tom4Sound  = new Audio("sounds/tom-4.mp3");
var snareSound = new Audio("sounds/snare.mp3");
var kickSound  = new Audio("sounds/kick-bass.mp3");
var crashSound = new Audio("sounds/crash.mp3");

document.querySelectorAll(".drum").forEach(b => b.addEventListener("click", handleClick));
document.querySelector("body").addEventListener("keydown", handleKeyDown);

function makeSound(key)
{
    var sound;

    switch (key) {
        case "w":
            sound = tom1Sound;
            break;
    
        case "a":
            sound = tom2Sound;
            break;
    
        case "s":
            sound = tom3Sound;
            break;
    
        case "d":
            sound = tom4Sound;
            break;
    
        case "j":
            sound = snareSound;
            break;
    
        case "k":
            sound = crashSound;
            break;
    
        case "l":
            sound = kickSound;
            break;
    
        default:
            alert("Unknow input: "+key)
            return;
    }
    sound.play();
}

function buttonAnimation(key) {
    var activeButton = document.querySelector("."+key);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}

function handleClick() {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
}

function handleKeyDown(e) {
    makeSound(e.key);
    buttonAnimation(e.key);
}