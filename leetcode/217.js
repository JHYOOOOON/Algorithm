/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
	return nums.length !== new Set([...nums]).size;
};
