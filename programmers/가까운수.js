function solution(array, n) {
	const MAX = 100 + 1;
	let answer = MAX;
	let minAbs = MAX;

	array.forEach((item) => {
		if (Math.abs(item - n) < minAbs) {
			minAbs = Math.abs(item - n);
			answer = item;
		} else if (Math.abs(item - n) === minAbs && answer > item) {
			answer = item;
		}
	});

	return answer;
}
