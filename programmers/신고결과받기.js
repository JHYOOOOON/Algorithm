function solution(id_list, report, k) {
    const answer = Array(id_list.length).fill(0);
    const reportMap = new Map();
    
    report.map((from_to) => {
        const [from, to] = from_to.split(' ');
        if(reportMap.has(to)) {
            const reporter = reportMap.get(to).split(' ');
            reporter.indexOf(from) === -1 && reporter.push(from);
            reportMap.set(to, reporter.join(' '));
        } else {
            reportMap.set(to, from);
        }
    })
    
    for (const [reportedPerson, value] of reportMap) {
        const reporter = value.split(' ');
        if(reporter.length >= k) {
            reporter.map(person => {
                const index = id_list.indexOf(person);
                answer[index]++;
            })
        }
    }
    
    return answer;
}