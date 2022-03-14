const countOne = (x) => {
    let count = 0;
    while(x >= 1){
        x % 2 && count++;
        x = Math.floor(x / 2);
    }
    return count;
}

const solution = (n) => {
    const nCount = countOne(n);
    
    while(++n){
        if(nCount === countOne(n)) return n;   
    }
}