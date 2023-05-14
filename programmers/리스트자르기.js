function solution(n, slicer, num_list) {
	const [a, b, c] = slicer;
	const sliced_list = {
		1: num_list.slice(0, b + 1),
		2: num_list.slice(a),
		3: num_list.slice(a, b + 1),
		4: num_list.slice(a, b + 1).filter((_, index) => index % c === 0),
	};
	return sliced_list[n];
}
