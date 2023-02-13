function solution(numbers) {
    let answer = numbers;
    const NUMBERS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    NUMBERS.forEach((num, index) => answer = answer.replaceAll(num, index));
    return Number(answer);
}