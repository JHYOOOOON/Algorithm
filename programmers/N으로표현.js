function solution(N, number) {
	let answer = 9;

	const checkNumber = (total, cnt) => {
		if (cnt > 8) return;
		if (total === number) {
			answer = Math.min(answer, cnt);
			return;
		}

		let tmp = 0;
		for (let i = 1; i + cnt < 9; i++) {
			tmp = tmp * 10 + N;
			checkNumber(total + tmp, cnt + i);
			checkNumber(total - tmp, cnt + i);
			checkNumber(total * tmp, cnt + i);
			checkNumber(total / tmp, cnt + i);
		}
	};

	checkNumber(0, 0);

	return answer === 9 ? -1 : answer;
}
