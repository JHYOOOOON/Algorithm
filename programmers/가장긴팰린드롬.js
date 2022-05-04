function solution(s) {
	for (let len = s.length; len >= 1; len--) {
		for (let idx = 0; idx <= s.length - len; idx++) {
			const flag = isPalindrom(s.slice(idx, idx + len));
			if (flag) return len;
		}
	}

	return 1;
}

const isPalindrom = (str) => {
	for (let idx = 0; idx < Math.floor(str.length / 2); idx++) {
		if (str[idx] !== str[str.length - idx - 1]) return false;
	}

	return true;
};
