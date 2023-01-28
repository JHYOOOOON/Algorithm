function solution(num_list) {
	const answer = [0, 0];
	num_list.forEach((num) => answer[num % 2]++);
	return answer;
}
