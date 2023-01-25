function solution(numlist, n) {
	numlist.sort((a, b) => {
		const a_abs = Math.abs(n - a);
		const b_abs = Math.abs(n - b);
		if (a_abs === b_abs) {
			return b - a;
		}
		return a_abs - b_abs;
	});
	return numlist;
}
