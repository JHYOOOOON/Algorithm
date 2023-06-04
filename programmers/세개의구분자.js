function solution(myStr) {
	const answer = myStr.split(/a|b|c/g).filter((item) => item);
	return answer.length > 0 ? answer : ["EMPTY"];
}
