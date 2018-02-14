

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
var opponent = 'black';
var message_board = document.getElementById('message_board');

function show_valid_moves() {
  for (k = 0; k < 8; k++) {
    for (i = 0; i < 8; i++) {
      if (moveIsValid(k,i)) {
        board.rows[k].cells[i].style.background="orange";
      }
    }
  }
}

function manageClick(row,col) {
  if ((gameState == 'toSelect') && (gameBoard[row][col].team == turn)) {
    selected_piece = gameBoard[row][col];
    gameState = 'selected';
    message_board.textContent = selected_piece.type + ' selected';
    show_valid_moves();

  } else if ((moveIsValid(row,col) ) && (gameState == 'selected')) {
    movePiece(row,col);
    message_board.textContent = turn+"'s turn";
    createPattern();

  } else {
    gameState = 'toSelect';
    message_board.textContent = turn+"'s turn";
    createPattern();
  }

}// of function manageClick()


function find(keep) {
  var row; var col;
  for (row=0; row < 8; row++) {
    for(col=0; col < 8; col++) {
      if (board.rows[row].cells[col].innerHTML == '_') {

          board.rows[row].cells[col].innerHTML = keep;
          //message_board.innerHTML=(gameBoard[row][col].type);
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
