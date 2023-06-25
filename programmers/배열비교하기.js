const SAME = 0;
const BIGGER = 1;
const SMALLER = -1;

function solution(arr1, arr2) {
	const sum = (arr) => arr.reduce((acc, cur) => acc + cur, 0);

	const compare = (a, b) => {
		if (a === b) return SAME;
		if (a > b) return BIGGER;
		return SMALLER;
	};

	if (compare(arr1.length, arr2.length) === SAME) {
		return compare(sum(arr1), sum(arr2));
	}

	return compare(arr1.length, arr2.length);
}
