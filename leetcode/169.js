/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	const count = new Map();

	nums.forEach((num) => {
		if (count.has(num)) {
			count.set(num, count.get(num) + 1);
		} else {
			count.set(num, 1);
		}
	});

	const answer = [...count].sort((a, b) => b[1] - a[1]);

	return answer[0][0];
};
