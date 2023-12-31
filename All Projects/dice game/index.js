var number1=Math.floor(Math.random()*6)+1;
var number2=Math.floor(Math.random()*6)+1;
function changeImage(number,index){
    /* for transition effect*/
    document.querySelectorAll(".image")[index].classList.add("clicked");
    setTimeout(function() {
        document.querySelector(".image")[index].classList.remove("clicked");
    }, 300);
    var imagesource="images/dice "+number+".png";
    document.querySelectorAll(".image")[index].setAttribute("src",imagesource);
}

/* on refreshing*/

// changeImage(number1,0);
// changeImage(number2,1);

// if(number1>number2){
//     document.querySelector("h1").textContent="Player 1 won";
// }
// else if(number2>number1){
//     document.querySelector("h1").textContent="Player 2 won";
// }
// else{
//     document.querySelector("h1").textContent="   It's tie";
// }    

/* on clicking images*/
document.querySelectorAll(".image")[0].addEventListener("click", function () {
    changeImage(number1, 0);
    document.querySelector("h1").textContent="Click on Dice-2";
});

document.querySelectorAll(".image")[1].addEventListener("click", function () {
    changeImage(number2, 1);
    if(number1>number2){
        document.querySelector("h1").textContent="Player 1 won.   Refresh Me to play again ";
    }
    else if(number2>number1){
        document.querySelector("h1").textContent="Player 2 won.   Refresh Me to play again";
    }
    else{
        document.querySelector("h1").textContent="   It's tie.    Refresh Me to play again";
    }
});
