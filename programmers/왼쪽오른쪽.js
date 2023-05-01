const MAX = 20 + 1;

const getTargetIndex = (alpha, list) => {
	const index = list.indexOf(alpha);
	return index === -1 ? MAX : index;
};

function solution(str_list) {
	const left = getTargetIndex("l", str_list);
	const right = getTargetIndex("r", str_list);

	if (left === MAX && right === MAX) {
		return [];
	} else if (left < right) {
		return str_list.slice(0, left);
	} else {
		return str_list.slice(right + 1);
	}
}
