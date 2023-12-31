var gameover=false;
var level=0;
function fadeeffect(randomNumber){
    const button = $('.btn' + randomNumber);
    button.fadeIn(200).fadeOut(200);
}
function soundeffect(randomChoosenColor){
    var audio=new Audio(randomChoosenColor+".mp3");
    audio.play();
}
function animatePress(randomNumber){
    document.querySelector(".btn" + randomNumber).classList.add("pressed");
    setTimeout(function() {
        document.querySelector(".btn" + randomNumber).classList.remove("pressed");
    }, 100);
}
function startGame(){
    $("h1").text("Level "+level);
    gamePattern=[];
    for(var i=0;i<level;i++){
        var randomNumber=Math.floor(Math.random()*4);
        fadeeffect(randomNumber);
        randomChoosenColor=buttonColors[randomNumber];
        soundeffect(randomChoosenColor);
        gamePattern.push(randomNumber);
    }
   
    for(var i=0;i<level;i++){
        if(gameover){
            break;
        }
        $(".btn").click(function() {
            var id=$(this).attr("id");
            fadeeffect(gamePattern[i]);
            soundeffect(buttonColors[gamePattern[i]]);
            if(id!=gamePattern[i]){
                $(".heading").html('<h1>Game Over</h1><h3>Press Any Key to Start Again.</h3>');
                gameover=true;
                level=0;
            }
        } );
    };
}  

$(document).keydown(function () {
        startGame();
        level++;
}
);


