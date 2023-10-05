/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
	const answer = [];
	for (let index = 0; index < arr.length; index++) {
		if (fn(arr[index], index)) {
			answer.push(arr[index]);
		}
	}
	return answer;
};
