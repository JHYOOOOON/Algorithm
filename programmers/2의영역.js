function solution(arr) {
	const firstIndex = arr.indexOf(2);
	const lastIndex = arr.lastIndexOf(2);
	return firstIndex === -1 ? [-1] : arr.slice(firstIndex, lastIndex + 1);
}
