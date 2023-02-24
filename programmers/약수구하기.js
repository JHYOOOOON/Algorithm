function solution(n) {
	const set = new Set();
	for (let i = 1; i <= n; i++) {
		if (n % i === 0) {
			set.add(i);
		}
	}
	return [...set];
}
