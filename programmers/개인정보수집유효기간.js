function solution(today, terms, privacies) {
    const answer = [];
    const term = {};
    
    terms.forEach((item) => {
        const [key, value] = item.split(' ');
        term[key] = Number(value);
    })
    
    privacies.forEach((privacy, index) => {
        const [date, kind] = privacy.split(' ');
        const standardDate = new Date(today);
        const privacyDate = new Date(date);
        
        standardDate.setDate(standardDate.getDate() + 1);
        privacyDate.setMonth(privacyDate.getMonth() + term[kind]);
        (privacyDate < standardDate) && answer.push(index + 1);
    })
    
    return answer;
}