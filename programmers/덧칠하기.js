function solution(n, m, section) {
	let answer = 0;
	let paintedIndex = 0;
	section.forEach((todoPaintIndex) => {
		if (paintedIndex < todoPaintIndex) {
			paintedIndex = paintedIndex = todoPaintIndex + m - 1;
			answer++;
		}
	});
	return answer;
}
