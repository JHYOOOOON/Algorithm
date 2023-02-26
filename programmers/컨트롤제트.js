function solution(s) {
	const splitedS = s.split(" ");
	return splitedS
		.filter((item, index) => item !== "Z" && splitedS[index + 1] !== "Z")
		.reduce((acc, cur) => acc + Number(cur), 0);
}
