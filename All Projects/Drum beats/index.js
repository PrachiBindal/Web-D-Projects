function playsound(key){
    /* by indexing method*/
    // if(i<4){
    //     var audio=new Audio("./sounds/tom-"+(4-i)+".mp3");
    //     audio.play();
    // }
    // else if(i==4){
    //     var audio=new Audio("./sounds/snare.mp3");
    //     audio.play();
    // }
    // else if(i==5){
    //     var audio=new Audio("./sounds/crash.mp3");
    //     audio.play();
    // }
    // else{
    //     var audio=new Audio("./sounds/kick-bass.mp3");
    //     audio.play();
    // }
    document.querySelector("." + key).classList.add("pressed");
    
    // Remove the class after a short delay (e.g., 100 milliseconds) to remove the box shadow effect
    setTimeout(function() {
        document.querySelector("." + key).classList.remove("pressed");
    }, 300);

    switch(key){
        case "w":
            var audio=new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;   
        default:
            console.log(key);                         
    }
    
}

/* indexing method taking array*/
// function handleButtonClick() {
//     var buttonIndex = Array.from(document.querySelectorAll(".drum")).indexOf(this);
//     playsound(buttonIndex);
//   }

/* making sound using click */
var length_drum=document.querySelectorAll(".drum").length;
for(var i=0;i<length_drum;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var handlebuttonKey=this.innerHTML;
        playsound(handlebuttonKey);
    });
}
/* making sound using keys*/
for(var i=0;i<length_drum;i++){
    document.querySelectorAll(".drum")[i].addEventListener("keypress",function(event){
        playsound(event.key);
    });
}