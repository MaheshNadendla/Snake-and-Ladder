let player1count=0;
let player2count=0;
let playersCount=0;
let DieCount=0;
function ThrowDie()
{
    let x= Math.random();

    if(x>0 && x<=0.16666)
    {
        DieCount=1;
    }
    else if(x>0.16666 && x<=0.33333)
    {
        DieCount=2;
    }
    else if(x>0.33333 && x<=0.5)
    {
        DieCount=3;
    }
    else if(x>0.5 && x<=0.66666)
    {
        DieCount=4;
    }
    else if(x>0.66666 && x<=0.83333)
    {
        DieCount=5;
    }
    else if(x>0.83333 && x<=1)
    {
        DieCount=6;
    }

    console.log(DieCount);
    return DieCount;


}

let k='Box1';
let m='Box1';
function Players()
{
   
    
    if(playersCount%2==0)
    {
        

        let t=document.getElementById(k).innerHTML;

        console.log("t : "+t)

        if(t==`<img src="images/coin2.png" alt="X"><img src="images/coin1.png" alt="O">`)
            document.getElementById(k).innerHTML=`<img src="images/coin1.png" alt="O">`;
        else
            document.getElementById(k).innerHTML="";



        let x=ThrowDie();
        document.querySelector('.DiceNumber1').innerHTML=`X : ${x}`;
        document.querySelector('.DiceNumber2').style="background-color: white; color: black;";
        document.querySelector('.DiceNumber1').style="background-color: black; color: white;";
        


        player1count+=x;

        if(player1count>100)
            player1count=player1count-x;

        //lader

        if(player1count==1)
            player1count=38;

        if(player1count==4)
            player1count=14;

        if(player1count==9)
            player1count=31;
        
        if(player1count==21)
            player1count=42;

        if(player1count==28)
            player1count=84;

        if(player1count==51)
            player1count=67;

        if(player1count==71)
            player1count=91;

        if(player1count==80)
            player1count=100;




        if(player1count==17)
            player1count=7;

        if(player1count==54)
            player1count=34;

        if(player1count==62)
            player1count=19;
        
        if(player1count==64)
            player1count=60;

        if(player1count==87)
            player1count=24;

        if(player1count==93)
            player1count=73;

        if(player1count==95)
            player1count=75;

        if(player1count==98)
            player1count=79;

        



        console.log("player : 1 "+player1count);

        k=`Box${player1count}`;

        let q=document.getElementById(k).innerHTML;
        if(q==`<img src="images/coin1.png" alt="O">`)
            document.getElementById(k).innerHTML=`<img src="images/coin1.png" alt="O"><img src="images/coin2.png" alt="X">`;
        else
            document.getElementById(k).innerHTML=`<img src="images/coin2.png" alt="X">`;

        if(player1count=="100")
            document.querySelector('.Dice').innerHTML=`<button class="ResetGame" onclick="ResetGame()">ResetGame</button> <span>X win the Game</span>`;
 


    }
    else{

        let s=document.getElementById(m).innerHTML;

        console.log("s : "+s)

        if(s==`<img src="images/coin1.png" alt="O"><img src="images/coin2.png" alt="X">`)
            document.getElementById(m).innerHTML=`<img src="images/coin2.png" alt="X">`;
        else
            document.getElementById(m).innerHTML="";

        let x=ThrowDie();
        document.querySelector('.DiceNumber2').innerHTML=`O : ${x}`;

        document.querySelector('.DiceNumber1').style="background-color: white; color: black;";
        document.querySelector('.DiceNumber2').style="background-color: black; color: white;";

        player2count+=x;

        if(player2count>100)
            player2count=player2count-x;

        if(player2count==1)
            player2count=38;

        if(player2count==4)
            player2count=14;

        if(player2count==9)
            player2count=31;
        
        if(player2count==21)
            player2count=42;

        if(player2count==28)
            player2count=84;

        if(player2count==51)
            player2count=67;

        if(player2count==71)
            player2count=91;

        if(player2count==80)
            player2count=100;




        if(player2count==17)
            player2count=7;

        if(player2count==54)
            player2count=34;

        if(player2count==62)
            player2count=19;
        
        if(player2count==64)
            player2count=60;

        if(player2count==87)
            player2count=24;

        if(player2count==93)
            player2count=73;

        if(player2count==95)
            player2count=75;

        if(player2count==98)
            player2count=79;


        

        console.log("player : 2 "+player2count);

        m=`Box${player2count}`;



        let r=document.getElementById(m).innerHTML;
        console.log("r : "+r);
        if(r==`<img src="images/coin2.png" alt="X">`)
            document.getElementById(m).innerHTML=`<img src="images/coin2.png" alt="X"><img src="images/coin1.png" alt="O">`;
        else
            document.getElementById(m).innerHTML=`<img src="images/coin1.png" alt="O">`;


            if(player2count=="100")
                document.querySelector('.Dice').innerHTML=`<button class="ResetGame" onclick="ResetGame()">ResetGame</button> <span>O win the Game</span>`;



    }
    playersCount++;
}


function ResetGame()
{
    player1count=0;
    player2count=0;
    let m;
    for(let i=1;i<=100;i++)
    {
        m=`Box${i}`;
        document.getElementById(m).innerHTML="";
    }

    document.querySelector('.Dice').innerHTML=`<span class="DiceNumber1">Start</span>
    <button onclick="Players()">Dice</button>
    <span class="DiceNumber2">Start</span>`;
}