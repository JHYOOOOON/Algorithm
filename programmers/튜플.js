function solution(s) {
	const tuples = JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]"));
	tuples.sort((a, b) => a.length - b.length);

	return tuples.map((tuple, idx) => {
		if (idx === 0) {
			return tuple[0];
		} else {
			return tuple.filter((num) => !tuples[idx - 1].includes(num))[0];
		}
	});
}
