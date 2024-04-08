/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
	const check = new Set();
	let num = n;

	while (num !== 1) {
		let total = 0;

		while (num) {
			total += Math.pow(num % 10, 2);
			num = Math.floor(num / 10);
		}

		num = total;

		if (check.has(num)) {
			return false;
		}

		check.add(num);
	}

	return true;
};
