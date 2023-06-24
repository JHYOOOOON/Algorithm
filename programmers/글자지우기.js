function solution(my_string, indices) {
	return my_string
		.split("")
		.map((alpha, index) => (indices.includes(index) ? "" : alpha))
		.join("");
}
