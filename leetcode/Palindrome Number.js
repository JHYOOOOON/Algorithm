/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str = x.toString();
    for(let i=0; i<str.length/2; i++) {
        if(str[i] !== str[str.length - 1 - i]) return false;
    }
    return true;
};
