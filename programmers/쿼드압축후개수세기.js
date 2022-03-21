function solution(arr) {
	const answer = [0, 0];

	const compressArr = (x, y, width) => {
		if (width === 1) {
			answer[arr[x][y]]++;
			return;
		}

		let flag = true;
		const n = arr[x][y];
		for (let i = x; i < x + width; i++) {
			for (let j = y; j < y + width; j++) {
				if (arr[i][j] === n) continue;
				flag = false;
			}
			if (!flag) break;
		}

		if (flag) {
			answer[n]++;
		} else {
			compressArr(x, y, width / 2);
			compressArr(x, y + width / 2, width / 2);
			compressArr(x + width / 2, y, width / 2);
			compressArr(x + width / 2, y + width / 2, width / 2);
		}
	};

	compressArr(0, 0, arr.length);

	return answer;
}
