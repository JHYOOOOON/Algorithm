function solution(num_list, n) {
	const answer = [];
	for (let index = 0; index < num_list.length; index += n) {
		answer.push(num_list.slice(index, index + n));
	}
	return answer;
}
