'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModuleB = exports.ModuleA = undefined;

var _ModuleA = require('components/modules/ModuleA');

var _ModuleA2 = _interopRequireDefault(_ModuleA);

var _ModuleB = require('components/modules/ModuleB');

var _ModuleB2 = _interopRequireDefault(_ModuleB);

var _Application = require('components/Application');

var _Application2 = _interopRequireDefault(_Application);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModuleA = exports.ModuleA = _ModuleA2.default;
var ModuleB = exports.ModuleB = _ModuleB2.default;

exports.default = _Application2.default;