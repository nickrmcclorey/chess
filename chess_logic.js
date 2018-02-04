

var gameBoard = [
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,bishop1,0,0,0,0,0],
  [0,0,bishop2,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,bishop3,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0]
];
var gameState = 'toSelect';
var selected_piece = 0;
var turn = 'white';

function changeTurn(){
  turn = (turn == 'white') ? 'black':'white';
}

function moveIsValid() {
  return 1;
}

function move_piece(piece){

  for (row=0; row < 8; row++) {
    for(col=0; col < 8; col++) {
      if (board.rows[row].cells[col].innerHTML == '_') {
        if ( ((col-piece.xPos == row-piece.yPos) || (col-piece.xPos == piece.yPos-row)) && (col-piece.xPos !== 0) ) {
          place(row,col,piece.inner);
          remove(piece.yPos,piece.xPos);
          piece.yPos=row;
          piece.xPos=col;
          if (board.rows[0].cells[0].firstChild.id) {
            document.write(board.rows[2].cells[3].firstChild.id);
            document.write(board.rows[0].cells[0].firstChild.id);
          } ;
        } else { // erase the marker
          board.rows[row].cells[col].innerHTML = keep;
        }// of inner if
      }// of outer if
    }// of inner for
  }// of inner for
}// of function find



var message_board = document.getElementById('message_board');

function manageClick(row,col) {
  if ((gameState == 'toSelect') && (gameBoard[row][col].team == turn)) {
    selected_piece = gameBoard[row][col];
    gameState = 'selected';
    message_board.textContent = 'selected';
  } else if ((moveIsValid(selected_piece) ) && (gameState == 'selected')) {
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
    changeTurn();
  }



}// of function manageClick()


function find(keep) {
  var row; var col;
  for (row=0; row < 8; row++) {
    for(col=0; col < 8; col++) {
      if (board.rows[row].cells[col].innerHTML == '_') {

          board.rows[row].cells[col].innerHTML = keep;
          message_board.innerHTML=(gameBoard[row][col].type);
          manageClick(row,col);
      }// of if
    }// of inner for
  }// of outer for

}// of function find()


var keep;
k=0;
for (i=0;i<8;i++) {
  for (k=0;k<8;k++) {
    board.rows[i].cells[k].addEventListener('click',function() {

          keep = this.innerHTML;
          this.innerHTML = '_';
          find(keep);

    }// of function in event listener
  ,false);
  }// of inner for
}// of outer loop


var twod =[ [bishop1,2,bishop2],[4,5,6] ];
document.write('working');
