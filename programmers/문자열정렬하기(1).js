function solution(my_string) {
    const answer = [];
    my_string.split('').forEach((num) => isNaN(num) === false && answer.push(Number(num)));
    answer.sort();
    return answer;
}