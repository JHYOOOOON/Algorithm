function solution(park, routes) {
    const ROW = park.length;
    const COL = park[0].length;
    
    const findStart = () => {
        for (let x = 0; x < ROW; x++) {
            for (let y = 0; y < COL; y++) {
                if (park[x][y] === 'S') {
                    return [x, y];
                }     
            }
        }    
    }
    
    const canGo = (start, arrive) => {
        const [start_x, start_y] = start;
        const [arrive_x, arrive_y] = arrive;
        if (arrive_x < 0 || arrive_x >= ROW || arrive_y < 0 || arrive_y >= COL) return false;
        
        if (start_x === arrive_x) {
            if (start_y < arrive_y) {
                for (let y = start_y; y <= arrive_y; y++) {
                    if (park[start_x][y] === 'X') return false;
                }
            } else {
                for (let y = start_y; y >= arrive_y; y--) {
                    if (park[start_x][y] === 'X') return false;
                }
            }
        }
        
        if (start_y === arrive_y) {
            if (start_x < arrive_x) {
                for (let x = start_x; x <= arrive_x; x++) {
                    if (park[x][start_y] === 'X') return false;
                }
            } else {
                for (let x = start_x; x >= arrive_x; x--) {
                    if (park[x][start_y] === 'X') return false;

                }
            }
        }
        return true;
    }
    
    let start = findStart();
    
    routes.forEach((route) => {
        const [op, n] = route.split(' ');
        let arrive;
        switch (op) {
            case 'N': {
                arrive = [start[0] - Number(n), start[1]];
                break;
            }
            case 'W': {
                arrive = [start[0], start[1] - Number(n)];
                break;
            }
            case 'E': {
                arrive = [start[0], start[1] + Number(n)];
                break;
            }
            case 'S': {
                arrive = [start[0] + Number(n), start[1]];
                break;
            }
        }
        
        if (canGo(start, arrive)) {
            start = arrive;
        }
    })
    
    return start;
}
