function solution(my_string, n) {
	return my_string
		.split("")
		.map((alpha) => alpha.repeat(n))
		.join("");
}
