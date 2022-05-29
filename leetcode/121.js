/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let answer = 0,
		mn = prices[0];
	for (let i = 0; i < prices.length; i++) {
		if (mn > prices[i]) {
			mn = prices[i];
		} else if (answer < prices[i] - mn) {
			answer = prices[i] - mn;
		}
	}
	return answer;
};
