/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
	return {
		toBe: (num) => {
			if (val !== num) {
				throw "Not Equal";
			}
			return true;
		},
		notToBe: (num) => {
			if (val === num) {
				throw "Equal";
			}
			return true;
		},
	};
};
