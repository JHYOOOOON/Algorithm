function solution(names) {
	return names.filter((_, index) => index % 5 === 0);
}
