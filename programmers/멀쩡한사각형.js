const gcd = (a, b) => {
	let c;
	while (b !== 0) {
		c = a % b;
		a = b;
		b = c;
	}

	return a;
};

const solution = (w, h) => w * h - (w + h - gcd(w, h));
