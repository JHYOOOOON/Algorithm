function solution(data, col, row_begin, row_end) {
	let answer = 0;
	data.sort((a, b) => {
		if (a[col - 1] === b[col - 1]) {
			return b[0] - a[0];
		}
		return a[col - 1] - b[col - 1];
	});
	for (let index = row_begin - 1; index < row_end; index++) {
		answer ^= data[index].reduce((acc, cur) => acc + (cur % (index + 1)), 0);
	}
	return answer;
}
