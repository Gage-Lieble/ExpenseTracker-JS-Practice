let boardSize = 50; // Size of the board x & y
let board = ""; // Board contents

for (let y=0; y < boardSize; y++){ // Sets y axis to 0 - checks if the y axis is less than the board size - adds 1 until it makes it equal 8
    for (let x = 0; x < boardSize; x++){  // Sets x axis to 0 - checks if the x axis is less than the board size - adds 1 until it makes it equal 8
        if ((x + y) % 2 === 0){ // If the remainder is 0 add a space to board (Separeates # from 0)
            board += " ";
        } else { // If the remainder isn't 0, add a #
            board += "#";
        }
    }
    board += "\n" // After each line is complete, start a new line
}

console.log(board)