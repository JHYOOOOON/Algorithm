function solution(n, control) {
	let answer = n;
	const calc = {
		w: 1,
		s: -1,
		d: 10,
		a: -10,
	};

	control.split("").forEach((word) => (answer += calc[word]));

	return answer;
}
