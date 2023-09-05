function solution(order) {
	const menu = ["anything", "americano", "cafelatte"];
	const price = [4500, 4500, 5000];

	return order.reduce((acc, cur) => {
		for (let index = 0; index < menu.length; index++) {
			if (cur.includes(menu[index])) {
				return acc + price[index];
			}
		}
	}, 0);
}
