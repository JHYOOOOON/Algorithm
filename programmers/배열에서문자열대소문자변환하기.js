function solution(strArr) {
    return strArr.map((str, index) => index % 2 ? str.toUpperCase() : str.toLowerCase());
}