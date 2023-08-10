function solution(elements) {
	const double_elements = [...elements, ...elements];
	const sum = new Set();
	const max_length = elements.length;

	const getSum = (arr) => arr.reduce((acc, cur) => acc + cur, 0);

	elements.forEach((_, index) => {
		for (let count = 1; count <= max_length; count++) {
			if (index + count === double_elements.length) break;
			sum.add(getSum(double_elements.slice(index, index + count)));
		}
	});

	return sum.size;
}
