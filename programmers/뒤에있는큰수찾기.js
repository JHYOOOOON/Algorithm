function solution(numbers) {
    const answer = [];
    const stack = [];
    const len = numbers.length;
    for (let index = len - 1; index >= 0; index--) {
        while (stack.length !== 0 && stack[stack.length - 1] <= numbers[index]) {
            stack.pop();
        }
        (stack.length === 0) ? answer.push(-1) : answer.push(stack[stack.length - 1]);
        stack.push(numbers[index]);
    }
    answer.reverse();
    return answer;
}