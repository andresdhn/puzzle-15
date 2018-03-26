'use strict';

/**
 * Puzzle 15.
 *
 * index.js
 * @version 1.0.0
 * @author [Andres Hernandez](https://github.com/andresdhn)
 * 
 */

var puzzleSize = 5;
var puzzle = document.getElementById('puzzle');
var puzzleSizeSq = Math.pow(puzzleSize, 2);

var tiles = Array(puzzleSizeSq).fill().map(function (e, i) {
	return i;
});

/*
 * Shuffle Array  
 */

var shuffleTiles = function shuffleTiles() {
	return tiles.sort(function () {
		return Math.random() - 0.5;
	});
};

/*
 * Initializes game  
 */

var initPuzzle = function initPuzzle() {
	tiles = shuffleTiles();

	for (var i = 0; i < tiles.length; i++) {
		var tile = document.createElement('div');

		if (tiles[i] === 0) {
			// tile 0 is blank
			tile.classList.add('puzzle__tile', 'blank');
		} else {
			// tile class and number
			tile.innerHTML = tiles[i];
			tile.classList.add('puzzle__tile');
		}

		tile.addEventListener('click', function (e) {
			return handleTileClick(e);
		});

		puzzle.appendChild(tile);
	}
};

/*
 * Compares to a solved Array  
 */

var checkSolved = function checkSolved() {

	var tilesOrdered = Array(puzzleSizeSq).fill().map(function (e, i) {
		return i;
	}).sort(function (a, b) {
		return a - b;
	});
	tilesOrdered.push(tilesOrdered.splice(0, 1)[0]);

	for (var i = 0; i < tiles.length; i++) {
		if (tiles[i] !== tilesOrdered[i]) {
			return false;
		}
	}

	return true;
};

/*
 * Handles Click event  
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

	// Validate adjacent tile
	switch (blankTilePos) {
		case selectedTilePos + 1: // next tile
		case selectedTilePos - 1: // Prev tile
		case selectedTilePos + puzzleSize: // bottom tile
		case selectedTilePos - puzzleSize:
			// top tile

			// update array
			tiles.splice(selectedTilePos, 1, 0);
			tiles.splice(blankTilePos, 1, selectedTileNum);
			renderPuzzle();

			break;

		default:
			e.preventDefault();
			e.stopPropagation();
			return false;
	}

	if (checkSolved()) {
		alert('Congratz! You did it!');
	}
};

/*
 * Render Puzzle after every play  
 */

var renderPuzzle = function renderPuzzle() {
	var tilesDOM = document.getElementsByClassName('puzzle__tile');

	for (var i = 0; i < tiles.length; i++) {

		tilesDOM[i].classList.remove('blank');

		if (tiles[i] == 0) {
			tilesDOM[i].classList.add('blank');
			tilesDOM[i].innerHTML = '';
		} else {
			tilesDOM[i].innerHTML = tiles[i];
		}
	}
};

initPuzzle();