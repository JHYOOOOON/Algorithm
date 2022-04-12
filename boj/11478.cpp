#include <iostream>
#include <set>
using namespace std;

int main()
{
    string str;
    cin >> str;

    set<string> s;
    int len = 1;
    while (len <= str.length())
    {
        string temp;
        for (int i = 0; i <= str.length() - len; i++)
        {
            temp = str.substr(i, len);
            s.insert(temp);
        }
        len++;
    }

    cout << s.size() << "\n";

    return 0;
}