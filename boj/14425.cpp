#include <iostream>
#include <set>
using namespace std;

int main()
{
    int n, m;
    cin >> n >> m;

    set<string> s;
    string str;
    while (n--)
    {
        cin >> str;
        s.insert(str);
    }

    int answer = 0;
    while (m--)
    {
        cin >> str;
        if (s.find(str) != s.end())
        {
            answer++;
        }
    }

    cout << answer << "\n";

    return 0;
}