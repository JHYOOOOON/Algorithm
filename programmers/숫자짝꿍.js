function solution(X, Y) {
	let answer = "";
	const x = X.split("").sort((a, b) => b - a);
	const y = Y.split("").sort((a, b) => b - a);

	let x_index = 0,
		y_index = 0;
	while (x_index < x.length && y_index < y.length) {
		if (x[x_index] === y[y_index]) {
			if (answer.length === 0 && x[x_index] === "0") {
				return "0";
			}
			answer += x[x_index];
			x_index++;
			y_index++;
		} else if (x[x_index] < y[y_index]) {
			y_index++;
		} else {
			x_index++;
		}
	}
	return answer.length ? answer : "-1";
}
