var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var currentLevel = 0;

$(document).keydown(function(){
    if (!started){
        $("#level-title").text("Level " + currentLevel.toString());
        nextSequence();
    }
    started = true;
});

$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    animatePressed(userChosenColor);
    playSound(userChosenColor);
});

function nextSequence(){
    currentLevel++;
    $("#level-title").text("Level " + currentLevel.toString());
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    animatePressed(randomChosenColour);
    playSound(randomChosenColour);
}

function playSound(colour){
    var audio = new Audio("sounds/" + colour + ".mp3");
    audio.play();
}

function animatePressed(currentColour){
    $("." + currentColour).addClass("pressed");
    setTimeout(function(){
        $("." + currentColour).removeClass("pressed");
    }, 200);
}