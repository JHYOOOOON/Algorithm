function solution(order) {
	let answer = 0;
	const nowOrder = [...order.reverse()];
	const reverseStack = [];
	const boxes = Array.from({ length: order.length }, (_, index) => order.length - index);

	while (nowOrder.length) {
		if (nowOrder[nowOrder.length - 1] === boxes[boxes.length - 1]) {
			nowOrder.pop();
			boxes.pop();
			answer++;
			continue;
		}
		if (nowOrder[nowOrder.length - 1] === reverseStack[reverseStack.length - 1]) {
			nowOrder.pop();
			reverseStack.pop();
			answer++;
			continue;
		}
		if (boxes.length > 0) {
			reverseStack.push(boxes.pop());
			continue;
		}
		break;
	}

	return answer;
}
