function solution(s1, s2) {
	return s1.filter((item) => s2.includes(item)).length;
}
