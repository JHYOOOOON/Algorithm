function solution(arr, divisor) {
	const filteredArr = arr.filter((item) => item % divisor === 0);
	return filteredArr.length === 0 ? [-1] : filteredArr.sort((a, b) => a - b);
}
