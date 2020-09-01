
var buttonColors=["red","green","blue","yellow"];
var randomChosenColor;
var randomNumber;
var gamepattern=[];
var userpattern=[];
var userChosenColor;
var level=0;
var started=false;
//var index=0;
//var flag=true;


$(document).keypress(function() {
    if (!started){
  //  $("#level-title").text("Level " + level);
    nextSequence();
    started=true;
  }
});

  function nextSequence() {
    // var randomChosenColor;
    // var randomNumber;
    userpattern=[];
    level++;
    $("h1").text("your level is "+level);
    randomNumber=Math.floor(Math.random()*4);
    randomChosenColor=buttonColors[randomNumber];
    gamepattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeIn().fadeOut().fadeIn();
    makeSound(randomChosenColor);
    // index++;
  }
  $(".btn").click(function() {
    userChosenColor=$(this).attr("id");
    userpattern.push(userChosenColor);
    //console.log(userpattern);
    makeSound(userChosenColor);
    animatePress(userChosenColor);
    //index++;
    checkAnswer(userpattern.length-1);
      // $("h1").text("your level is "+level);
      // level++;
    // if (userpattern===gamepattern)
    //   nextSequence();
  });
function makeSound(name){
  var audio= new Audio("sounds/"+name+".mp3");
  audio.play();
}
function animatePress(color) {
  $("#"+color).addClass("pressed");
  setTimeout(function () {  $("#"+color).removeClass("pressed");},100);
}
function checkAnswer(index) {
  if (userpattern[index]==gamepattern[index] )
  {
    if(userpattern.length===gamepattern.length){
    setTimeout(function () {
      nextSequence();
    },1000);
  }
  //nextSequence();
    console.log("continue");
  }
  else{
    var audio= new Audio("sounds/wrong.mp3");
    audio.play();
    console.log("game over");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    },200);
    $("h1").text("press any key to start");
    restart();
    //nextSequence();
    }
  }

function restart()
{
  level=0;
  gamepattern=[];
  started=false;
  //userpattern=[];

  //started=true;
}
