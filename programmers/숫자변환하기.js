function solution(x, y, n) {
	const queue = [];
	let index = 0;
	const visited = Array(y + 1).fill(-1);
	visited[x] = 0;
	queue.push(x);

	const checkVisited = (targetIndex, originIndex) => {
		if (targetIndex <= y && visited[targetIndex] === -1) {
			queue.push(targetIndex);
			visited[targetIndex] = visited[originIndex] + 1;
		}
	};

	while (queue.length > index) {
		const nx = queue[index++];
		if (nx === y) {
			return visited[nx];
		}
		checkVisited(nx + n, nx);
		checkVisited(nx * 2, nx);
		checkVisited(nx * 3, nx);
	}

	return -1;
}
