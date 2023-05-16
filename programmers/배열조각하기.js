function solution(arr, query) {
	let answer = [...arr];
	query.forEach((item, index) => {
		if (index % 2) {
			// odd
			answer = answer.slice(item);
		} else {
			// even
			answer = answer.slice(0, item + 1);
		}
	});
	return answer;
}
