function solution(n) {
	let answer = 0;
	const INITIAL = 4;

	const isCorrect = (num) => {
		let count = 0;
		for (let divider = 1; divider <= num; divider++) {
			if (num % divider === 0) count++;
			if (count === 3) return true;
		}
		return false;
	};

	for (let num = INITIAL; num <= n; num++) {
		if (isCorrect(num)) answer++;
	}

	return answer;
}
