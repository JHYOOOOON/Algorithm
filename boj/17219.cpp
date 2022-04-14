#include <iostream>
#include <string>
#include <map>
using namespace std;

int main()
{
    int n, m;
    map<string, string> storedPassword;
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cin >> n >> m;

    string siteName, password;
    while (n--)
    {
        cin >> siteName >> password;
        storedPassword.insert(make_pair(siteName, password));
    }

    while (m--)
    {
        cin >> siteName;
        cout << storedPassword[siteName] << "\n";
    }

    return 0;
}