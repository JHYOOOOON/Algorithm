const solution = (A, B) =>{
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    
    return A.reduce((prev, cur, idx) => prev + cur * B[idx], 0);
}