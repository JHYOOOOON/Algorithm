/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	const sortNums = nums.map((num, index) => [num, index]);
	sortNums.sort((a, b) => a[0] - b[0]);
	let left = 0;
	let right = nums.length - 1;
	while (left < right) {
		const [num_1, index_1] = sortNums[left];
		const [num_2, index_2] = sortNums[right];
		if (num_1 + num_2 === target) {
			return [index_1, index_2];
		}
		if (num_1 + num_2 < target) {
			left++;
		} else {
			right--;
		}
	}
};
