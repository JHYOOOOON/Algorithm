function solution(food) {
	let answer = "";
	for (let index = 1; index < food.length; index++) {
		answer += String(index).repeat(Math.floor(food[index] / 2));
	}
	return answer + "0" + [...answer].reverse().join("");
}
