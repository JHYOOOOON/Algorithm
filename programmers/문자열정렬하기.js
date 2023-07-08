function solution(myString) {
	return myString
		.split("x")
		.filter((word) => word.length > 0)
		.sort();
}
