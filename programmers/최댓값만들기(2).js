function solution(numbers) {
    numbers.sort((a, b) => a - b);
    const leftProduct = numbers[0] * numbers[1];
    const rightProduct = numbers[numbers.length - 1] * numbers[numbers.length - 2];
    return leftProduct < rightProduct ? rightProduct : leftProduct;
}