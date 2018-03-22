"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var newOne = function newOne() {
  console.log("Hello World..!");
};

var Puzzle = function () {
  function Puzzle(name) {
    _classCallCheck(this, Puzzle);

    this.name = name;
  }

  _createClass(Puzzle, [{
    key: "Name",
    get: function get() {
      return this.name;
    },
    set: function set(name) {
      this.name = name;
    }
  }]);

  return Puzzle;
}();

var puzzle = new Puzzle('John Snow');
console.log(puzzle.Name);