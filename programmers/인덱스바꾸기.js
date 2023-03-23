function solution(my_string, num1, num2) {
	const answer = my_string.split("");
	const tempAlpha = my_string[num1];
	answer[num1] = answer[num2];
	answer[num2] = tempAlpha;
	return answer.join("");
}
