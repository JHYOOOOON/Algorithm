function solution(my_strings, parts) {
	let answer = "";
	parts.forEach((part, index) => {
		answer += my_strings[index].slice(part[0], part[1] + 1);
	});
	return answer;
}
