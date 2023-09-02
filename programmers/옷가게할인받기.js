function solution(price) {
	const discount = (price) => {
		if (price >= 500000) return price * 0.8;
		if (price >= 300000) return price * 0.9;
		if (price >= 100000) return price * 0.95;
		return price;
	};
	return discount(price);
}
