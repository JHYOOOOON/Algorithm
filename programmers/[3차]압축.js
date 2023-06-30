function solution(msg) {
	const answer = [];
	const dictionary = new Map();
	let dictionary_index = 0;

	while (true) {
		const alpha = String.fromCharCode("A".charCodeAt(0) + dictionary_index++);
		dictionary.set(alpha, dictionary_index);
		if (alpha === "Z") {
			dictionary_index++;
			break;
		}
	}

	let targetWord = msg[0];
	let targetIndex = 0;

	for (let index = 1; index < msg.length; index++) {
		const prevIndex = dictionary.get(targetWord);
		targetWord += msg[index];
		targetIndex = dictionary.get(targetWord);
		if (Boolean(prevIndex) && Boolean(targetIndex) === false) {
			answer.push(prevIndex);
			dictionary.set(targetWord, dictionary_index++);
			targetWord = targetWord[targetWord.length - 1];
		}
	}

	if (dictionary.get(targetWord)) {
		answer.push(dictionary.get(targetWord));
	} else {
		answer.push(dictionary_index + 1);
	}

	return answer;
}
