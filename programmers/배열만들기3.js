function solution(arr, intervals) {
    const answer = [];
    intervals.forEach(([a, b]) => {
        answer.push(...arr.slice(a, b + 1));
    })
    return answer;
}