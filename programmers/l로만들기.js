const STANDARD = "l";

function solution(myString) {
	return myString
		.split("")
		.map((alpha) => (alpha <= STANDARD ? STANDARD : alpha))
		.join("");
}
