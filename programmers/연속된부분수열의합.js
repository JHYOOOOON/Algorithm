function solution(sequence, k) {
	let answer = null;
	let sum = [0];
	let left = 0;
	let right = 0;

	sequence.forEach((item, index) => sum.push(item + sum[index]));

	while (left <= right) {
		if (k === sum[right] - sum[left]) {
			if (
				answer === null ||
				answer[1] - answer[0] > right - left - 1 ||
				(answer[1] - answer[0] === right - left - 1 && answer[0] > left - 1)
			) {
				answer = [left, right - 1];
			}
		}

		if (k > sum[right] - sum[left]) {
			right++;
		} else {
			left++;
		}
	}

	return answer;
}
