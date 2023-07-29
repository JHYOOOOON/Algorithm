function solution(a, d, included) {
	return included.map((flag, index) => (flag ? a + d * index : 0)).reduce((acc, cur) => acc + cur, 0);
	// 정답에 reduce로만 푸는 방법이 있었음
	// return included.reduce((acc, flag, i) => {
	// 	return flag ? acc + a + d * i : acc;
	// }, 0);
}
