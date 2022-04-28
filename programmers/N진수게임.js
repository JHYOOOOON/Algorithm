function solution(n, t, m, p) {
	let answer = "";
	let game = "0";
	let num = 0;
	while (++num) {
		if (game.length > m * t) break;
		game += num.toString(n);
	}

	let idx = p - 1;
	while (answer.length !== t) {
		answer += game[idx];
		idx += m;
	}

	return answer.toUpperCase();
}
