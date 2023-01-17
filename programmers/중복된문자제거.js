function solution(my_string) {
    let answer = '';
    const checkedAlpha = new Set();
    my_string.split('').forEach((alpha) => {
        if (checkedAlpha.has(alpha) === false) {
            checkedAlpha.add(alpha);
            answer += alpha;
        }
    })
    return answer;
}