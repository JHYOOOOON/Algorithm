#include <string>
#include <vector>
#include <queue>

using namespace std;

long long solution(int n, vector<int> works) {
    long long answer = 0;
    priority_queue<int> pq;

    for (int index = 0; index < works.size(); index++) {
        pq.push(works[index]);
    }

    while (n--) {
        int top = pq.top();

        if (top) {
            pq.pop();
            pq.push(top - 1);
        } else {
            break;
        }
    }

    while (!pq.empty()) {
        int top = pq.top();
        pq.pop();
        answer += top * top;
    }

    return answer;
}