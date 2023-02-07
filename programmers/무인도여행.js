function solution(maps) {
	const answer = [];
	const ROW = maps.length;
	const COL = maps[0].length;
	const visited = Array.from(Array(ROW), () => Array(COL).fill(false));
	const queue = [];
	const dx = [0, 1, 0, -1];
	const dy = [1, 0, -1, 0];

	for (let i = 0; i < ROW; i++) {
		for (let j = 0; j < COL; j++) {
			if (visited[i][j] === false && maps[i][j] !== "X") {
				visited[i][j] = true;
				queue.push([i, j]);
				let sum = Number(maps[i][j]);
				while (queue.length > 0) {
					const [x, y] = queue.shift();
					for (let index = 0; index < 4; index++) {
						const nx = x + dx[index];
						const ny = y + dy[index];
						if (nx < 0 || nx >= ROW || ny < 0 || ny >= COL) continue;
						if (visited[nx][ny] || maps[nx][ny] === "X") continue;
						visited[nx][ny] = true;
						queue.push([nx, ny]);
						sum += Number(maps[nx][ny]);
					}
				}
				answer.push(sum);
			}
		}
	}

	answer.sort((a, b) => a - b);

	return answer.length > 0 ? answer : [-1];
}
