function solution(wallpaper) {
	const answer = [wallpaper.length, wallpaper[0].length, 0, 0];
	for (let x = 0; x < wallpaper.length; x++) {
		for (let y = 0; y < wallpaper[x].length; y++) {
			if (wallpaper[x][y] === "#") {
				if (x < answer[0]) {
					answer[0] = x;
				}
				if (x + 1 > answer[2]) {
					answer[2] = x + 1;
				}
				if (y < answer[1]) {
					answer[1] = y;
				}
				if (y + 1 > answer[3]) {
					answer[3] = y + 1;
				}
			}
		}
	}
	return answer;
}
