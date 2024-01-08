function solution(n, k) {
	const answer = [];
	let num = k;

	while (num <= n) {
		answer.push(num);
		num += k;
	}

	return answer;
}
