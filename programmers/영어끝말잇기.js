function solution(n, words) {
	const answer = [0, 0];
	const savedWords = [];

	let prev, next;
	for (let idx = 1; idx < words.length; idx++) {
		prev = words[idx - 1];
		next = words[idx];

		savedWords.push(prev);

		if (prev[prev.length - 1] != next[0] || savedWords.includes(next)) {
			answer[0] += (idx % n) + 1;
			answer[1] += Math.floor(idx / n) + 1;
			break;
		}
	}

	return answer;
}
