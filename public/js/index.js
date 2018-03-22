'use strict';

var puzzleSize = 4;
var puzzle = document.getElementById('puzzle__container');

var injectTiles = function injectTiles() {
	var totalTiles = Math.pow(puzzleSize, 2);
	var tiles = '';
	var i = 1;
	while (i < totalTiles) {
		tiles += '\n\t\t\t<div class="puzzle__tile">\n\t\t\t\t<p class="puzzle__tile-number">' + i + '</p>\n\t\t\t</div>\n\t\t';
		i++;
	}

	return tiles;
};

puzzle.innerHTML = injectTiles();