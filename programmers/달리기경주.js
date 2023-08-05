function solution(players, callings) {
	const play = new Map();
	const rank = new Map();

	players.forEach((player, index) => {
		play.set(player, index + 1);
		rank.set(index + 1, player);
	});

	callings.forEach((caller, index) => {
		const callerRank = play.get(caller);
		const prevPlayer = rank.get(callerRank - 1);

		play.set(caller, callerRank - 1);
		play.set(prevPlayer, callerRank);
		rank.set(callerRank - 1, caller);
		rank.set(callerRank, prevPlayer);
	});

	return Array.from(rank.values());
}
