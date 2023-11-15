function solution(user_id, banned_id) {
	const selected = Array(user_id.length).fill(false);
	const answer = new Set();
	const regex = banned_id.map((id) => new RegExp(`^${id.replaceAll("*", ".")}$`));

	const dfs = (index = 0, list = []) => {
		if (index === banned_id.length) {
			answer.add(list.sort().join(","));
		} else {
			for (let i = 0; i < user_id.length; i++) {
				if (selected[i]) continue;

				if (user_id[i].match(regex[index])) {
					selected[i] = true;
					dfs(index + 1, [...list, user_id[i]]);
					selected[i] = false;
				}
			}
		}
	};

	dfs();

	return answer.size;
}
