function solution(money) {
	// 첫 집 도둑질 안 함
	const dp = Array(money.length);
	dp[0] = 0;
	dp[1] = money[1];
	// 첫 집 도둑질 함
	const dp2 = Array(money.length);
	dp2[0] = dp2[1] = money[0];

	for (let index = 2; index < money.length; index++) {
		dp[index] = Math.max(dp[index - 2] + money[index], dp[index - 1]);
		dp2[index] = Math.max(dp2[index - 2] + money[index], dp2[index - 1]);
	}

	return Math.max(dp[money.length - 1], dp2[money.length - 2]);
}
