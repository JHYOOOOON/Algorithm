const hourToMinute = (time) => {
	const [hour, minute] = time.split(":");
	return Number(minute) + Number(hour) * 60;
};

const convertMelody = (melody) => {
	return melody.replace(/[A-Z](?=#)/g, (alpha) => alpha.toLowerCase()).replace(/#/g, "");
};

function solution(m, musicinfos) {
	let answer = "(None)";
	const cm = convertMelody(m);
	let maxPlayTime = 0;

	musicinfos.map((musicinfo, _) => {
		const [start, end, title, music] = musicinfo.split(",");
		const playTime = hourToMinute(end) - hourToMinute(start);

		let convertedMelody = convertMelody(music);
		let melody = "";
		let len = playTime - melody.length < 0 ? 0 : playTime - melody.length;

		while (len) {
			let splitLen;
			splitLen = len <= convertedMelody.length ? len : convertedMelody.length;
			melody += convertedMelody.substr(0, splitLen);
			len -= splitLen;
		}

		if (melody.search(cm) !== -1 && playTime > maxPlayTime) {
			answer = title;
			maxPlayTime = playTime;
		}
	});

	return answer;
}
