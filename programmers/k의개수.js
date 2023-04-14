function solution(i, j, k) {
	let answer = 0;
	const target = k.toString();

	for (let num = i; num <= j; num++) {
		answer += num
			.toString()
			.split("")
			.filter((item) => item === target).length;
	}

	return answer;
}
