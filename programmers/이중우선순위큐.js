function solution(operations) {
    const queue = [];
    
    operations.forEach((operation) => {
        const [cmd, num] = operation.split(' ');
        if(cmd === "I") {
            queue.push(Number(num));
            queue.sort((a, b) => b - a);
        } else if(queue.length && cmd === "D") {
            (num === '1') ? queue.shift() : queue.pop();
        }
    });
    
    return queue.length ? [queue[0], queue[queue.length-1]] : [0, 0];
}