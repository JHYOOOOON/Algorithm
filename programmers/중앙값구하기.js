function solution(array) {
    array.sort((a, b) => a - b);
    return array[Math.floor(array.length / 2)];
}