/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
	return nums.map((num) => num * num).sort((a, b) => a - b);
};
