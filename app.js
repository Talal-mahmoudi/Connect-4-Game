let connectFourBoard = document.getElementById("connect-four-board");
let p1= document.getElementById("p1");
let p2 = document.getElementById("p2");


let player1Display = document.getElementById("player1");
let player2Display = document.getElementById("player2");
let resetButton = document.getElementById("restart");


let submitNames = document.getElementById("submitButton");
let rows = 6;
let columns = 7;
let win = false;
let player = ['Red', 'Green'];
let currentPlayer = 'red';



let board = [
    [undefined,undefined,undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined,undefined,undefined]
];
player1Display.style.borderBottom = "solid 5px blue";

let columnOne = document.getElementsByTagName("button")[1];
let columnTwo = document.getElementsByTagName("button")[2];
let columnThree = document.getElementsByTagName("button")[3];
let columnFour = document.getElementsByTagName("button")[4];
let columnFive = document.getElementsByTagName("button")[5];
let columnSix = document.getElementsByTagName("button")[6];
let columnSeven = document.getElementsByTagName("button")[7];
// console.log(columnSeven.id);

function setPlayerNames(){
    player1Display.textContent = p1.value;
    player2Display.textContent = p2.value;
    p1.value = player1Display.textContent;
    p2.value = player2Display.textContent;
}
submitNames.addEventListener("click", setPlayerNames);



let numOfSpacesOnBoard = 0;
function fillBoard(){
    for(let r=0; r<6; r++){
        for(let c = 0; c<7; c++){
            let newSpace = document.createElement("div");
            newSpace.classList.add("cell");
            numOfSpacesOnBoard++;
            // newSpace.textContent = numOfSpacesOnBoard-1;
            board[r][c] = newSpace;

            
            
            connectFourBoard.append(newSpace);
        }
    }
}
window.addEventListener("DOMContentLoaded", fillBoard);





function whichColumn(columnNum){
    let i=41;
    let columnOfCells = parseInt(columnNum)+34;
    let arrayOfCells = document.getElementsByClassName("cell");
    // console.log(columnOfCells);
    while(columnOfCells > -1){
        if(arrayOfCells[columnOfCells].style.backgroundColor == ''){
            let tempCell = columnOfCells;
            arrayOfCells[columnOfCells].style.backgroundColor =currentPlayer;
            updateBoard(tempCell);
            switchPlayers();
            columnOfCells = -1;            
        }
        else{
            columnOfCells = columnOfCells-7;
        }
    }
}
function updateBoard(position){
    let i=-1;
    for(r=0; r<6; r++){
        for(c=0;c<7;c++){
            i++;
            if(i==position){
                board[r][c] = currentPlayer;
            }
        }
    }
}

columnOne.addEventListener("click", changeColor)
columnTwo.addEventListener("click", changeColor)
columnThree.addEventListener("click", changeColor)
columnFour.addEventListener("click", changeColor)
columnFive.addEventListener("click", changeColor)
columnSix.addEventListener("click", changeColor)
columnSeven.addEventListener("click", changeColor)

resetButton.addEventListener("click", restartTheGame)
function restartTheGame(){
    let resetTheCells = document.getElementsByClassName("cell");
    currentPlayer = 'red';
    player1Display.style.borderBottom = "solid 5px blue";
    player2Display.style.borderBottom = "";
    player1Display.textContent = 'Player 1';
    player2Display.textContent = 'Player 2';
    p1.value = 'Player 1';
    p2.value = 'Player 2';
    for(let i=0; i<42; i++){
        resetTheCells[i].style.backgroundColor = '';
    }
    for(let r=0; r<6; r++){
        for(let c=0; c<7; c++){
            board[r][c] = undefined;
        }
    }
}

function changeColor(event){

    whichColumn(event.target.id);
    // console.log(board)
    // console.log(connectFourBoard);
    checkIfWin();
    let totalCells = document.getElementsByClassName("cell");
    let isFulll =0;
    for(let i=0; i<42; i++){
        if(totalCells[i].style.backgroundColor != ''){
            isFulll++;
                
        }
    }
    if(isFulll == 42){
        alert("the board is full");
        //reset the board
        restartTheGame();
    }
    

    //win condition....tie? stops board from another move


    //reset fuction



}


function switchPlayers(){
    if(currentPlayer == 'red'){
        currentPlayer = 'green';
        player2Display.style.borderBottom = 'solid 5px blue';  
        player1Display.style.borderBottom = "";
        // player[0] = 'green';
    }
    else{
        currentPlayer = 'red';
        player1Display.style.borderBottom = 'solid 5px blue';
        player2Display.style.borderBottom = "";
        // player[0] = 'red';
    }

}
function checkIfWin(){
    let redCount = [0,0,0,0,0,0];
    let greenCount = [0,0,0,0,0,0]; 
    //best use case for horizontal win check
    for(let r=5; r>=0; r--){
        for(let c = 6; c>=0; c--){
            if((board[r][c] == 'red' && board[r][c+1] == 'red' && board[r][c+2] == 'red' && board[r][c+3]== 'red') || 
            (board[r][c] == 'red' && board[r][c-1] == 'red' && board[r][c-2] == 'red' && board[r][c-3]== 'red') || 
            (board[r][c] == 'red' && board[r][c-1] == 'red' && board[r][c+1] == 'red' && board[r][c-2]== 'red') || 
            (board[r][c] == 'red' && board[r][c+1] == 'red' && board[r][c-1] == 'red' && board[r][c+2]== 'red')){
                greenCount[r] = 0;
                redCount[r] = redCount[r] +1;
                if(redCount[r] == 4){
                    win = true;
                    alert(player[0] + " Wins with horizontal 4!");
                    // console.log("red counter = " + redCount);       
                    break;
                }      
            }
            if((board[r][c] == 'green' && board[r][c+1] == 'green' && board[r][c+2] == 'green' && board[r][c+3]== 'green') || 
            (board[r][c] == 'green' && board[r][c-1] == 'green' && board[r][c-2] == 'green' && board[r][c-3]== 'green') || 
            (board[r][c] == 'green' && board[r][c-1] == 'green' && board[r][c+1] == 'green' && board[r][c-2]== 'green') || 
            (board[r][c] == 'green' && board[r][c+1] == 'green' && board[r][c-1] == 'green' && board[r][c+2]== 'green')){
                redCount[r] = 0;
                greenCount[r] = greenCount[r] + 1;
                if(greenCount[r] == 4){
                    win =true;
                    alert(player[1] + " Wins with horizontal 4!");
                    // console.log("green counter = " + greenCount)
                    break;
                }
            }
        }
    }
    //vertical win check
    let redCountVert = [0,0,0,0,0,0,0];
    let greenCountVert = [0,0,0,0,0,0,0];
    for(let c=6; c>=0; c--){
        for(let r=5; r>=0; r--){
            if(board[r][c] == 'red'){
                greenCountVert[c] = 0;
                redCountVert[c] = redCountVert[c]+1;
                if(redCountVert[c] == 4){
                    win = true;
                    alert(player[0] + " Wins with vertical 4!");
                    break;
                }
                // console.log("red counter = " + redCountVert);
            }
            if(board[r][c] == 'green'){
                redCountVert[c] = 0;
                greenCountVert[c] = greenCountVert[c] + 1;
                if(greenCountVert[c] == 4){
                    win =true;
                    alert(player[1] + " Wins with vertical 4!");
                    break;
                }
                // console.log("green counter = " + greenCountVert);
            }
        }
    }

    //diagonal win check
    // let redCountD = [0,0,0,0,0,0];
    // let greenCountD = [0,0,0,0,0,0];

    for(let r=5; r>=0; r--){
        for(let c=6; c>=0; c--){
            // console.log(board);
            if((board[r][c] == 'red' && board[r-1][c-1] == 'red' && board[r-2][c-2] == 'red' && board[r-3][c-3] =='red') || 
            (board[r][c] == 'red' && board[r-1][c+1] == 'red' && board[r-2][c+2] == 'red' && board[r-3][c+3] =='red')){
                win=true;
                alert("Red wins with diagonal 4");
                break;
            }
            if((board[r][c] == 'green' && board[r-1][c+1] == 'green' && board[r-2][c+2] =='green' && board[r-3][c+3] =='green') || 
            (board[r][c] == 'green' && board[r-1][c-1] == 'green' && board[r-2][c-2] =='red' && board[r-3][c-3] =='green')){
                win=true;
                alert("Green wins with diagonal 4");
                break;
            }

        }
    }
}



