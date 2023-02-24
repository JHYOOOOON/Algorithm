function solution(my_string) {
	const arr = my_string.split(" ");
	let answer = Number(arr[0]);
	for (let index = 2; index < arr.length; index += 2) {
		const op = arr[index - 1];
		answer = op === "+" ? answer + Number(arr[index]) : answer - Number(arr[index]);
	}
	return answer;
}
