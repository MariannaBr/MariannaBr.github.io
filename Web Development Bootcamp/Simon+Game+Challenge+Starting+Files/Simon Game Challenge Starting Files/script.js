// Global variables

var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var start = true;

// Action fuctions

function animateFlash(button, color) {
    button.removeClass(color);
    setTimeout(() => button.addClass(color), 100);
}

function playSound(sound) {
    var soundToPlay = new Audio("sounds/" + sound + ".mp3");
    soundToPlay.play();
}

function animatePress(currentColor) {
    currentColor.addClass("pressed");
    setTimeout(() => currentColor.removeClass("pressed"), 100);
}

function compareArrays(arr1, arr2) {
    var i = arr1.length;
    while (i--) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

function gameComparison() {
    if (compareArrays(gamePattern, userClickedPattern)) {
        level++;
        userClickedPattern = []
        setTimeout(() => nextSequence(), 500);
    }
    else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(() => $("body").removeClass("game-over"), 100);
        $("#level-title").html("Game over! Press A Key to Start.");
        gamePattern = [];
        userClickedPattern = [];
        start = true;
    }
}

// Putting together

function nextSequence() {
    $("#level-title").html("Level " + level);
    var randomNumber = Math.floor(Math.random() * 3);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    setTimeout(() => animateFlash($("#" + randomChosenColour), randomChosenColour), 100);
    playSound(randomChosenColour);
}


//Player setting

$(".btn").click(function() {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    animatePress($(this));
    playSound(userChosenColor);
    if (userClickedPattern.length === gamePattern.length) {
        gameComparison();
    }
});

// function buttonHandler() {
//     console.log(this);
//     var userChosenColor = $(this).attr("id");
//     userClickedPattern.push(userChosenColor);
//     console.log(userChosenColor);
//     animatePress($(this));
//     playSound(userChosenColor);
// }
// $(".btn").click(buttonHandler);

$(document).keypress(function() {
    if (start) {
        nextSequence();
        start = false;
    }
})




