#include <iostream>
#include <map>
using namespace std;

int main()
{
    int n;
    string book;
    map<string, int> soldBook;

    cin >> n;
    while (n--)
    {
        cin >> book;
        if (soldBook.find(book) == soldBook.end())
        {
            soldBook.insert(make_pair(book, 1));
        }
        else
        {
            soldBook[book]++;
        }
    }

    string answer;
    int mx = 0;

    for (map<string, int>::iterator it = soldBook.begin(); it != soldBook.end(); it++)
    {
        if (it->second >= mx)
        {
            if (it->second == mx)
            {
                answer = answer > it->first ? it->first : answer;
            }
            else
            {
                mx = it->second;
                answer = it->first;
            }
        }
    }

    cout << answer << "\n";

    return 0;
}