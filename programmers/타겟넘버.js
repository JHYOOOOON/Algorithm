const solution = (numbers, target) => {
    let answer = 0;
    
    const checkTarget = (total, depth) => {
        if(depth === numbers.length) {
            if(total === target) {
                answer++;
            }
            return;
        }
        
        checkTarget(total + numbers[depth], depth + 1);
        checkTarget(total - numbers[depth], depth + 1);
    }
    
    checkTarget(0, 0);
    
    return answer;
}