#include <string>
#include <vector>
#include <iostream>
#define MAX 10000 + 1
using namespace std;

bool visited[MAX];
string result = "a";

void check(string before, string path, int depth, vector<vector<string> > &tickets)
{
    if (depth == tickets.size())
    {
        if (path < result)
            result = path;
        return;
    }

    for (int i = 0; i < tickets.size(); i++)
    {
        if (!visited[i] && tickets[i][0] == before)
        {
            visited[i] = 1;
            check(tickets[i][1], path + tickets[i][1], depth + 1, tickets);
            visited[i] = 0;
        }
    }
}

vector<string> solution(vector<vector<string> > tickets)
{
    check("ICN", "ICN", 0, tickets);

    vector<string> answer;
    for (int i = 0; i < result.length() - 2; i += 3)
        answer.push_back(result.substr(i, 3));
    return answer;
}