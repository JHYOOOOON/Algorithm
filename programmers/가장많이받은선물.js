function solution(friends, gifts) {
	const giftCount = Array.from({ length: friends.length }, () => Array(friends.length).fill(0));
	const friendsIndex = {};
	const giftPoint = Array(friends.length).fill(0);
	const nextMonthGift = Array(friends.length).fill(0);

	friends.forEach((friend, index) => (friendsIndex[friend] = index));
	gifts.forEach((gift) => {
		const [a, b] = gift.split(" ");

		giftCount[friendsIndex[a]][friendsIndex[b]]++;
	});

	for (let me = 0; me < friends.length; me++) {
		for (let other = 0; other < friends.length; other++) {
			giftPoint[me] = giftPoint[me] + giftCount[me][other] - giftCount[other][me];
		}
	}

	for (let me = 0; me < friends.length; me++) {
		for (let other = me + 1; other < friends.length; other++) {
			if (me === other) continue;
			if (giftCount[me][other] === giftCount[other][me]) {
				if (giftPoint[me] === giftPoint[other]) continue;
				giftPoint[me] < giftPoint[other] ? nextMonthGift[other]++ : nextMonthGift[me]++;
			} else {
				giftCount[me][other] < giftCount[other][me] ? nextMonthGift[other]++ : nextMonthGift[me]++;
			}
		}
	}

	return Math.max(...nextMonthGift);
}
