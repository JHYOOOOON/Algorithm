function solution(rsp) {
	const win = {
		5: "2",
		2: "0",
		0: "5",
	};

	return rsp
		.split("")
		.map((item) => win[item])
		.join("");
}
