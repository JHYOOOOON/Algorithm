#include <iostream>
#define MAX_LEN 20 + 5
#define MAX_HAPPY 100
using namespace std;

int main()
{
    int n;
    cin >> n;

    int happy[MAX_LEN] = {0}, health[MAX_LEN] = {0}, d[MAX_HAPPY] = {0};

    for (int i = 0; i < n; i++)
        cin >> health[i];

    for (int i = 0; i < n; i++)
        cin >> happy[i];

    for (int i = 0; i < n; i++)
    {
        for (int j = 100; j >= health[i]; j--)
        {
            d[j] = max(d[j], d[j - health[i]] + happy[i]);
        }
    }

    cout << d[MAX_HAPPY - 1] << "\n";

    return 0;
}