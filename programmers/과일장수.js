function solution(k, m, score) {
	let answer = 0;
	let index = m - 1;
	score.sort((a, b) => b - a);
	while (index < score.length) {
		answer += score[index] * m;
		index += m;
	}
	return answer;
}
