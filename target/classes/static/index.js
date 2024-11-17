const chessBoard = document.getElementById('chessBoard');

        // Define the initial positions for pieces
        const initialPositions = {
            '0-0': 'black_rook', '0-1': 'black_knight', '0-2': 'black_bishop', '0-3': 'black_queen',
            '0-4': 'black_king', '0-5': 'black_bishop', '0-6': 'black_knight', '0-7': 'black_rook',
            '1-0': 'black_pawn', '1-1': 'black_pawn', '1-2': 'black_pawn', '1-3': 'black_pawn',
            '1-4': 'black_pawn', '1-5': 'black_pawn', '1-6': 'black_pawn', '1-7': 'black_pawn',
            '6-0': 'white_pawn', '6-1': 'white_pawn', '6-2': 'white_pawn', '6-3': 'white_pawn',
            '6-4': 'white_pawn', '6-5': 'white_pawn', '6-6': 'white_pawn', '6-7': 'white_pawn',
            '7-0': 'white_rook', '7-1': 'white_knight', '7-2': 'white_bishop', '7-3': 'white_queen',
            '7-4': 'white_king', '7-5': 'white_bishop', '7-6': 'white_knight', '7-7': 'white_rook'
        };

        // Place the pieces on the board
        for (const position in initialPositions) {
            const piece = initialPositions[position];
            const square = document.getElementById(`square-${position}`);
            const img = document.createElement('img');
            img.src = `images/${piece}.svg`;  // Ensure you have images with names like "black_rook.png"
            img.id = `${piece}-${position}`;
            img.classList.add('piece')
            img.id 
            square.appendChild(img);
        }
