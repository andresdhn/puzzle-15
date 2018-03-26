
/**
 * Puzzle 15.
 *
 * index.js
 * @version 1.0.0
 * @author [Andres Hernandez](https://github.com/andresdhn)
 * 
 */

let tiles 			= [];
const puzzleSize 	= 3;
const puzzle 		= document.getElementById('puzzle');


/*
 * Shuffle Array  
 */

const shuffleTiles = () => {
	let puzzleSizeSq = Math.pow(puzzleSize, 2)
	return Array(puzzleSizeSq).fill().map( (e, i) => i ).sort( () => Math.random()-0.5 )
}


const initPuzzle = () => {
	tiles = shuffleTiles()
	
	for (let i=0; i<tiles.length; i++){
		let tile = document.createElement('div')
		
		if (tiles[i]===0) {
			// tile 0 is blank
			tile.classList.add('puzzle__tile', 'blank')
		}
		else {
			// tile class and number
			tile.innerHTML = tiles[i]	
			tile.classList.add('puzzle__tile')
		}
		
		tile.addEventListener('click', (e) => handleTileClick(e))

		puzzle.appendChild(tile)
	}
}

const handleTileClick = (e) => {

	let selectedTile = e.target 
	let selectedTileNum = parseInt(selectedTile.innerHTML)
	let selectedTilePos = tiles.indexOf(selectedTileNum)
	let blankTilePos = tiles.indexOf(0)

	// Ignore click on blank tile  
	if (selectedTile.classList.contains('blank')) {
		e.preventDefault()
		e.stopPropagation()
		return false
	}

	// Validate adjacent tile
	switch (blankTilePos){
		case selectedTilePos + 1: // next tile
		case selectedTilePos - 1: // Prev tile
		case selectedTilePos + puzzleSize: // bottom tile
		case selectedTilePos - puzzleSize: // top tile
			
			// update array
			tiles.splice(selectedTilePos, 1, 0)
			tiles.splice(blankTilePos, 1, selectedTileNum)
			renderPuzzle()

			break

		default: 
			e.preventDefault()
			e.stopPropagation()
			return false	
	}

}

const renderPuzzle = () => {
	let tilesDOM = document.getElementsByClassName('puzzle__tile')
	
	for (let i=0; i<tiles.length; i++){
		
		tilesDOM[i].classList.remove('blank')

		if (tiles[i]==0){
			tilesDOM[i].classList.add('blank')
			tilesDOM[i].innerHTML = ''
		}
		else {
			tilesDOM[i].innerHTML = tiles[i]
		}
	}
}

initPuzzle()
