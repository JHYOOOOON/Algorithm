/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	let prefix = "";

	strs.sort((a, b) => (a < b ? -1 : 1));
	const firstWord = strs[0];
	const lastWord = strs[strs.length - 1];
	const len = firstWord.length < lastWord.length ? firstWord.length : lastWord.length;

	for (let index = 0; index < len; index++) {
		if (firstWord[index] === lastWord[index]) {
			prefix += firstWord[index];
		} else {
			break;
		}
	}

	return prefix;
};
