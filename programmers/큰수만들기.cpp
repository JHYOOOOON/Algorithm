function solution(number, k) {
    const LEN = number.length - k;
    
    let answer = "0";
    
    const findMxNumber = (idx, str) => {
        if(str.length === LEN){
            answer = Number(answer) < Number(str) ? str : answer;
            return;
        }
        
        for(let i=idx; i<number.length; i++) {
            findMxNumber(idx+1, str+number[i]);
            findMxNumber(idx+1, str);
        }
    }
    
    findMxNumber(0, "");
    
    return answer;
}