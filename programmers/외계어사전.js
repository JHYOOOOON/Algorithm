function solution(spell, dic) {
	for (let word of dic) {
		const isAilen = spell.length === word.length && spell.every((alpha) => word.includes(alpha));
		if (isAilen) return 1;
	}
	return 2;
}
