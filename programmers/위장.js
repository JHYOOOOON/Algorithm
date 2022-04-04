function solution(clothes) {
	const clothesCnt = new Map();

	clothes.forEach((cloth) => {
		const type = cloth[1];
		if (clothesCnt.has(type)) {
			clothesCnt.set(type, clothesCnt.get(type) + 1);
		} else {
			clothesCnt.set(type, 1);
		}
	});

	let answer = 1;

	clothesCnt.forEach((cnt) => (answer *= cnt + 1));

	return answer - 1;
}
