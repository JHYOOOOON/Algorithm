function solution(n) {
	const answer = [];
	let num = 1;
	while (num <= n) {
		if (num % 2) {
			answer.push(num);
		}
		num++;
	}
	return answer;
}
