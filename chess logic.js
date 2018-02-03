var board = document.getElementById('board');// connects us to the board
var gameState = 'toSelect';
var turn = 'white'

// setting up the boards colors
for (k=0; k<8; k=k+2) {
  for (i=0; i<8; i=i+2) {
    board.rows[k].cells[i].style.background="black";
  }// of first inner for

  for (i=0; i<8; i=i+2) {
    board.rows[k+1].cells[i+1].style.background="black";

  }// of second inner loop
}// of outer for


function bishop_setup(x_init,y_init,id,type) { // this is the class for pieces
  this.type = type;
  this.xPos = x_init;
  this.yPos = y_init;
  this.type = 'bishop';
  this.inner = '<img src="pieces/bishop.jpg" id =" '+ id +' " width="70" height="70"></img>';

}// of function bishop_setup

var id = 1;
var bishop1 = new bishop_setup(2,2,id,'bishop');
id=id+1;
var bishop2 = new bishop_setup(3,3,id,'bishop');

function pieceById(id) {

  if (id == 1) {return bishop1;}
  else {return bishop2;}
}// of function pieceById


//document.write("connected");
// used to place an piece on the board
function place(row,col,inner) {
  board.rows[row].cells[col].innerHTML = inner;
}
place(2,2,bishop1.inner);
place(3,3,bishop2.inner);



// removes a piece from the board
function remove(row,col) {
  board.rows[row].cells[col].innerHTML = '';
}


function find(){
  for (row=0; row < 8; row++) {
    for(col=0; col < 8; col++) {
      if (board.rows[row].cells[col].innerHTML == '_') {
        if ( ((col-bishop1.xPos == row-bishop1.yPos) || (col-bishop1.xPos == bishop1.yPos-row)) && (col-bishop1.xPos !== 0) ) {
          place(row,col,bishop1.inner);
          remove(bishop1.yPos,bishop1.xPos);
          bishop1.yPos=row;
          bishop1.xPos=col;
          if (board.rows[0].cells[0].firstChild.id) {
            document.write(board.rows[2].cells[3].firstChild.id);
            document.write(board.rows[0].cells[0].firstChild.id);
          } ;
        } else { // erase the marker
          board.rows[row].cells[col].innerHTML = '';
        }// of inner if
      }// of outer if
    }// of inner for
  }// of inner for
}// of function find


function find2(piece){
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
          board.rows[row].cells[col].innerHTML = '';
        }// of inner if
      }// of outer if
    }// of inner for
  }// of inner for
}// of function find


var piece_selected = 0;
var message_board = document.getElementById('message_board');


function select(keep,piece_selected) {
  for (row=0; row < 8; row++) {
    for(col=0; col < 8; col++) {
      if (board.rows[row].cells[col].innerHTML == '_') {
          board.rows[row].cells[col].innerHTML = keep;
          message_board.innerHTML=(piece_selected+" is selected");
      }// of inner if
    }// of outer if
  }// of inner for
}// of inner for




k=0;
for (i=0;i<8;i++) {
  for (k=0;k<8;k++) {
    board.rows[i].cells[k].addEventListener('click',function() {
      if (gameState == 'toSelect') {
        if (this.firstChild.id) {
          var keep = this.innerHTML;
          piece_selected = this.firstChild.id;
          this.innerHTML = '_';
          select(keep,piece_selected);
          gameState = 'selected';
        }

      } else if (gameState == 'selected') {
        this.innerHTML = '_';
        gameState = 'toSelect';
        document.getElementById('message_board').textContent = gameState;
        find2(pieceById(piece_selected));
      }
    }// of function in event listener
  ,false);
  }// of inner for
}// of outer loop


document.write(board.rows[3].cells[3].firstChild.id);
