function solution(maps) {
	const ROW = maps.length;
	const COL = maps[0].length;
	const dy = [1, 0, -1, 0];
	const dx = [0, 1, 0, -1];

	const visited = Array.from(Array(ROW), () => Array(COL).fill(0));
	const queue = [];

	queue.push([0, 0]);
	visited[0][0] = 1;

	let nx, ny;
	while (queue.length) {
		const [x, y] = queue.shift();

		for (let idx = 0; idx < 4; idx++) {
			nx = x + dx[idx];
			ny = y + dy[idx];

			if (nx < 0 || nx >= ROW || ny < 0 || ny >= COL) continue;
			if (visited[nx][ny] || !maps[nx][ny]) continue;

			visited[nx][ny] = visited[x][y] + 1;
			queue.push([nx, ny]);
		}
	}

	return visited[ROW - 1][COL - 1] ? visited[ROW - 1][COL - 1] : -1;
}
