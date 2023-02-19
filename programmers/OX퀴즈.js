function solution(quiz) {
	return quiz.map((sentence) => {
		const [a, op, b, _, ans] = sentence.split(" ");
		if (op === "-") {
			return Number(a) - Number(b) === Number(ans) ? "O" : "X";
		} else if (op === "+") {
			return Number(a) + Number(b) === Number(ans) ? "O" : "X";
		}
	});
}
