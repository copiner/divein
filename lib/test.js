"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var fn = function fn() {
  console.log('a');
};

var isHas = [1, 2, 3].includes(2);
var p = new Promise(function (resolve, reject) {
  resolve(100);
});

var ColorPoint = /*#__PURE__*/function () {
  function ColorPoint(x, y) {
    (0, _classCallCheck2.default)(this, ColorPoint);
    this.x = x;
    this.y = y;
  }

  (0, _createClass2.default)(ColorPoint, [{
    key: "getX",
    value: function getX() {
      return this.x;
    }
  }]);
  return ColorPoint;
}();

var cp = new ColorPoint(25, 8);