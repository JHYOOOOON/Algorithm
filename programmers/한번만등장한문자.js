function solution(s) {
    const answer = [];
    s.split('').forEach((alpha) => s.indexOf(alpha) === s.lastIndexOf(alpha) && answer.push(alpha));
    answer.sort();
    return answer.join('');
}