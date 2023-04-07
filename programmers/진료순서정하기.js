function solution(emergency) {
    const answer = [];
    const emergencyWithIndex = emergency.map((item, index) => [item, index]);
    emergencyWithIndex.sort((prev, cur) => cur[0] - prev[0]);
    emergencyWithIndex.forEach((item, index) => answer[item[1]] = index + 1);
    return answer;
}