function solution(a, b, n) {
	let answer = 0;
	let emptyCola = n;
	let newCola = 0;
	while (emptyCola >= a) {
		newCola = Math.floor(emptyCola / a) * b;
		answer += newCola;
		emptyCola = (emptyCola % a) + newCola;
	}
	return answer;
}
