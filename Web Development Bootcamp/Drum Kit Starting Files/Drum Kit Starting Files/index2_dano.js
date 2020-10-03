//taking the buttons from HTML

var buttons = document.querySelectorAll(".drum");

//the action functions (what will happen)

var sounds ={
    "w": "tom-1.mp3",
    "a": "tom-2.mp3",
    "s": "tom-3.mp3",
    "d": "tom-4.mp3",
    "j": "kick-bass.mp3",
    "k": "snare.mp3",
    "l": "crash.mp3",
};

function makeSound(key) {
    if (!(key in sounds)) {
        alert('unknown key pressed');
        return;
    }
    var sound = new Audio("sounds/" + sounds[key]);
    sound.play();
}

function makeAnimation(activebutton) {    
    activebutton.classList.add("pressed");
    setTimeout(function() {
        activebutton.classList.remove("pressed")
    }, 100)
}

//Detecting Button press

function clickHandler() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    makeAnimation(this);
}

//Detecting Keyboard press

function keyHandler(event) {
    makeSound(event.key);
    var activebutton = document.querySelector("." + event.key);
    makeAnimation(activebutton);
}

//adding eventlisteners for button press and keyboard press

document.addEventListener("keydown", keyHandler)
for (i=0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", clickHandler);
}

function handler(sound_file, animation_effect) {
    makeSound(sound_file);
    makeAnimation(animation_effect);
}

function makeSound(sound_file) {
    var sound = new Audio("sounds/" + sound_file);
    sound.play();
}


document.querySelectorAll(".tom1").addEventListener("click", () => handler("tom-1.mp3", "splash"))
document.addEventListener("keydown w", () => handler("tom-1.mp3", "splash"))

document.querySelectorAll(".tom2").addEventListener("click", () => handler("tom-2.mp3", "splash"))
document.querySelectorAll(".tom3").addEventListener("click", () => handler("tom-3.mp3", "splash"))




