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

//document.write("connected");
// used to place an piece on the board
function place(row,col,inner) {
  board.rows[row].cells[col].innerHTML = inner;
}
place(2,2,bishop1.inner);
place(2,3,bishop2.inner);


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


k=0;
for (i=0;i<8;i++) {
  for (k=0;k<8;k++) {
    board.rows[i].cells[k].addEventListener('click',function() {
      this.innerHTML = '_';
      find();
    }
  ,false);
  }// of inner for
}// of outer loop
