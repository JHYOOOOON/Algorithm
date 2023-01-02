function solution(babbling) {
    let answer = 0;
    const list = ["aya", "ye", "woo", "ma"];
    let flag = true;
    for (let word of babbling) {
        flag = true;
        list.forEach((item, index) => word = word.replaceAll(item, index));
        const replacedWord = word.split('');
        for (let index = 0; index < replacedWord.length; index++) {
            if (replacedWord[index] === replacedWord[index - 1] ||
               isNaN(replacedWord[index])) {
                flag = false;
                continue;
            }
        }
        if (flag) answer++;
    }
    return answer;
}