var contentDiv = document.getElementById("content");
var board=document.createElement("div");
board.className="board";
contentDiv.appendChild(board);
for( var y=0; y<8; y++){
    addRowToBoard()
}

contentDiv.appendChild(board);
function addRowToBoard(){
    
        var row = document.createElement("div");
        row.className="row";
        board.appendChild(row);
        if(y%2){
        row.style.backgroundColor = "black";
        }else {
            row.style.backgroundColor = "red";
        
        }
        
        }

