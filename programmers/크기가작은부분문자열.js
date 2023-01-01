function solution(t, p) {
	let answer = 0;
	const p_len = p.length;
	for (let index = 0; index < t.length - p_len + 1; index++) {
		const splited_t = t.substr(index, p_len);
		if (Number(splited_t) <= Number(p)) answer++;
	}
	return answer;
}
