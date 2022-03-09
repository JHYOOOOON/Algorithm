const cmp = (a, b) => {
    const a_str = a.toString();
    const b_str = b.toString();
    
    return (b_str + a_str) - (a_str + b_str);
} 

const solution = (numbers) => {
    const cp_numbers = [...numbers];
    cp_numbers.sort(cmp);
    
    const answer = cp_numbers.join('');
    return answer[0] === '0' ? '0' : answer;
}