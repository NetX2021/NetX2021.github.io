"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showIndicators = exports.getUnhandledProps = exports.showPreviousArrow = exports.showNextArrow = exports.getEasing = void 0;

var _react = _interopRequireDefault(require("react"));

var _tween = _interopRequireDefault(require("@tweenjs/tween.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EASING_METHODS = {
  linear: _tween["default"].Easing.Linear.None,
  ease: _tween["default"].Easing.Quadratic.InOut,
  'ease-in': _tween["default"].Easing.Quadratic.In,
  'ease-out': _tween["default"].Easing.Quadratic.Out,
  cubic: _tween["default"].Easing.Cubic.InOut,
  'cubic-in': _tween["default"].Easing.Cubic.In,
  'cubic-out': _tween["default"].Easing.Cubic.Out
};

var getEasing = function getEasing(easeMethod) {
  return EASING_METHODS[easeMethod] || EASING_METHODS.linear;
};

exports.getEasing = getEasing;

var getUnhandledProps = function getUnhandledProps(ComponentProps, props) {
  var handledProps = Object.keys(ComponentProps);
  return Object.keys(props).reduce(function (acc, prop) {
    if (handledProps.indexOf(prop) === -1) acc[prop] = props[prop];
    return acc;
  }, {});
};

exports.getUnhandledProps = getUnhandledProps;

var showPreviousArrow = function showPreviousArrow(_ref, currentIndex, moveSlides) {
  var prevArrow = _ref.prevArrow,
      infinite = _ref.infinite;
  var isDisabled = currentIndex <= 0 && !infinite;
  var props = {
    'data-type': 'prev',
    'aria-label': 'Previous Slide',
    disabled: isDisabled,
    onClick: moveSlides
  };

  if (prevArrow) {
    return _react["default"].cloneElement(prevArrow, _objectSpread({
      className: "".concat(prevArrow.props.className, " nav ").concat(isDisabled ? 'disabled' : '')
    }, props));
  }

  var className = "nav default-nav ".concat(isDisabled ? 'disabled' : '');
  return _react["default"].createElement("button", _extends({
    className: className
  }, props), _react["default"].createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, _react["default"].createElement("path", {
    d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
  })));
};

exports.showPreviousArrow = showPreviousArrow;

var showNextArrow = function showNextArrow(_ref2, currentIndex, moveSlides) {
  var nextArrow = _ref2.nextArrow,
      infinite = _ref2.infinite,
      children = _ref2.children;
  var isDisabled = currentIndex === children.length - 1 && !infinite;
  var props = {
    'data-type': 'next',
    'aria-label': 'Next Slide',
    disabled: isDisabled,
    onClick: moveSlides
  };

  if (nextArrow) {
    return _react["default"].cloneElement(nextArrow, _objectSpread({
      className: "".concat(nextArrow.props.className, " nav ").concat(isDisabled ? 'disabled' : '')
    }, props));
  }

  var className = "nav default-nav ".concat(isDisabled ? 'disabled' : '');
  return _react["default"].createElement("button", _extends({
    className: className
  }, props), _react["default"].createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, _react["default"].createElement("path", {
    d: "M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"
  })));
};

exports.showNextArrow = showNextArrow;

var showDefaultIndicator = function showDefaultIndicator(currentIndex, key, indicatorProps) {
  return _react["default"].createElement("li", {
    key: key
  }, _react["default"].createElement("button", _extends({
    className: "each-slideshow-indicator ".concat(currentIndex === key ? 'active' : '')
  }, indicatorProps)));
};

var showCustomIndicator = function showCustomIndicator(currentIndex, key, indicatorProps, eachIndicator) {
  return _react["default"].cloneElement(eachIndicator, _objectSpread({
    className: "".concat(eachIndicator.props.className, " ").concat(currentIndex === key ? 'active' : ''),
    key: key
  }, indicatorProps));
};

var showIndicators = function showIndicators(props, currentIndex, navigate) {
  var children = props.children,
      indicators = props.indicators;
  var isCustomIndicator = typeof indicators !== 'boolean';
  return _react["default"].createElement("ul", {
    className: "indicators"
  }, children.map(function (_, key) {
    var indicatorProps = {
      'data-key': key,
      'aria-label': "Go to slide ".concat(key + 1),
      onClick: navigate
    };

    if (isCustomIndicator) {
      return showCustomIndicator(currentIndex, key, indicatorProps, indicators(key));
    }

    return showDefaultIndicator(currentIndex, key, indicatorProps);
  }));
};

exports.showIndicators = showIndicators;