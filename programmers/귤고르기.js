function solution(k, tangerine) {
    let answer = 0;
    const count_map = new Map();
    
    tangerine.forEach((item) => {
        if (count_map.has(item)) {
            count_map.set(item, count_map.get(item) + 1);
        } else {
            count_map.set(item, 1);
        }
    })
    
    Array.from(count_map, ([_, value]) => value)
        .sort((a, b) => b - a)
        .forEach((item) => {
            if (k <= 0) return;
            k -= item;
            answer++;
        })
    
    return answer;
}