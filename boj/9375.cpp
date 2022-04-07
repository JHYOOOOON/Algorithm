#include <iostream>
#include <map>
using namespace std;

int main()
{
    int T, n;
    string type, name;

    cin >> T;
    while (T--)
    {
        cin >> n;
        map<string, int> clothes;
        for (int i = 0; i < n; i++)
        {
            cin >> name >> type;
            if (clothes.find(type) == clothes.end())
            {
                clothes[type] = 1;
            }
            else
            {
                clothes[type]++;
            }
        }

        int answer = 1;
        for (auto it = clothes.begin(); it != clothes.end(); it++)
        {
            answer *= (it->second + 1);
        }

        cout << answer - 1 << "\n";
    }

    return 0;
}