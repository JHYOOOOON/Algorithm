function solution(todo_list, finished) {
	return todo_list.filter((_, index) => finished[index] === false);
}
