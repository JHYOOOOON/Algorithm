function solution(record) {
	const user = new Map();
	record.map((str) => {
		const [cmd, id, name] = str.split(" ");
		if (cmd !== "Leave") {
			user.set(id, name);
		}
	});

	const answer = record.reduce((prev, cur) => {
		const [cmd, id, name] = cur.split(" ");
		if (cmd === "Enter") {
			prev.push(`${user.get(id)}님이 들어왔습니다.`);
		} else if (cmd === "Leave") {
			prev.push(`${user.get(id)}님이 나갔습니다.`);
		}
		return prev;
	}, []);

	return answer;
}
