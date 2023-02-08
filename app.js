let connectFourBoard = document.getElementById("connect-four-board");

let rows = 6;
let columns = 7;
let win = false;
let player = ['red', 'green'];
let currentPlayer = 'red';
let board = [];

console.log(board);

let columnOne = document.getElementsByTagName("button")[0];
let columnTwo = document.getElementsByTagName("button")[1];
let columnThree = document.getElementsByTagName("button")[2];
let columnFour = document.getElementsByTagName("button")[3];
let columnFive = document.getElementsByTagName("button")[4];
let columnSix = document.getElementsByTagName("button")[5];
let columnSeven = document.getElementsByTagName("button")[6];

let columnArray =  document.getElementsByTagName("button");





// let tableElement = document.getElementsByTagName("table")[0];

function fillBoard(){
    let numOfSpacesOnBoard = 0;

    for(let r=0; r<6; r++){

        // let newRow = document.createElement("tr");
        for(let c = 0; c<7; c++){
            // let newColumn = document.createElement("td");
            let newSpace = document.createElement("div");
            board[r,c] = newSpace;
            newSpace.classList.add("cell");
            numOfSpacesOnBoard++;
            newSpace.textContent = numOfSpacesOnBoard;
            connectFourBoard.prepend(newSpace);
        }
    }
}
window.addEventListener("DOMContentLoaded", fillBoard);

columnArray.addEventListener("click", changeColor)
function changeColor(event){
    
    for(let c=0; c<7; c++){
        
    }
}

// columnOne.addEventListener("click", changeColor)
// function changeColor(event){
//     let changedColor = event.target.value;
//     console.log(changedColor);
//     for(let r=0; r<6; r++){
//         for(let c=0; c<7; c++){
//             if(connectFourBoard.textContent == "7"){
//                 connectFourBoard.style.backgroundColor = "red";
//             }
//         }
//     }

// }
// console.log(connectFourBoard);

