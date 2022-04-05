#include <iostream>
#include <vector>
#define MAX 10 + 1
#define INF 20000 + 1
using namespace std;

int dx[5] = {0, 0, 1, 0, -1};
int dy[5] = {0, 1, 0, -1, 0};

int n;
int answer = INF;

int board[MAX][MAX];
bool visited[MAX][MAX];

bool checkVisited(int x, int y)
{
    for (int k = 0; k < 5; k++)
    {
        int nx = x + dx[k];
        int ny = y + dy[k];
        if (visited[nx][ny])
            return false;
    }

    return true;
}

int setVisited(int x, int y)
{
    int sum = 0;
    for (int k = 0; k < 5; k++)
    {
        int nx = x + dx[k];
        int ny = y + dy[k];
        visited[nx][ny] = true;
        sum += board[nx][ny];
    }

    return sum;
}

void resetVisited(int x, int y)
{
    for (int k = 0; k < 5; k++)
    {
        int nx = x + dx[k];
        int ny = y + dy[k];
        visited[nx][ny] = false;
    }
}

void dfs(int x, int y, int cnt, int total)
{
    if (cnt == 3)
    {
        answer = min(answer, total);
        return;
    }

    int i = x, j = y;
    for (i; i < n - 1; i++)
    {
        for (j; j < n - 1; j++)
        {
            if (checkVisited(i, j))
            {
                dfs(i, j + 1, cnt + 1, total + setVisited(i, j));
                resetVisited(i, j);
            }
        }
        j = 1;
    }
}

int main()
{
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            cin >> board[i][j];
        }
    }

    dfs(1, 1, 0, 0);

    cout << answer << "\n";

    return 0;
}