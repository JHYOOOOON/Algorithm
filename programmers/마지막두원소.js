function solution(num_list) {
	const answer = [...num_list];
	const prev = answer[answer.length - 2];
	const last = answer[answer.length - 1];
	last > prev ? answer.push(last - prev) : answer.push(last * 2);
	return answer;
}
