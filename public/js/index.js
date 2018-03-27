'use strict';

/*
 *
 * index.js
 * @version 1.0.0
 * @author [Andres Hernandez](https://github.com/andresdhn)
 * 
 */
(function () {

	var sizeInput = document.getElementById('psize');
	var p15 = new puzzle();

	var handleSizeChange = function handleSizeChange() {
		p15.initPuzzle(sizeVal());
	};

	var sizeVal = function sizeVal() {
		return parseInt(sizeInput.value);
	};

	p15.initPuzzle(sizeVal());
	sizeInput.addEventListener('change', handleSizeChange);
})();