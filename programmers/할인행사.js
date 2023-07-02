function solution(want, number, discount) {
	let answer = 0;
	const products = new Map();
	const DAYS = 10;

	want.forEach((item, index) => products.set(item, number[index]));

	const canJoin = (discount) => {
		const products_copy = new Map(products);

		for (let item of discount) {
			const count = products_copy.get(item);
			if (Boolean(count) === false) return false;
			products_copy.set(item, count - 1);
		}

		return true;
	};

	for (let index = 0; index <= discount.length - DAYS; index++) {
		if (canJoin(discount.slice(index, index + DAYS))) {
			answer++;
		}
	}

	return answer;
}
