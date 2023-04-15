function factorial(n) {
	if (n === 1) {
		return 1;
	}

	return n * factorial(n - 1);
}

function solution(n) {
	let answer = 1;
	while (answer++) {
		if (factorial(answer) > n) break;
	}
	return answer - 1;
}
