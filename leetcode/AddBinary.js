/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    let len = digits.length - 1;
    let remain = 1;
    for (len; len >= 0; len--) {
        const target = digits[len];
        if (remain === 0) {
            return digits;
        }
        digits[len] = (target + remain) % 10;
        remain = Math.floor((target + 1) / 10);
    }

    if (remain === 0) {
        return digits;
    }
    digits.unshift(remain);
    return digits;
};