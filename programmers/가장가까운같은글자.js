function solution(s) {
	const answer = [];
	const alpha = new Map();
	s.split("").map((item, index) => {
		if (alpha.has(item)) {
			answer.push(index - alpha.get(item));
		} else {
			answer.push(-1);
		}
		alpha.set(item, index);
	});
	return answer;
}
