function solution(n) {
    for(let mod = 2; mod < n; mod++) {
       if(n % mod === 1) return mod; 
    }
}