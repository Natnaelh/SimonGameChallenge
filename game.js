var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

var level = 0;
var started = false;

$(document).keypress(function(e) {
  if (!started) {
    $("#bigtitle").text("Level " + level);
    nextSequence();
    started = true;
  }
});

function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#bigtitle").text("Level " + level);

  var randomNumber = Math.floor((Math.random() * 4));
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeIn(500).fadeOut(500).fadeIn(500);
  playSound(randomChosenColor);

}

$(".btn").click(function(event) {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  $(userChosenColor).addClass("#pressed");
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(level);
  // console.log(userClickedPattern);
});

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}



function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}


function checkAnswer(currentlevel) {
  if (gamePattern[currentlevel] === userClickedPattern[currentlevel]) {
    console.log("Success");
    console.log(gamePattern, userClickedPattern);
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("Wrong");
    playSound("wrong");
    $("#bigtitle").addClass("game-over");
    setTimeout(function(){
      $("#bigtitle").removeClass("game-over");
    },200);
    $("#bigtitle").text("Game Over, Press Any Key to Restart");
    startOver();
  }

}

function startOver(){
    level = 0;
    gamePattern = 0;
    started = false;

}






//
// // manupilating css styles
// $("h1").addClass("bigtitle margining");
// // $("button").addClass("bigtitle margining");
//
//
// randNum = Math.floor(Math.random()*6)+1;

// manupilating texts
// $("img").attr("src", "dice"+randNum+".png");
// $("button").html("<em>Hey</em>");
// $("a").attr("href" ,"https://www.github.com");
// $("a").html("<strong>Github Link</strong>");
// // alert("dice"+randNum+".png");
// $("button").text("Hello");




// adding event listeners
// $("h1").click(function(){
//   $("h1").css("color", "grey");
// });

// $("button").click(function(){
//   $("h1").css("color", "purple");
// });
//
//
// $("body").keypress(function(event){
//   $("h1").text(event.key);
// });
