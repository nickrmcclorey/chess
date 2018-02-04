

var gameBoard = [
  [rook1,knight1,bishop1,queen1,king1,bishop2,knight2,rook2],
  [pawn1,pawn2,pawn3,pawn4,pawn5,pawn6,pawn7,pawn8],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [pawn9,pawn10,pawn11,pawn12,pawn13,pawn14,pawn15,pawn16],
  [rook3,knight3,bishop4,queen2,king2,bishop3,knight4,rook4]
];
var gameState = 'toSelect';
var selected_piece = 0;
var turn = 'white';


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
  } else if ((moveIsValid() ) && (gameState == 'selected')) {
    movePiece(row,col);
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
