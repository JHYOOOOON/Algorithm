function solution(number, limit, power) {
	const array = Array.from({ length: number }, (_, index) => index + 1);
	return array
		.map((num) => {
			if (num === 1) return num;
			let count = 0;
			for (let n = 1; n <= Math.sqrt(num); n++) {
				if (num % n === 0) {
					count += num / n === n ? 1 : 2;
				}
			}
			return count <= limit ? count : power;
		})
		.reduce((a, b) => a + b, 0);
}
