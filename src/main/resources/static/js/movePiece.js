const Positions = {
    '0-0': 'black_rook', '0-1': 'black_knight', '0-2': 'black_bishop', '0-3': 'black_queen',
    '0-4': 'black_king', '0-5': 'black_bishop', '0-6': 'black_knight', '0-7': 'black_rook',
    '1-0': 'black_pawn', '1-1': 'black_pawn', '1-2': 'black_pawn', '1-3': 'black_pawn',
    '1-4': 'black_pawn', '1-5': 'black_pawn', '1-6': 'black_pawn', '1-7': 'black_pawn',
    '6-0': 'white_pawn', '6-1': 'white_pawn', '6-2': 'white_pawn', '6-3': 'white_pawn',
    '6-4': 'white_pawn', '6-5': 'white_pawn', '6-6': 'white_pawn', '6-7': 'white_pawn',
    '7-0': 'white_rook', '7-1': 'white_knight', '7-2': 'white_bishop', '7-3': 'white_queen',
    '7-4': 'white_king', '7-5': 'white_bishop', '7-6': 'white_knight', '7-7': 'white_rook'
};

let dropCoordinates = 0;
let dropedPiece = "";

function addEventListenerToChessBoardBox (){
    for(let row=0 ; row<8 ; row++){
        for(let col=0 ; col<8 ; col++){
            const box = document.getElementById(`square-${row}-${col}`);
            if (box) {
                // Prevent default on dragover to allow drop
                box.addEventListener('dragover', (event) => {
                    event.preventDefault();
                });

                // Drop event to log and handle dropping pieces
                box.addEventListener('drop', ()=>{
                    dropCoordinates = `${row}-${col}`;
                    appendPiece(dropCoordinates, dropedPiece)
                } )
            }
        }
    }
}

function movePieces(){
    for(const piecePosition in Positions){
        const piece = document.getElementById(`${Positions[piecePosition]}-${piecePosition}`);
        piece.addEventListener('dragstart',()=>{
            // console.log(`${Positions[piecePosition]}-${piecePosition}`);
            dropedPiece = piece.id ;        
        });
        piece.addEventListener('dragend',()=>{
           
        });
    }
}

function appendPiece(dropCoordinates ,dropedPiece){
    const piece = document.getElementById(dropedPiece)
    const box = document.getElementById(`square-${dropCoordinates}`)
    console.log("coordinates : " , box)
    console.log("name :  " , piece)
    box.appendChild(piece)
}


addEventListenerToChessBoardBox()
movePieces()