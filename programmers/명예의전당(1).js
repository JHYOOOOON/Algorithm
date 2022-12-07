function solution(k, score) {
	const answer = [];
	const honor = [];

	score.map((s) => {
		if (honor.length < k) {
			honor.push(s);
		} else {
			if (s > honor[0]) {
				honor.shift();
				honor.push(s);
			}
		}
		honor.sort((a, b) => a - b);
		answer.push(honor[0]);
	});
	return answer;
}
