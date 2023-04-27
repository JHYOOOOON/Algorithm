function solution(q, r, code) {
	return code
		.split("")
		.filter((_, index) => index % q === r)
		.join("");
}
