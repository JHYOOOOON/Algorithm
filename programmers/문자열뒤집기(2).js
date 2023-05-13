function solution(my_string, s, e) {
	const alphas = my_string.split("");
	return [...alphas.slice(0, s), ...alphas.slice(s, e + 1).reverse(), ...alphas.slice(e + 1)].join("");
}
