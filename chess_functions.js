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
  gameState = 'toSelect'
  changeTurn(); // change the turn

}


// conditional logic to determine whether a piece can move




function isValidBishop(row,col,spot) {
    var distance = abs(col-selected_piece.xPos);
    if (abs(row-selected_piece.yPos) != abs(col-selected_piece.xPos)) {

      return 0;
      // else if below is for moving down right
    } else if ((col-selected_piece.xPos > 0)  && (row-selected_piece.yPos > 0)) {
      var counter = 1;
      document.getElementById('cnn').textContent=distance;
      while (counter < distance) {
        if ( gameBoard[selected_piece.yPos+counter][selected_piece.xPos+counter] != 0 ) {

          //document.write(selected_piece.xPos+counter);
            return 0;
        }
        counter++;
    }// of while loop
    return 1; // means none of the bad conditons were met so proceed


    //else below is for moving down and left
  } else if ((col-selected_piece.xPos < 0)  && (row-selected_piece.yPos > 0)) {
    var counter = 1;
    document.getElementById('cnn').textContent=distance;
    while (counter < distance) {
      if ( gameBoard[selected_piece.yPos+counter][selected_piece.xPos-counter] != 0 ) {

        //document.write(selected_piece.xPos+counter);
          return 0;
      }
      counter++;
  }// of while loop
  return 1; // means none of the bad conditons were met so proceed
  }
}// of function isValidBishop



function moveIsValid(row,col) {
  // make sure they don't move to a teammates postion
  var spot = gameBoard[row][col];
  if ( ((selected_piece.xPos == col) && (selected_piece.yPos == row)) || spot.team== selected_piece.team) {
    return 0;
  }

  if (selected_piece.type == 'bishop') {
    return isValidBishop(row,col,spot);
  }

  return 1;
}
