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
});

$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    animatePressed(userChosenColor);
    playSound(userChosenColor);
    if (userClickedPattern.length == gamePattern.length){
        validate();
    }
});

function nextSequence(){
    currentLevel++;
    $("#level-title").text("Level " + currentLevel.toString());
    started = true;
    if (started)
    {
        var randomNumber = Math.floor(Math.random() * 4);
        var randomChosenColour = buttonColours[randomNumber];
        gamePattern.push(randomChosenColour);
        animatePressed(randomChosenColour);
        playSound(randomChosenColour);
        console.log("end of nextSequence(), gamePatter: " + gamePattern)
    }
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

function validate(){
    var miss = false;
    for (var i = 0; i < gamePattern.length; i++){
        if (gamePattern[i] != userClickedPattern[i]){
            miss = true;
        }
    }
    if (miss){
        $("#level-title").text("Game over.")
    } else {
        userClickedPattern = [];
        setTimeout(function(){
            nextSequence();
        }, 1000);
    }
}