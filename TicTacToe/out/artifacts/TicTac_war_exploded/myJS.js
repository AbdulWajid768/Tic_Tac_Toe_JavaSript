var turn="X";
function Check(id) {
    var td=document.getElementById(id);
    var val=td.innerHTML;
    if(val=="EMPTY")
    {
        td.innerHTML=turn;
        if(turn=="X")
        {
            turn="O";
        }
        else
        {
            turn="X";
        }
        document.getElementById("p").innerText="Player " + turn + " turn";
    }
    checkWinner();
}
function checkWinner() {
    var td11=document.getElementById("11").innerHTML;
    var td12=document.getElementById("12").innerHTML;
    var td13=document.getElementById("13").innerHTML;
    var td21=document.getElementById("21").innerHTML;
    var td22=document.getElementById("22").innerHTML;
    var td23=document.getElementById("23").innerHTML;
    var td31=document.getElementById("31").innerHTML;
    var td32=document.getElementById("32").innerHTML;
    var td33=document.getElementById("33").innerHTML;
    if((td11 != "EMPTY" && td11==td12 && td12==td13) || (td21 != "EMPTY" && td21==td22 && td22==td23) || (td31 != "EMPTY" && td31==td32 && td32==td33) || (td11 != "EMPTY" && td11==td21 && td21==td31) || (td12 != "EMPTY" && td12==td22 && td22==td32) || (td13 != "EMPTY" && td13==td23 && td23==td33) || (td11 != "EMPTY" && td11==td22 && td22==td33) || (td13 != "EMPTY" && td13==td22 && td22==td31))
    {
        if(turn=="X")
        {
            turn="O";
        }
        else
        {
            turn="X";
        }
        alert("Winner is the Player with turn : " + turn);
        document.getElementById("p").innerText="Game Ended";
        return;
    }
    if(td11 != "EMPTY" && td12 != "EMPTY" && td13 != "EMPTY" && td21 != "EMPTY" && td22 != "EMPTY" && td23 != "EMPTY" && td31 != "EMPTY" && td32 != "EMPTY" && td33 != "EMPTY")
    {
        alert("Game is Drawn");
        document.getElementById("p").innerText="Game Ended";
    }
}