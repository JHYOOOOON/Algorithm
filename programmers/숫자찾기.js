function solution(num, k) {
	const targetIndex = String(num)
		.split("")
		.findIndex((target) => target === k.toString());
	return targetIndex === -1 ? -1 : targetIndex + 1;
}
