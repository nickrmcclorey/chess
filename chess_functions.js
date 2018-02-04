// this file contains a lot of functions that improve
//readability for the rest of the program

function place(row,col,inner) {
  board.rows[row].cells[col].innerHTML = inner;
}

function remove(row,col) {
  board.rows[row].cells[col].innerHTML = '';
}

function changeTurn(){
  turn = (turn == 'white') ? 'black':'white';
}

function moveIsValid() {
  return 1;
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
