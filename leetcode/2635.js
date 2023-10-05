/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
	return arr.map((item, index) => fn(item, index));
};
