function solution(maps) {
	const ROW = maps.length;
	const COL = maps[0].length;
	const dx = [0, 1, 0, -1];
	const dy = [-1, 0, 1, 0];
	const CANT_EXIT = -1;
	let start, finish, lever;

	function bfs(startX, startY, finishX, finishY) {
		const queue = [];
		const visited = Array.from(Array(ROW), () => Array(COL).fill(-1));

		visited[startX][startY] = 0;
		queue.push([startX, startY]);

		while (queue.length > 0) {
			const [x, y] = queue.shift();
			if (x === finishX && y === finishY) {
				return visited[x][y];
			}
			for (let index = 0; index < 4; index++) {
				const nx = x + dx[index];
				const ny = y + dy[index];
				if (nx < 0 || nx >= ROW || ny < 0 || ny >= COL) continue;
				if (visited[nx][ny] !== -1 || maps[nx][ny] === "X") continue;
				visited[nx][ny] = visited[x][y] + 1;
				queue.push([nx, ny]);
			}
		}

		return -1;
	}

	for (let i = 0; i < ROW; i++) {
		for (let j = 0; j < COL; j++) {
			if (maps[i][j] === "S") {
				start = [i, j];
			} else if (maps[i][j] === "L") {
				lever = [i, j];
			} else if (maps[i][j] === "E") {
				finish = [i, j];
			}
		}
	}

	const toLever = bfs(start[0], start[1], lever[0], lever[1]);
	if (toLever === CANT_EXIT) return CANT_EXIT;
	const toFinish = bfs(lever[0], lever[1], finish[0], finish[1]);
	if (toFinish === CANT_EXIT) return CANT_EXIT;

	return toLever + toFinish;
}
