const gcd = (a, b) => {
    let c = 0;
    while(b != 0){
        c = a % b;
        a = b;
        b = c;
    }
    return a;
}

const lcm = (a, b) => a * b / gcd(a, b);

const solution = (arr) => arr.reduce((a, b) => lcm(a, b));