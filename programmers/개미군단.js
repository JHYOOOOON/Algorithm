function solution(hp) {
	let answer = 0;
	const attack = [5, 3, 1];
	attack.forEach((point) => {
		answer += Math.floor(hp / point);
		hp %= point;
	});
	return answer;
}
