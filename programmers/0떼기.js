function solution(n_str) {
	const targetIndex = n_str.split("").findIndex((num) => num !== "0");
	return n_str.slice(targetIndex);
}
