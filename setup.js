var board = document.getElementById('board');// connects us to the board



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


function bishop_setup(x_init,y_init,picPath,type,Team_on) { // this is the class for pieces
  this.type = type;
  this.team = Team_on;
  this.xPos = x_init;
  document.write(this.xPos);
  this.yPos = y_init;
  this.type = 'bishop';
  this.inner = '<img src="'+picPath+'" width="70" height="70"></img>';
  place(y_init,x_init,this.inner);

}// of function bishop_setup


var id = 1;
var bishop1,bishop2,bishop3,bishop4;
bishop1 = new bishop_setup(2,2,'pieces/blackBishop.png','bishop','black');
id++;
bishop2 = new bishop_setup(2,3,'pieces/blackBishop.png','bishop','black');
id++;
bishop3 = new bishop_setup(5,5,'pieces/whiteBishop.png','bishop','white');



var allPieces = [bishop1, bishop2, bishop3, bishop4];
function pieceById(id) {
  return allPieces[id-1];
}// of function pieceById


//document.write("connected");
// used to place an piece on the board
//place(2,2,bishop1.inner);
//place(3,3,bishop2.inner);



// removes a piece from the board
function remove(row,col) {
  board.rows[row].cells[col].innerHTML = '';
}
