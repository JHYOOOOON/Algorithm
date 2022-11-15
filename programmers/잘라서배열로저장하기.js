function solution(my_str, n) {
	const answer = [];
	for (let index = 0; index < my_str.length; index += n) {
		answer.push(my_str.substring(index, index + n));
	}
	return answer;
}
