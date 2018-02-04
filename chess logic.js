

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


var piece_selected = 0;
var message_board = document.getElementById('message_board');


function find(keep,piece_selected) {
  for (row=0; row < 8; row++) {
    for(col=0; col < 8; col++) {
      if (board.rows[row].cells[col].innerHTML == '_') {

          board.rows[row].cells[col].innerHTML = keep;
          message_board.innerHTML=(piece_selected+" is selected. Its at "+piece_selected.xPos+" "+piece_selected.yPos);
      }// of inner if
    }// of outer if
  }// of inner for
}// of inner for


var keep;
k=0;
for (i=0;i<8;i++) {
  for (k=0;k<8;k++) {
    board.rows[i].cells[k].addEventListener('click',function() {
      if (gameState == 'toSelect') {
        if (this.firstChild.id) {
          keep = this.innerHTML;
          piece_selected = this.firstChild.id;
          this.innerHTML = '_';
          find(keep,piece_selected);
          gameState = 'selected';
        }

      } else if (gameState == 'selected') {
        
        keep = '';
        this.innerHTML = '_';
        gameState = 'toSelect';
        document.getElementById('message_board').textContent = gameState;
        move_piece(pieceById(piece_selected,keep));
      }
    }// of function in event listener
  ,false);
  }// of inner for
}// of outer loop


var twod =[ [1,2,3],[4,5,6] ];
document.write(twod[1][1]);
