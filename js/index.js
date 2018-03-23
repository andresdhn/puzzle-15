'use strict';

var puzzleSize = Math.pow(4, 2);
var puzzle = document.getElementById('puzzle');

var createTiles = function createTiles() {
	for (var i = 1; i < puzzleSize + 1; i++) {
		var tile = document.createElement('div');

		if (i == puzzleSize) {
			tile.classList.add('puzzle__tile', 'blank');
		} else {
			tile.innerHTML = i;
			tile.classList.add('puzzle__tile', 'puzzle__tile--' + i);
		}

		tile.addEventListener('click', function (e) {
			return handleClick(e);
		});

		puzzle.appendChild(tile);
	}
};

var handleClick = function handleClick(e) {
	console.log(e.target);
};

createTiles();