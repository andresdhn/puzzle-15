'use strict';

/**
 * Puzzle 15.
 *
 * index.js
 * @version 1.0.0
 * @author [Andres Hernandez](https://github.com/andresdhn)
 * 
 */

var tiles = [];
var puzzleSize = Math.pow(4, 2);
var puzzle = document.getElementById('puzzle');

/*
 * Shuffle Array  
 */

var shuffleTiles = function shuffleTiles() {
	return Array(puzzleSize).fill().map(function (e, i) {
		return i;
	}).sort(function () {
		return Math.random() - 0.5;
	});
};

/*
 * Initializes puzzle an injects tiles
 */

var initPuzzle = function initPuzzle() {
	tiles = shuffleTiles();

	for (var i = 0; i < tiles.length; i++) {
		var tile = document.createElement('div');
		tile.id = tiles[i];

		if (tiles[i] === 0) {
			// tile 0 is blank
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
 * Checks for solved puzzled 
 *
 */

var checkSolvedPuzzle = function checkSolvedPuzzle() {

	for (var i = 0; i < tiles.length; i++) {
		if (tiles[i] !== i) {
			return false;
		}
	}

	alert('You did it!');
	initPuzzle();
};

/*
 * Handles click event on tiles
 */

var handleTileClick = function handleTileClick(e) {

	var selectedTile = e.target;
	var selectedTileNum = parseInt(selectedTile.innerHTML);
	var selectedTilePos = tiles.indexOf(selectedTileNum);
	var blankTilePos = tiles.indexOf(0);

	// Ignore click on blank tile  
	if (selectedTile.classList.contains('blank')) {
		e.preventDefault();
		e.stopPropagation();
		return false;
	}

	console.log(tiles);

	tiles.splice(selectedTilePos, 1, 0);
	tiles.splice(blankTilePos, 1, selectedTileNum);

	console.log(tiles);
	checkSolvedPuzzle();
};

initPuzzle();