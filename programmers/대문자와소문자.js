function solution(my_string) {
	return my_string
		.split("")
		.map((alpha) => ("a" <= alpha && alpha <= "z" ? alpha.toUpperCase() : alpha.toLowerCase()))
		.join("");
}
