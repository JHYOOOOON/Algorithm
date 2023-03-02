function solution(age) {
	const alpha = "abcdefghij";
	return age
		.toString()
		.split("")
		.map((item) => alpha[item])
		.join("");
}
