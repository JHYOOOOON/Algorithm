function solution(n) {
	let sum = 0;
	for (let num = 1; num <= n; num++) {
		if (n % 2 === num % 2) {
			sum += n % 2 ? num : num * num;
		}
	}
	return sum;
}
