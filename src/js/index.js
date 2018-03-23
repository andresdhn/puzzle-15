
/**
 * Puzzle 15.
 *
 * index.js
 * @version 1.0.0
 * @author [Andres Hernandez](https://github.com/andresdhn)
 * 
 */

let tiles 			= []; 
const puzzleSize 	= Math.pow(4, 2); 
const puzzle 		= document.getElementById('puzzle');

/*
 * Shuffle Array  
 */

const shuffleTiles = () => {
	return Array(puzzleSize).fill().map( (e, i) => i + 1 ).sort( () => Math.random()-0.5 );
}


/*
 * Initializes puzzle an injects tiles
 */

const initPuzzle = () => {
	tiles = shuffleTiles(); 

	for (let i=0; i<tiles.length; i++){
		let tile = document.createElement('div');
		tile.id = tiles[i]; 

		
		if (tiles[i]===puzzleSize) {
			// last tile is blank
			tile.classList.add('puzzle__tile', 'blank')
		}
		else {
			// tile class and number
			tile.innerHTML = tiles[i];	
			tile.classList.add('puzzle__tile',  'puzzle__tile--' + tiles[i] )
		}
		

		tile.addEventListener('click', (e) => handleTileClick(e)); 

		puzzle.appendChild(tile);
	}
}


const checkSolvedPuzzle = () =>{

	for (let i=1; tiles.length-1; i++) {
		if (tiles[i] !== i ) {
			return false;
		}
	}

	alert('You did it!'); 
	initPuzzle();
}


/*
 * Handles click event on tiles
 */

const handleTileClick = (e) => {

	let selectedTile = e.target; 
	
	// Ignore click on blank tile  
	if (selectedTile.id == puzzleSize) {
		e.preventDefault(); 
		e.stopPropagation();
		return false;
	}

	checkSolvedPuzzle(); 
}


initPuzzle();