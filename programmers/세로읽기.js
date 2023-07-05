function solution(my_string, m, c) {
	return my_string
		.split("")
		.filter((_, index) => index % m === c - 1)
		.join("");
}
