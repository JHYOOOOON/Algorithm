/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
	let counter = n - 1;
	return function () {
		counter++;
		return counter;
	};
};
