
/**
 * Puzzle 15.
 *
 * puzzle.js
 * @version 1.0.0
 * @author [Andres Hernandez](https://github.com/andresdhn)
 * 
 */

const puzzle = function() { 

	let tiles 			= [] 
	let puzzleSize 		= 0
	let puzzleSizeSq 	= 0
	const puzzleDOM		= document.getElementById('puzzle');

	/* 
	 * Randomizes the Array 
	 */
	const shuffleTiles = () => {
		return Array(puzzleSizeSq).fill().map( (e, i) => i ).sort( () => Math.random()-0.5 )
	}

	/*
	 * Initizlizes Game
	 */
	const initPuzzle = (size) => {
		puzzleSize = size
		puzzleSizeSq = Math.pow(puzzleSize, 2)
		puzzleDOM.innerHTML = ''
		puzzleDOM.className = 'size' + puzzleSize

		tiles = shuffleTiles()

		for (let i=0; i<tiles.length; i++){
			let tile = document.createElement('div')
			
			if (tiles[i]===0) { // tile 0 is blank
				tile.classList.add('puzzle__tile', 'blank')
			}
			else {
				tile.innerHTML = tiles[i]	
				tile.classList.add('puzzle__tile')
			}
			
			tile.addEventListener('click', (e) => handleTileClick(e))

			puzzleDOM.appendChild(tile)
		}
	}

	/*
	 * Compares to solved Array
	 */
	const checkSolved = () => {

		let tilesOrdered = Array(puzzleSizeSq).fill().map( (e, i) => i ).sort((a, b) => a - b)
		tilesOrdered.push(tilesOrdered.splice(0, 1)[0])
		
		for (let i=0; i<tiles.length; i++){
			if (tiles[i] !== tilesOrdered[i]){
				return false
			}
		}

		return true;
	}

	/*
	 * Handle Click event
	 */
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

				tiles.splice(selectedTilePos, 1, 0)
				tiles.splice(blankTilePos, 1, selectedTileNum)
				renderPuzzle()
				
				break

			default: 
				e.preventDefault()
				e.stopPropagation()
				return false	
		}

		if (checkSolved()){
			alert('Congratz! You did it!')
		}
	}

	/*
	 * Render puzzle
	 */
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

	return {
		initPuzzle: initPuzzle
	}
}
