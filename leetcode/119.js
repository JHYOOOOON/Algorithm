/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
	const answer = Array.from(Array(numRows), () => new Array());
	answer[0][0] = 1;
	for (let row = 1; row < numRows; row++) {
		for (let col = 0; col <= row; col++) {
			const num = col <= 0 || col >= row ? 1 : answer[row - 1][col - 1] + answer[row - 1][col];
			answer[row].push(num);
		}
	}
	return answer;
};
