let connectFourBoard = document.getElementById("connect-four-board");
let p1= document.getElementById("p1");
let p2 = document.getElementById("p2");
console.log(p1);
console.log(p2);
let player1Display = document.getElementById("player1");
let player2Display = document.getElementById("player2");
console.log(player1Display);
console.log(player2Display);
// console.log(player1.value);
let submitNames = document.getElementById("submitButton");
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

// function setPlayerNames(){
//     let player1Display = document.getElementById("player1");
//     let player2Display = document.getElementById("player2");
//     player1Display.textContent = player1.value;
//     player2Display.textContent = player2.value;
// }
// submitNames.addEventListener("click", setPlayerNames);



let columnOne = document.getElementsByTagName("button")[0];
let columnTwo = document.getElementsByTagName("button")[1];
let columnThree = document.getElementsByTagName("button")[2];
let columnFour = document.getElementsByTagName("button")[3];
let columnFive = document.getElementsByTagName("button")[4];
let columnSix = document.getElementsByTagName("button")[5];
let columnSeven = document.getElementsByTagName("button")[6];

function setPlayerNames(){
    // let player1Display = document.getElementById("player1");
    // let player2Display = document.getElementById("player2");
    player1Display.textContent = p1.value;
    player2Display.textContent = p2.value;
    p1.value = player1Display.textContent;
    p2.value = player2Display.textContent;
}


let numOfSpacesOnBoard = 0;
function fillBoard(){
    submitNames.addEventListener("click", setPlayerNames);
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
    // console.log(board);
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
    // submitNames.addEventListener("click", setPlayerNames);

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
    // let redCount = [0,0,0,0,0,0];
    // let greenCount = [0,0,0,0,0,0];
    let redCount = 0;
    let greenCount = 0;

    //none of the win checks working rn....
    //horizontal win check works, but doesnt work for the test case where it is only reds on a certain
    //row... i.e. [red red red 'white' red] == win for some reason.
   
    //commented code below this code is the best use case

    //horizontal win check
    for(let r=5; r>=0; r--){
        for(let c = 6; c>=0; c--){
            if(board[r][c] == undefined){
                redCount = 0;
                greenCount = 0;
                continue;
            }
            else{
                if(board[r][c] == 'red' && board[r][c] != ''){
                    console.log(board);
                    redCount = redCount+1;
                    greenCount = 0;
                    if(redCount == 4){
                        win = true;
                        alert(player[0] + " Wins!");
                        break;
                    }      
                    // break;
                    console.log("red counter = " + redCount + " and greenCounter = " + greenCount);       
                }
                if(board[r][c] == 'green'){
                    console.log(board);
                    greenCount = greenCount + 1;
                    redCount = 0;
                    if(greenCount == 4){
                        win =true;
                        alert(player[1] + " Wins!");
                        break;
                    }
                    // break;
                    console.log("green counter = " + greenCount + " and redCounter = " + redCount);
                }
            }
        }
    }

    //best use case for horizontal win check

    // for(let r=5; r>=0; r--){
    //     for(let c = 6; c>=0; c--){
    //         if(board[r][c] == 'red'){
    //             greenCount[r] = 0;
    //             redCount[r] = redCount[r] +1;
    //             if(redCount[r] == 4){
    //                 win = true;
    //                 alert(player[0] + " Wins!");
    //                 console.log("red counter = " + redCount);       
    //                 break;
    //             }      
    //         }
    //         if(board[r][c] == 'green'){
    //             redCount[r] = 0;
    //             greenCount[r] = greenCount[r] + 1;
    //             if(greenCount[r] == 4){
    //                 win =true;
    //                 alert(player[1] + " Wins!");
    //                 console.log("green counter = " + greenCount)

    //                 break;
    //             }
    //         }
    //     }
    // }

    //vertical win check
    let redCountVert = [0,0,0,0,0,0,0];
    let greenCountVert = [0,0,0,0,0,0,0];
    // for(let c=6; c>=0; c--){
    //     for(let r=5; r>=0; r--){
    //         if(board[r][c] == 'red'){
    //             greenCountVert[c] = 0;
    //             redCountVert[c] = redCountVert[c]+1;
    //             if(redCountVert[c] == 4){
    //                 win = true;
    //                 alert(player[0] + " Wins!");
    //                 break;
    //             }
    //             console.log("red counter = " + redCountVert);
    //         }
    //         if(board[r][c] == 'green'){
    //             redCountVert[c] = 0;
    //             greenCountVert[c] = greenCountVert[c] + 1;
    //             if(greenCountVert[c] == 4){
    //                 win =true;
    //                 alert(player[1] + " Wins!");
    //                 break;
    //             }
    //             console.log("green counter = " + greenCountVert);
    //         }
    //     }
    // }

    //diagonal win check
    // let redCountD = [0,0,0,0,0,0];
    // let greenCountD = [0,0,0,0,0,0];
    // for(let r=5; r>=0; r--){
    //     for(let c=6; c>=0; c--){
    //         if(board[r][c] == 'red' && board[r-1][c-1] == 'red' && board[r-2][c-2] && board[r-3][c-3] =='red'){
    //             alert("red wins");

    //         }
    //     }
    // }



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



