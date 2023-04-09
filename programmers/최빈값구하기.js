function solution(array) {
    const sum = {};
    array.forEach((item) => {
        if (item in sum) {
            sum[item] += 1;
        } else {
            sum[item] = 1;
        }
    })
    
    const convertedArray = Object.keys(sum).map((key) => [Number(key), sum[key]]);
    convertedArray.sort((a, b) => b[1] - a[1]);
    return convertedArray.length > 1 && convertedArray[0][1] === convertedArray[1][1] ? -1 : convertedArray[0][0];
}