function solution(priorities, location) {
	let answer = 0;
	const waitList = priorities.map((item, idx) => {
		return {
			priority: item,
			index: idx,
		};
	});

	while (waitList.length) {
		const { priority, index } = waitList.shift();
		if (waitList.some((item) => item.priority > priority)) {
			waitList.push({ priority, index });
		} else {
			answer++;
			if (index === location) return answer;
		}
	}

	return answer;
}
