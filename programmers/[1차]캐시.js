function solution(cacheSize, cities) {
	let answer = 0;
	const cache = [];

	cities.forEach((city) => {
		const upper_city = city.toUpperCase();
		const idx = cache.indexOf(upper_city);
		if (idx === -1) {
			answer += 5;
			if (cache.length && cache.length === cacheSize) cache.shift();
			cache.push(upper_city);
		} else {
			answer += 1;
			cache.splice(idx, 1);
			cache.push(upper_city);
		}
	});

	return cacheSize ? answer : cities.length * 5;
}
