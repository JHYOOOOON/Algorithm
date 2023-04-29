function solution(number) {
    return number.split('').reduce((acc, cur) => acc + Number(cur), 0) % 9;
}
