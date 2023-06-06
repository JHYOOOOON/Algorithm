function solution(my_string) {
	return my_string
		.split("")
		.map((_, index) => my_string.slice(index))
		.sort();
}
