var noOfSquare = 10;
var contentDiv = document.getElementById("content");
var board=document.createElement("div");
board.className="board";
contentDiv.appendChild(board);
for( var y=0; y<noOfSquare; y++){
    var row = addRowToBoard()
    for(var x=0; x<noOfSquare; x++) {
    var square = document.createElement("div");
    square.className="square";
    row.appendChild(square);
    if((x+y) % 2){
        square.style.backgroundColor = "black";
        }else {
            square.style.backgroundColor = "white";
        
        }
    }
}

contentDiv.appendChild(board);
function addRowToBoard(){
    
        var row = document.createElement("div");
        row.className="row";
        board.appendChild(row);
        if(y%2){
        row.style.backgroundColor = "black";
        }else {
            row.style.backgroundColor = "white";
        
        }
        board.appendChild(row);
        return row ;

    
        
    }

    