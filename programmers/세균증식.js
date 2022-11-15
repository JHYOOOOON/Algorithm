function solution(n, t) {
	let answer = n;
	let time = t;
	while (time--) {
		answer *= 2;
	}
	return answer;
}
