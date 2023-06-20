function solution(rank, attendance) {
	const rankWithIndex = rank.map((num, index) => [index, num]);
	const attendee = rankWithIndex.filter((_, index) => attendance[index]);
	attendee.sort((a, b) => a[1] - b[1]);
	return attendee[0][0] * 10000 + attendee[1][0] * 100 + attendee[2][0];
}
