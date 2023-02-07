function getNextAlpha(alpha) {
	if (alpha === "z") {
		return "a";
	}
	return String.fromCharCode(alpha.charCodeAt(0) + 1);
}

function solution(s, skip, index) {
	return s
		.split("")
		.map((alpha) => {
			let count = index;
			let nextAlpha = alpha;
			while (count !== 0) {
				nextAlpha = getNextAlpha(nextAlpha);
				if (skip.includes(nextAlpha) === false) {
					count--;
				}
			}
			return nextAlpha;
		})
		.join("");
}
