function solution(id_pw, db) {
	let answer = "fail";
	const [targetId, targetPw] = id_pw;
	db.findIndex((item) => {
		const [id, pw] = item;
		if (id === targetId && pw === targetPw) {
			answer = "login";
		} else if (id === targetId && pw !== targetPw && answer !== "login") {
			answer = "wrong pw";
		}
	});

	return answer;
}
