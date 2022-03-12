const MAX_NUMBER = 1000000 + 1;

const sosu = Array(MAX_NUMBER).fill(true);
const sosuNumbers = new Set();

const isSosu = (numbers) => {
    sosu[0] = sosu[1] = false;
    for(let i=2; i<Math.sqrt(MAX_NUMBER); i++){
        if(!sosu[i]) continue;
        for(let j=i*2; j<=MAX_NUMBER; j+=i){
            sosu[j] = false;
        }
    }
}

const checkNumbers = (str, numbers, isused) => {
    if(sosu[Number(str)]) sosuNumbers.add(Number(str));
    if(str.length === numbers.length) return;
    
    for(let idx=0; idx<numbers.length; idx++){
        if(!isused[idx]){
            isused[idx] = 1;
            checkNumbers(str+numbers[idx], numbers, isused);
            isused[idx] = 0;
        }
    }
}

const solution = (numbers) => {
    const isused = Array(8);
    
    isSosu(numbers);
    checkNumbers("", numbers, isused);
    
    return sosuNumbers.size;
}