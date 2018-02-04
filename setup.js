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





function piece_setup(x_init,y_init,picPath,type_par,Team_on) { // this is the class for pieces
  this.type = type_par;
  this.team = Team_on;
  this.xPos = x_init;
  this.yPos = y_init;
  this.inner = '<img src="'+picPath+'" width="70" height="70"></img>';
  place(y_init,x_init,this.inner);

}// of function piece_setup


// initializing up all the pieces
// bishops
var bishop1,bishop2,bishop3,bishop4;
bishop1 = new piece_setup(2,0,'pieces/blackBishop.png','bishop','black');
bishop2 = new piece_setup(5,0,'pieces/blackBishop.png','bishop','black');
bishop3 = new piece_setup(5,7,'pieces/whiteBishop.png','bishop','white');
bishop4 = new piece_setup(2,7,'pieces/whiteBishop.png','bishop','white');

// knights
var knight1,knight2,knight3,knight4;
knight1 = new piece_setup(1,0,'pieces/blackKnight.png','knight','black');
knight2 = new piece_setup(6,0,'pieces/blackKnight.png','knight','black');
knight3 = new piece_setup(1,7,'pieces/whiteKnight.png','knight','white');
knight4 = new piece_setup(6,7,'pieces/whiteKnight.png','knight','white');

//rooks
var rook1,rook2,rook3,rook4;
rook1 = new piece_setup(0,0,'pieces/blackRook.png','rook','black');
rook2 = new piece_setup(7,0,'pieces/blackRook.png','rook','black');
rook3 = new piece_setup(0,7,'pieces/whiteRook.png','rook','white');
rook4 = new piece_setup(7,7,'pieces/whiteRook.png','rook','white');

//queens
var queen1,queen2;
queen1 = new piece_setup(3,0,'pieces/blackQueen.png','queen','black');
queen2 = new piece_setup(3,7,'pieces/whiteQueen.png','queen','white');

// kings
var king1,king2;
king1 = new piece_setup(4,0,'pieces/blackKing.png','king','black');
king2 = new piece_setup(4,7,'pieces/whiteKing.png','king','white');

// pawns
var pawnPath = 'pieces/blackPawn.png';
var pawn1,pawn2,pawn3,pawn4,pawn5,pawn6,pawn7,pawn8;
 pawn1 = new piece_setup(0,1,pawnPath,'pawn','black');
 pawn2 = new piece_setup(1,1,pawnPath,'pawn','black');
 pawn3 = new piece_setup(2,1,pawnPath,'pawn','black');
 pawn4 = new piece_setup(3,1,pawnPath,'pawn','black');
 pawn5 = new piece_setup(4,1,pawnPath,'pawn','black');
 pawn6 = new piece_setup(5,1,pawnPath,'pawn','black');
 pawn7 = new piece_setup(6,1,pawnPath,'pawn','black');
 pawn8 = new piece_setup(7,1,pawnPath,'pawn','black');

pawnPath = 'pieces/whitePawn.png';
var pawn9,pawn10,pawn11,pawn12,pawn13,pawn14,pawn15,pawn16;
 pawn9  = new piece_setup(0,6,pawnPath,'pawn','white');
 pawn10 = new piece_setup(1,6,pawnPath,'pawn','white');
 pawn11 = new piece_setup(2,6,pawnPath,'pawn','white');
 pawn12 = new piece_setup(3,6,pawnPath,'pawn','white');
 pawn13 = new piece_setup(4,6,pawnPath,'pawn','white');
 pawn14 = new piece_setup(5,6,pawnPath,'pawn','white');
 pawn15 = new piece_setup(6,6,pawnPath,'pawn','white');
 pawn16 = new piece_setup(7,6,pawnPath,'pawn','white');
