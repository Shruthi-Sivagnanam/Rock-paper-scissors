const screen_width= screen.width;
const screen_height=screen.height;
var x;
var rand;
var rockbutton=document.getElementById("rock"); 
var paperbutton=document.getElementById("paper"); 
var scissorsbutton=document.getElementById("scissors"); 
var computer_score=0;
var player_score=0;
//adding addEventListener function to the buttons.
rockbutton.addEventListener("click",player_rock_turn);
paperbutton.addEventListener("click",player_paper_turn);
scissorsbutton.addEventListener("click",player_scissors_turn);
//Visible only for computer laptop and tab view.
if(screen_width<870||screen_height<570)
{
        x=document.body;
        x.style.backgroundColor="white";
        x.style.opacity=0;
        alert("This game is disabled in mobile view!! ")
}
//Generating randnumber.
function getRandomInt(max) 
{
        return Math.floor(Math.random() * max);
}
//condition for rock paper and scissors(Players_turn).
function player_rock_turn()
{
        document.getElementById("player").innerHTML="<i class='fas fa-hand-rock'></i>";
        computer_turn();
        if(rand==0)
                tie();
        if(rand==1)
                lossed();
        if(rand==2)
                win();
        check();
}
function player_paper_turn()
{
        document.getElementById("player").innerHTML="<i class='fas fa-hand-paper '></i>";
        computer_turn();
        if(rand==0)
                win();
        if(rand==1)
                tie();
        if(rand==2)
                lossed();
        check();
}
function player_scissors_turn()
{
        document.getElementById("player").innerHTML="<i class='fas fa-hand-scissors'></i>";
        computer_turn();
        if(rand==0)
                lossed();
        if(rand==1)
                win();
        if(rand==2)
                tie();
        check();
}
//Computer_turn
function computer_turn()
{
        rand=getRandomInt(3);
        console.log(rand);
        switch(rand)
        {
                case 0:
                        document.getElementById("computer").innerHTML="<i class='fas fa-hand-rock'></i>";
                        break;
                case 1:
                        document.getElementById("computer").innerHTML="<i class='fas fa-hand-paper'></i>";
                        break;
                case 2:
                        document.getElementById("computer").innerHTML="<i class='fas fa-hand-scissors'></i>";
        }
}
function win()
{
        document.getElementById("mes").innerHTML="You won!!";
        document.getElementById("mes").style.color="rgb(8, 94, 8)";
        player_score++;
        document.getElementById("PlayerScore").innerHTML=player_score;
}
function tie()
{
        document.getElementById("mes").innerHTML="It is a tie!!";
        document.getElementById("mes").style.color="orange";
}
function lossed()
{
        document.getElementById("mes").innerHTML="You lossed!";
        document.getElementById("mes").style.color="red";
        computer_score++;
        document.getElementById("ComputerScore").innerHTML=computer_score;
}
function check()
{
        if(computer_score==5)
        {
                document.getElementById("mes").innerHTML="You lossed the game better luck next time!";
                document.getElementById("mes").style.color="red";
                document.getElementById("rock").disabled=true;
                document.getElementById("paper").disabled=true;
                document.getElementById("scissors").disabled=true;
                document.getElementById("mes1").innerHTML="Refresh the page to play again!!"
                document.getElementById("ballon-img").innerHTML="<img src='./img/ballon.gif' alt='ballon'>";
                document.getElementById("ballon-img").style.right="0px";
                document.getElementById("ballon-img").style.transform="scaleX(-1)";
        }
        if(player_score==5)
        {
                document.getElementById("mes").innerHTML="Victory!! You have won the game";
                document.getElementById("mes").style.color="rgb(8, 94, 8)";
                document.getElementById("rock").disabled=true;
                document.getElementById("paper").disabled=true;
                document.getElementById("scissors").disabled=true;
                document.getElementById("mes1").innerHTML="Refresh the page to play again!!"
                document.getElementById("ballon-img").innerHTML="<img src='./img/ballon.gif' alt='ballon'>"
        }
}