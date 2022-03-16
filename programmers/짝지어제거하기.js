const solution = (s) => {
    const stack = [];
    s.split('').map((alpha) => {
        if(!stack.length || stack[stack.length-1] !== alpha){
            stack.push(alpha);
        } else{
            stack.pop();
        }
    })
    
    return (stack.length) ? 0 : 1;
}