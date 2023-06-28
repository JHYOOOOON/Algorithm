function solution(my_string, is_suffix) {
	const targetIndex = my_string.lastIndexOf(is_suffix);
	return targetIndex !== -1 && targetIndex === my_string.length - is_suffix.length ? 1 : 0;
}
