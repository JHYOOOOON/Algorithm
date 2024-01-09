function solution(numbers, n) {
	return numbers.reduce((acc, cur) => (acc <= n ? acc + cur : acc), 0);
}
