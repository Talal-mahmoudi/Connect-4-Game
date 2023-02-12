let connectFourBoard = document.getElementById("connect-four-board");
let player1 = document.getElementById("p1");
let player2 = document.getElementById("p2");
console.log(p1);
console.log(p2);

let rows = 6;
let columns = 7;
let win = false;
let player = ['Red', 'Green'];
// let p2 = green;

let currentPlayer = 'red';

// prompt("please enter your name");
// alert();

let board = [
    [undefined,undefined,undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined,undefined,undefined],
    [undefined,undefined,undefined,undefined,undefined,undefined,undefined]
];



let columnOne = document.getElementsByTagName("button")[0];
let columnTwo = document.getElementsByTagName("button")[1];
let columnThree = document.getElementsByTagName("button")[2];
let columnFour = document.getElementsByTagName("button")[3];
let columnFive = document.getElementsByTagName("button")[4];
let columnSix = document.getElementsByTagName("button")[5];
let columnSeven = document.getElementsByTagName("button")[6];


let numOfSpacesOnBoard = 0;
function fillBoard(){
    
    for(let r=0; r<6; r++){

        for(let c = 0; c<7; c++){
            let newSpace = document.createElement("div");
            newSpace.classList.add("cell");
            numOfSpacesOnBoard++;
            newSpace.textContent = numOfSpacesOnBoard-1;
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
    console.log(board);
}

columnOne.addEventListener("click", changeColor)
columnTwo.addEventListener("click", changeColor)
columnThree.addEventListener("click", changeColor)
columnFour.addEventListener("click", changeColor)
columnFive.addEventListener("click", changeColor)
columnSix.addEventListener("click", changeColor)
columnSeven.addEventListener("click", changeColor)

function changeColor(event){

    //player declaration

    // while(win == false){
    //     whichColumn(event.target.id);
    //     checkIfWin();
    // }

    whichColumn(event.target.id);

    checkIfWin();

    //win condition....tie? stops board from another move


    //reset fuction



}


function switchPlayers(){
    if(currentPlayer == 'red'){
        currentPlayer = 'green';
        // player[0] = 'green';
    }
    else{
        currentPlayer = 'red';
        // player[0] = 'red';
    }



}
function checkIfWin(){
    let redCount = [0,0,0,0,0,0];
    let greenCount = [0,0,0,0,0,0];

    //horizontal win check
    for(let r=5; r>=0; r--){
        for(let c = 6; c>=0; c--){
            if(board[r][c] == 'red'){
                greenCount[r] = 0;
                redCount[r] = redCount[r]+1;
                if(redCount[r] == 4){
                    win = true;
                    alert(player[0] + " Wins!");
                    break;
                }      
                // console.log("red counter = " + redCount);       
            }
            if(board[r][c] == 'green'){
                redCount[r] = 0;
                greenCount[r] = greenCount[r] + 1;
                if(greenCount[r] == 4){
                    win =true;
                    alert(player[1] + " Wins!");
                    break;
                }
                // console.log("green counter = " + greenCount)
            }
        }
    }

    //vertical win check
    let redCountVert = [0,0,0,0,0,0];
    let greenCountVert = [0,0,0,0,0,0];
    for(let c=6; c>=0; c--){
        for(let r=5; r>=0; r--){
            if(board[r][c] == 'red'){
                greenCountVert[c] = 0;
                redCountVert[c] = redCountVert[c]+1;
                if(redCountVert[c] == 4){
                    win = true;
                    alert(player[0] + " Wins!");
                    break;
                }
                console.log("red counter = " + redCountVert);
            }
            if(board[r][c] == 'green'){
                redCountVert[c] = 0;
                greenCountVert[c] = greenCountVert[c] + 1;
                if(greenCountVert[c] == 4){
                    win =true;
                    alert(player[1] + " Wins!");
                    break;
                }
                console.log("green counter = " + greenCountVert);
            }
        }
    }

    //diagonal win check
    let redCountD = [0,0,0,0,0,0];
    let greenCountD = [0,0,0,0,0,0];
    for(let r=5; r>=0; r--){
        for(let c=6; c>=0; c--){
            
        }
    }



            // if(!board.includes(undefined)){
            //let message = document.createElement("p")
            //message.textContent = "Game over."
            //document.getElementsByTagName("body")[0].appendChild(message)
            //win = true;
            //}
// HOW DO WE CONFIRM THE GAME IS OVER?
//     if (!gameBoard.includes(undefined)) {
//         let message = document.createElement("p")
//         message.textContent = "Game over."
//         document.getElementsByTagName("body")[0].appendChild(message)
//     }
// }
}
// resetButton.addEventListener("click", resetTheGame)
// function resetTheGame(event){
//     fillBoard();
// }



