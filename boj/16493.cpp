#include <iostream>
#define MAX 20 + 1
#define MAX_PAGE 300 + 1
using namespace std;

int main()
{
    int n, m;
    int day[MAX] = {0}, page[MAX] = {0}, d[MAX_PAGE] = {0};
    cin >> n >> m;

    for (int i = 0; i < m; i++)
    {
        cin >> day[i] >> page[i];
    }

    int mx = 0;
    for (int i = 0; i < m; i++)
    {
        for (int j = n; j >= day[i]; j--)
        {
            d[j] = max(d[j], d[j - day[i]] + page[i]);
            mx = max(mx, d[j]);
        }
    }

    cout << mx << "\n";

    return 0;
}