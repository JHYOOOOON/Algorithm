function solution(name, yearning, photo) {
	const board = {};
	for (let index = 0; index < name.length; index++) {
		board[name[index]] = yearning[index];
	}

	return photo.map((people) => people.reduce((acc, cur) => (Boolean(board[cur]) ? acc + board[cur] : acc), 0));
}
