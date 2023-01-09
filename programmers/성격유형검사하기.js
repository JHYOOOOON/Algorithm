function solution(survey, choices) {
    let answer = '';
    const scores = {};
    const MBTI = ['RT', 'CF', 'JM', 'AN'];
    
    survey.forEach((item, index) => {
        const [disagree, agree] = item.split('');
        const score = choices[index] - 4;
        
        if (score < 0) {
            scores[disagree] = (scores[disagree] || 0) + score * -1;
        } else {
            scores[agree] = (scores[agree] || 0) + score;
        }
    })
    
    MBTI.forEach((item) => {
        const [a, b] = item.split('');
        answer += ((scores[a] || 0) >= (scores[b] || 0)) ? a : b;
    })
    
    return answer;
}