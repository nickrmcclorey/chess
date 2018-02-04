var board = document.getElementById('board');// connects us to the board
var gameState = 'toSelect';
var turn = 'white'


// setting up the boards colors
for (k=0; k<8; k=k+2) {
  for (i=0; i<8; i=i+2) {
    board.rows[k].cells[i].style.background="white";
  }// of first inner for

  for (i=0; i<8; i=i+2) {
    board.rows[k+1].cells[i+1].style.background="white";

  }// of second inner loop
}// of outer for


function place(row,col,inner) {
  board.rows[row].cells[col].innerHTML = inner;
}


function bishop_setup(x_init,y_init,id,type) { // this is the class for pieces
  this.type = type;
  this.xPos = x_init;
  document.write(this.xPos);
  this.yPos = y_init;
  this.type = 'bishop';
  this.inner = '<img src="pieces/blackBishop.png" id =" '+ id +' " width="70" height="70"></img>';
  place(y_init,x_init,this.inner);

}// of function bishop_setup

var id = 1;
var bishop1,bishop2,bishop3,bishop4;
bishop1 = new bishop_setup(2,2,id,'bishop');
id++;
bishop2 = new bishop_setup(2,3,id,'bishop');
id++;
bishop3 = new bishop_setup(5,5,id,'bishop');
bishop3.inner = '<img src="pieces/whiteBishop.png" id =" '+ id +' " width="70" height="70"></img>'


var allPieces = [bishop1, bishop2, bishop3, bishop4];
function pieceById(id) {
  return allPieces[id-1];
//document.write(id);


}// of function pieceById


//document.write("connected");
// used to place an piece on the board
//place(2,2,bishop1.inner);
//place(3,3,bishop2.inner);



// removes a piece from the board
function remove(row,col) {
  board.rows[row].cells[col].innerHTML = '';
}
