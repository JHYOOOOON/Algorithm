function solution(n, edge) {
    const graph = Array.from(Array(n+1), () => new Array());
    const visited = Array(n+1).fill(-1);
    
    /* 그래프 완성 */
    edge.forEach((node) => {
        graph[node[0]].push(node[1]);
        graph[node[1]].push(node[0]);
    });
    
    const queue = [1];
    visited[1] = 0;
    
    /* 1로부터의 거리 계산 */
    let cur;
    while(queue.length) {
        cur = queue.shift();
        for(let node of graph[cur]) {
            if(visited[node] !== -1) continue;
            visited[node] = visited[cur] + 1;
            queue.push(node);
        }
    }
    
    /* 가장 먼 노드 개수 계산 */
    let answer = 0;
    const maxDist = Math.max(...visited);
    visited.forEach((dist) => maxDist === dist && answer++)
    
    return answer;
}