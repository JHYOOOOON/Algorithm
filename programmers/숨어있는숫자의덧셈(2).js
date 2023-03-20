function solution(my_string) {
	let answer = 0;
	let num_str = "";

	my_string.split("").map((item) => {
		if (isNaN(item)) {
			answer += Number(num_str);
			num_str = "";
		} else {
			num_str += item;
		}
	});

	return answer + Number(num_str);
}
