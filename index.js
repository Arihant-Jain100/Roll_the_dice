// alert("hello");


var randomnumber1 = Math.random()*6;
randomnumber1 = Math.floor(randomnumber1) + 1;
// alert(randomnumber1);
var randomdice = "dice"+randomnumber1+".png";
document.getElementById("player1").setAttribute("src", "images/"+randomdice);




var randomnumber2 = Math.random()*6;
randomnumber2 = Math.floor(randomnumber2) + 1;
// alert(randomnumber2);
var randomdice = "dice"+randomnumber2+".png";
document.getElementById("player2").setAttribute("src", "images/"+randomdice);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML= "player 1 win";
}
else if (randomnumber1 < randomnumber2){
    document.querySelector("h1").innerHTML = "player 2 win";
}
else{
    document.querySelector("h1").innerHTML = "Tie";
}