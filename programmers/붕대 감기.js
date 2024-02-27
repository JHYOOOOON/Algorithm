function solution(bandage, health, attacks) {
	let answer = health;
	let continuity = 0;
	let lastTime = attacks[attacks.length - 1][0];

	for (let time = 1; time <= lastTime; time++) {
		const [attackTime, damage] = attacks[0];

		if (attackTime === time) {
			continuity = 0;
			attacks.shift();
			answer -= damage;
		} else {
			const [bandageTime, heal, extra] = bandage;

			continuity++;
			if (continuity === bandageTime) {
				answer += heal + extra;
				continuity = 0;
			} else {
				answer += heal;
			}
			console.log(answer);

			if (answer > health) answer = health;
		}

		if (answer < 0) return -1;
	}

	return answer <= 0 ? -1 : answer;
}
