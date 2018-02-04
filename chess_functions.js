// this file contains a lot of functions that improve
//readability for the rest of the program
function abs(num) {
  return (num < 0) ? -num : num;
}

function place(row,col,inner) {
  board.rows[row].cells[col].innerHTML = inner;
}

function remove(row,col) {
  board.rows[row].cells[col].innerHTML = '';
}

function changeTurn(){
  turn = (turn == 'white') ? 'black':'white';
}



function movePiece(row,col) {
  //place the piece in the new spot
  place(row,col,selected_piece.inner);
  gameBoard[row][col] = selected_piece;

  // remove it from old spot
  remove(selected_piece.yPos,selected_piece.xPos);
  gameBoard[selected_piece.yPos][selected_piece.xPos] = 0;

  // update selected_piece's value
  gameBoard[row][col].yPos = row;
  gameBoard[row][col].xPos = col;
  gameState = 'toSelect';
  changeTurn(); // change the turn

}


// conditional logic to determine whether a piece can move



// checks to see if a bishop can do a certain move
function isValidBishop(row,col) {
    document.getElementById('cnn').textContent=(col-selected_piece.xPos);
    var distance = abs(col-selected_piece.xPos);
    if (abs(row-selected_piece.yPos) != abs(col-selected_piece.xPos)) {

      return 0;


    } else if (distance == 1) {
      return 1;
    // checking for pieces in the way. you can't go through someone
    } else {
    var ycounter = 0;
    var xcounter = 0;
    var counter = 0;
    document.getElementById('cnn').textContent=distance;
    // loops through all the spots between where the piece is and where it
    // wants to go, checking to see if anyone is there, blocking the path
    while (counter < distance) {
      // these if else branches increment the ycounter and xcounter in a way
      // that all the spots in between will be checked
      if ((col-selected_piece.xPos < 0) && (row-selected_piece.yPos > 0)) {
        ycounter++;
        xcounter=xcounter-1;
      } else if ((col-selected_piece.xPos < 0) && (row-selected_piece.yPos) < 0) {
        ycounter--;
        xcounter--;

      } else if ((col-selected_piece.xPos > 0) && (row-selected_piece.yPos) < 0) {
        ycounter--;
        xcounter++;
      } else if ((col-selected_piece.xPos > 0)  && (row-selected_piece.yPos > 0)) {
        ycounter++;
        xcounter++;
      }
      // checks to see if a piece is in a spot in the way before continuing
      if ( gameBoard[selected_piece.yPos+ycounter][selected_piece.xPos+xcounter] != 0) {

        //document.write(selected_piece.xPos+counter);
          return 0;
      }
      counter++;
  }// of while loop
  return 1; // means none of the bad conditons were met so proceed
  }
}// of function isValidBishop


//checks to see if a knight is allowed to do a move
//function isValidKnight(row,col)





function moveIsValid(row,col) {
  // make sure they don't move to a teammates postion
  var spot = gameBoard[row][col];
  if ( ((selected_piece.xPos == col) && (selected_piece.yPos == row)) || (spot.team == selected_piece.team)) {
    return 0;
  }

  if (selected_piece.type == 'bishop') {
    return isValidBishop(row,col,spot);
  }

  return 1;
}
