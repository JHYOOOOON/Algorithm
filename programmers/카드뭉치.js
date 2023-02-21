function solution(cards1, cards2, goal) {
	const wordWrap = [...goal];
	const cardsOne = [...cards1];
	const cardsTwo = [...cards2];

	while (wordWrap.length > 0) {
		if (cardsOne.length > 0 && cardsOne[0] === wordWrap[0]) {
			wordWrap.shift();
			cardsOne.shift();
		} else if (cardsTwo.length > 0 && cardsTwo[0] === wordWrap[0]) {
			wordWrap.shift();
			cardsTwo.shift();
		} else {
			return "No";
		}
	}

	return "Yes";
}
