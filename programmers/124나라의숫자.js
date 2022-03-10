const solution = (n) => {
    let answer = '';
    const numberArr = ['1', '2', '4'];
    
    while(n >= 1){
        answer = numberArr[(n - 1) % 3] + answer;
        n = Math.floor((n - 1) / 3);
    }
    
    return answer;
}