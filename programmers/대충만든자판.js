function solution(keymap, targets) {
	const answer = Array(targets.length).fill(0);
	const minKeyPress = new Map();

	keymap.forEach((key) => {
		key.split("").forEach((alpha, targetIndex) => {
			if (minKeyPress.has(alpha)) {
				if (targetIndex + 1 < minKeyPress.get(alpha)) {
					minKeyPress.set(alpha, targetIndex + 1);
				}
			} else {
				minKeyPress.set(alpha, targetIndex + 1);
			}
		});
	});

	targets.forEach((words, index) => {
		const word = words.split("");
		for (let alpha of word) {
			if (minKeyPress.has(alpha)) {
				answer[index] += minKeyPress.get(alpha);
			} else {
				answer[index] = -1;
				break;
			}
		}
	});
	return answer;
}
