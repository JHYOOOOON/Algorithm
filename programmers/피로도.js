function solution(k, dungeons) {
    let mxCnt = 0;
    const len = dungeons.length;
    const isUsed = Array(len).fill(false);
    
    const findMxDungeons = (cnt, tired) => {
        if(cnt > mxCnt) mxCnt = cnt;
        if(cnt === len || mxCnt === len) return;
        
        for(let idx=0; idx<len; idx++){
            if(!isUsed[idx] && dungeons[idx][0] <= tired){
                isUsed[idx] = 1;
                findMxDungeons(cnt+1, tired-dungeons[idx][1]);
                isUsed[idx] = 0;
            }
        }
    }
    
    findMxDungeons(0, k);
    
    return mxCnt;
}