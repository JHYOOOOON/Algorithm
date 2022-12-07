function solution(s) {
	let answer = 0;
	let startAlpha = "";
	let firstCount = 0;
	const stack = [];

	s.split("").map((alpha) => {
		if (startAlpha === "") {
			startAlpha = alpha;
			firstCount = 1;
		} else {
			if (alpha === startAlpha) {
				firstCount++;
			} else {
				stack.push(alpha);
			}
		}

		if (firstCount && stack.length === firstCount) {
			answer++;
			startAlpha = "";
			while (stack.length) {
				stack.pop();
			}
		}
	});

	return stack.length || startAlpha ? answer + 1 : answer;
}
