function solution(before, after) {
	return Number(before.split("").sort().join("") === after.split("").sort().join(""));
}
