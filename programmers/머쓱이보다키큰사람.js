function solution(array, height) {
	return array.filter((item) => item > height).length;
}
