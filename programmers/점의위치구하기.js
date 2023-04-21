function solution(dot) {
	const [x, y] = dot;
	if (x * y > 0) {
		return x < 0 ? 3 : 1;
	} else {
		return x < y ? 2 : 4;
	}
}
