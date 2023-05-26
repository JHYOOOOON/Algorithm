function solution(num_list) {
    let count = 0;
    num_list.forEach((num) => {
        let _num = num;
        while(_num !== 1) {
            _num = (_num % 2) ? (_num - 1) / 2 : _num / 2;
            count++;
        }
    })
    return count;
}