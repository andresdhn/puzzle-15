
/**
 * Puzzle 15.
 *
 * index.js
 * @version 1.0.0
 * @author [Andres Hernandez](https://github.com/andresdhn)
 * 
 */

let tiles 			= []
const puzzleSize 	= Math.pow(4, 2)
const puzzle 		= document.getElementById('puzzle')


/*
 * Shuffle Array  
 */

const shuffleTiles = () => {
	return Array(puzzleSize).fill().map( (e, i) => i ).sort( () => Math.random()-0.5 )
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

	tiles.splice(selectedTilePos, 1, 0)
	tiles.splice(blankTilePos, 1, selectedTileNum)

	renderPuzzle()
	
}

const renderPuzzle = () => {
	let tilesDOM = document.getElementsByClassName('puzzle__tile')
	
	for (let i=0; i<tiles.length; i++){
		
		tilesDOM[i].classList.remove('blank')

		if (tiles[i] ==0){
			tilesDOM[i].classList.add('blank')
			tilesDOM[i].innerHTML = ''
		}
		else {
			tilesDOM[i].innerHTML = tiles[i]	
		}
	}
}

initPuzzle()
