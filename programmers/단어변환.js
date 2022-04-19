function solution(begin, target, words) {
	if (words.indexOf(target) === -1) {
		return 0;
	}

	let answer = 50;
	const isused = Array(target.length).fill(false);

	const canChange = (a, b) => {
		let cnt = 0;
		a.split("").forEach((alpha, idx) => {
			if (alpha !== b[idx]) {
				cnt++;
			}
		});

		return cnt === 1 ? true : false;
	};

	const changeWord = (before, cnt) => {
		if (before === target) {
			answer = Math.min(answer, cnt);
			return;
		}

		for (let idx = 0; idx < words.length; idx++) {
			if (before === words[idx]) continue;
			if (!isused[idx] && canChange(before, words[idx])) {
				isused[idx] = true;
				changeWord(words[idx], cnt + 1);
				isused[idx] = false;
			}
		}
	};

	changeWord(begin, 0);

	return answer;
}
