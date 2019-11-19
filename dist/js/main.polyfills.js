/*! project-name v0.0.1 | (c) 2019 YOUR NAME | MIT License | https://github.com/ReenaVerma/vanilla-carousel */
/**
 * Element.matches() polyfill (simple version)
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
 */
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}