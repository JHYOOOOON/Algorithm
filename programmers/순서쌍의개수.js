function solution(n) {
	let answer = 0;
	for (let num = 1; num <= n; num++) {
		if (n % num === 0) {
			answer++;
		}
	}
	return answer;
}
