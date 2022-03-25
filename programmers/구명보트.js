function solution(people, limit) {
	let answer = 0;

	people.sort((a, b) => b - a);

	for (let front = 0, back = people.length - 1; front <= back; front++) {
		if (people[front] + people[back] <= limit) {
			back--;
		}
		answer++;
	}

	return answer;
}
