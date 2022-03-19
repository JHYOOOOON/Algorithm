function solution(progresses, speeds) {
	const answer = [];

	let mxDay = 0;
	progresses.map((progress, idx) => {
		const day = Math.floor((99 - progress) / speeds[idx]) + 1;
		!answer.length || mxDay < day ? answer.push(1) : answer[answer.length - 1]++;
		if (mxDay < day) mxDay = day;
	});

	return answer;
}
