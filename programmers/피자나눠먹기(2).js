const gcd = (a, b) => {
	let c = 0;
	while (b !== 0) {
		c = a % b;
		a = b;
		b = c;
	}

	return a;
};

const lcm = (a, b) => (a * b) / gcd(a, b);

function solution(n) {
	const PIZZA_SLICE = 6;
	return lcm(n, PIZZA_SLICE) / PIZZA_SLICE;
}
