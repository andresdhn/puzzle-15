'use strict';

/**
 * Puzzle 15.
 *
 * index.js
 * @version 1.0.0
 * @author [Andres Hernandez](https://github.com/andresdhn)
 * 
 */

var puzzleSize = Math.pow(4, 2);
var puzzle = document.getElementById('puzzle');

/*
 * Shuffle Array  
 */

var shuffleTiles = function shuffleTiles() {
	return Array(puzzleSize).fill().map(function (e, i) {
		return i + 1;
	}).sort(function () {
		return Math.random() - 0.5;
	});
};

/*
 * Initializes puzzle an injects tiles
 */

var initPuzzle = function initPuzzle() {
	var tiles = shuffleTiles();

	for (var i = 0; i < tiles.length; i++) {
		var tile = document.createElement('div');
		tile.id = tiles[i];

		if (tiles[i] === puzzleSize) {
			// last tile is blank
			tile.classList.add('puzzle__tile', 'blank');
		} else {
			// tile class and number
			tile.innerHTML = tiles[i];
			tile.classList.add('puzzle__tile', 'puzzle__tile--' + tiles[i]);
		}

		tile.addEventListener('click', function (e) {
			return handleTileClick(e);
		});

		puzzle.appendChild(tile);
	}
};

/*
 * Handles click event on tiles
 */

var handleTileClick = function handleTileClick(e) {

	var selectedTile = e.target;

	// Ignore click on blank tile  
	if (selectedTile.id == puzzleSize) {
		e.preventDefault();
		e.stopPropagation();
		return false;
	}

	console.log(selectedTile);
};

initPuzzle();