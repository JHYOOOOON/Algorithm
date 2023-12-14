function solution(num_list, n) {
	return num_list.filter((item) => item === n).length > 0 ? 1 : 0;
}
