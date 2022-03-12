const MAX = 100000 + 1;
const MOD = 1234567;

const solution = (n) => {
    const fibo = Array(MAX).fill(0);
    fibo[1] = 1;
    for(let i=2; i<=n; i++) fibo[i] = (fibo[i-1] + fibo[i-2]) % MOD;
    return fibo[n];
}