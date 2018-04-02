# web_chess
	This is a game of chess made by Nick McClorey. It consists of about 300 lines of HTML, CSS and mostly javascript.
chess_functions.js contains functions to check to see if a piece is allowed to move a certain way as well as some other 
small functions called later on

	setup.js declares all the chess pieces, sets their initial values and puts them on the board.
This file also sets up the background color of the chessboard. 

	chess_logic.js is big picture. It utilizes a lot of functions in the other files to outline the general
flow of the game. This is where the gameboard is declared. This is a 2d array of gamepieces. Whenever
the player clicks a piece, it activates an event listener declared in this file which calls 
a function, manageClick(row,col) declared in this file. This decides whether a piece needs to be selected
to be moved later or move a currently selected piece.