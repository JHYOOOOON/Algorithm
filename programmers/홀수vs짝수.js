function solution(num_list) {
	const sum = (condition) => num_list.filter((_, index) => condition(index)).reduce((acc, cur) => acc + cur, 0);

	const oddSum = sum((index) => index % 2 === 0);
	const evenSum = sum((index) => index % 2 === 1);

	return oddSum < evenSum ? evenSum : oddSum;
}
